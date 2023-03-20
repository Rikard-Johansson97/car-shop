import { transporter } from "../../../nodemailer/nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const { firstName, lastName, message } = body;

  console.log(firstName, lastName, message);

  if (request.method !== "POST") {
    return new Response("Error, only POST method allowed", {
      status: 400,
    });
  }

  try {
    await transporter.sendMail({
      from: `${firstName} ${lastName} <rikard.com@hotmail.com>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: "New message from your website",
      text: message,
    });
    return new Response(JSON.stringify("Sent email"), {
      status: 200,
    });
  } catch (err: any) {
    console.log("Error sending email", err);
    return new Response(err.message, {
      status: 400,
    });
  }
}
