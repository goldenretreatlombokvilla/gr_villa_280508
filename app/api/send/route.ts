import { EmailTemplate } from "@/components/form/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, phone, interest } = body;
    const { data, error } = await resend.emails.send({
      from: "GRLV <contact@goldenretreatinternational.com>",
      to: ["contact@goldenretreatinternational.com"],
      cc: ["sulaiman@slmcreatives.com"],
      subject: "Discovery Call Booking",
      react: EmailTemplate({
        name: name,
        email: email,
        phone: phone,
        interest: interest
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
