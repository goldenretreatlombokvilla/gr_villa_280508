import * as React from "react";

interface EmailTemplateProps {
  date: string;
  email: string;
}

export const BookTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  date,
  email
}) => (
  <div>
    <h1>Hi!</h1>
    <p>
      There is a new appointment booking request for you from Golden Retreat
      Lombok Villas website. The details are as follows.
    </p>
    <table className="ml-10">
      <tr>
        <td>Email:</td>
        <td className="font-bold">{email}</td>
      </tr>
      <tr>
        <td>Date & Time:</td>
        <td>{date}</td>
      </tr>
    </table>

    <p>
      Please follow up with <span className="font-bold">{email}</span> to begin
      the contact process.
    </p>
  </div>
);
