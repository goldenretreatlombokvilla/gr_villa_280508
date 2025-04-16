import { SeminarTemplate } from "@/components/form/seminar-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { datetime, email } = body;
    const { data, error } = await resend.emails.send({
      from: "GRLV <contact@goldenretreatinternational.com>", // change this
      to: ["contact@goldenretreatinternational.com"],
      bcc: ["sulaiman@slmcreatives.com"],
      replyTo: email,
      subject: "New Seminar RSVP",
      react: SeminarTemplate({
        email: email,
        name: body.name,
        phone: body.phone,
        message: body.message
      })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
