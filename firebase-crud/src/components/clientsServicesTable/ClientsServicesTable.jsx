import React from "react";
import ClientService from "../clientService/ClientService";

const ClientsTable = (props) => {
  console.log('from clients table',props.data)
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Paslauga</th>
          <th>Keisti</th>
          <th>Salinti</th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((clientService) => (
          <ClientService key={clientService.id} id={clientService.id} service={clientService.service} />
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;