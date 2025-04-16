import * as React from "react";

interface EmailTemplateProps {
  email: string;
  name: string;
  phone: string;
  message: string;
}

export const SeminarTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  phone,
  message
}) => (
  <div>
    <h1>Hi!</h1>
    <p>I would like to rsvp for the Discovery Seminar! Here are my details.</p>
    <table className="ml-10">
      <tr>
        <td>Seminar:</td>
        <td>Discovery Seminar</td>
      </tr>
      <tr>
        <td>Name:</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>Phone:</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>Message:</td>
        <td>{message}</td>
      </tr>
    </table>

    <p>
      Please follow up with <span className="font-bold">{email}</span> to begin
      the contact process.
    </p>
  </div>
);
