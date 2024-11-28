import { BookTemplate } from "@/components/form/book-template";
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
      bcc: ["sulaiman@slmcreatives.com", "warrenchelvan@gmail.com"],
      replyTo: email,
      subject: "New Booking Appointment",
      react: BookTemplate({
        date: datetime,
        email: email
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
