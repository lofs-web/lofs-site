// /api/subscribe.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const API_KEY = process.env.MC_API_KEY; // store your Mailchimp API key in Vercel environment variable
  const AUDIENCE_ID = process.env.MC_AUDIENCE_ID; // your audience ID
  const DATACENTER = API_KEY.split("-")[1];

  try {
    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, status: "subscribed" }),
    });

    const data = await response.json();
    if (response.ok || data.title === "Member Exists") {
      return res.status(200).json({ message: "Subscribed!" });
    } else {
      return res.status(response.status).json({ error: data.title || "Error subscribing" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
