// src/app/api/subscribe/route.js

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const API_KEY = process.env.MC_API_KEY;
    const AUDIENCE_ID = process.env.MC_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      return new Response(
        JSON.stringify({ error: "Missing Mailchimp configuration" }),
        { status: 500 }
      );
    }

    const DATACENTER = API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

    if (response.ok || data.title === "Member Exists") {
      return new Response(JSON.stringify({ message: "Subscribed!" }), {
        status: 200,
      });
    } else {
      console.error("Mailchimp API error:", data);
      return new Response(
        JSON.stringify({
          error: data.detail || data.title || "Error subscribing",
        }),
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
