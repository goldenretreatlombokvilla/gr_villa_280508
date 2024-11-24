import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  interest: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  interest
}) => (
  <div>
    <h1>Hi!</h1>
    <p>
      There is a new contact request for you from Golden Retreat Lombok Villas
      website. The details are as follows.
    </p>
    <table className="ml-10">
      <tr>
        <td>Name:</td>
        <td className="font-bold">{name}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>Phone:</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Interest:</td>
        <td>{interest}</td>
      </tr>
    </table>

    <p>
      Please follow up with <span className="font-bold">{name}</span> to begin
      the contact process.
    </p>
  </div>
);
