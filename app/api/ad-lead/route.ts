import { LeadTemplate } from "@/components/form/lead-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, phone, purpose, type, time, countryCode, regionCode } =
      body;
    const { data, error } = await resend.emails.send({
      from: "GRLV <contact@goldenretreatinternational.com>", // change this
      to: ["contact@goldenretreatinternational.com"],
      bcc: ["sulaiman@slmcreatives.com", "warrenchelvan@gmail.com"],
      subject: "Ad Lead Submission",
      react: LeadTemplate({
        name: name,
        email: email,
        phone: phone,
        countryCode: countryCode,
        regionCode: regionCode,
        time: time,
        type: type,
        purpose: purpose
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
