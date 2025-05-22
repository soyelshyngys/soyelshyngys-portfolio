
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, subject }: ContactEmailRequest = await req.json();

    // Here you would normally use a service like Resend, SendGrid, or Mailgun
    // For now, we'll just log the message details and return a success response
    console.log("Received contact message:", {
      from: email,
      name: name,
      subject: subject,
      message: message,
    });
    
    // You can forward this email to your own email using a service like:
    // 1. Send email to your personal address
    // 2. Store the message in a Supabase table for later processing
    // 3. Forward to another service like SendGrid, Mailgun, etc.

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact message received",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
