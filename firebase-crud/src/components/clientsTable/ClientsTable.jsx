import React from "react";
import Client from "../client/Client";

const ClientsTable = (props) => {
  console.log('from clients table',props.data)
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Klientas</th>
          <th>Keisti</th>
          <th>Salinti</th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((client) => (
          <Client key={client.id} id={client.id} company={client.company} />
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
