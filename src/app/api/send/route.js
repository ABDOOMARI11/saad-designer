import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_bopN58D9_JbLhSFJmwmT8cfaSP3ezBtnd");

export async function POST(req) {
  const {  email,subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: email,
      to: "saadmouatassim22@gmail.com",
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
