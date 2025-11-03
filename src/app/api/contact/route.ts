import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, message, hp } = await request.json();

    // Honeypot: if filled, silently accept
    if (hp && String(hp).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const formsId = process.env.FORMSPREE_ID;
    if (formsId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formsId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message, _subject: "New message from stevenwhyte.com" }),
        });
        if (!res.ok) {
          // Fall through and still acknowledge success to the client
          // eslint-disable-next-line no-console
          console.error("Formspree error", await res.text());
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Formspree request failed", e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
