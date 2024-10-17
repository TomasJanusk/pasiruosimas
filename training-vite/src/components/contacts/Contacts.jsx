import React from "react";
import { Link } from "react-router-dom";
import Message from "../message/Message";

const Contacts = ({ contacts }) => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-form">
            Nauja zinute
          </Link>
        </li>
      </ul>
      <h2>Contacts</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavarde</th>
            <th>El.Pastas</th>
            <th>Zinute</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <Message
              key={index}
              firstName={contact.firstName}
              surname={contact.surname}
              email={contact.email}
              message={contact.message}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
