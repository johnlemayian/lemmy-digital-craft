import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { name, email, message, session_id } = await req.json()

    // Store chat message
    const { error: insertError } = await supabaseClient
      .from('chat_messages')
      .insert({
        name,
        email,
        message,
        session_id,
        created_at: new Date().toISOString(),
      })

    if (insertError) throw insertError

    // Send email notification
    const emailHtml = `
      <h2>New Chat Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Session ID:</strong> ${session_id}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
    `

    const emailResponse = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
      },
      body: JSON.stringify({
        to: 'princelemar3@gmail.com',
        subject: `New Chat Message from ${name}`,
        html: emailHtml,
      }),
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})