import * as React from "react";

interface LeadTemplateProps {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  type: string;
  time: string;
  countryCode: string;
  regionCode: string;
}

export const LeadTemplate: React.FC<Readonly<LeadTemplateProps>> = ({
  name,
  email,
  phone,
  purpose,
  type,
  time,
  countryCode,
  regionCode
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
        <td>Purpose:</td>
        <td>{purpose}</td>
      </tr>
      <tr>
        <td>Type:</td>
        <td>{type}</td>
      </tr>
      <tr>
        <td>Country:</td>
        <td>{countryCode}</td>
      </tr>
      <tr>
        <td>Region:</td>
        <td>{regionCode}</td>
      </tr>
      <tr>
        <td>Time:</td>
        <td>{time}</td>
      </tr>
    </table>

    <p>
      Please follow up with <span className="font-bold">{name}</span> to begin
      the contact process.
    </p>
  </div>
);
