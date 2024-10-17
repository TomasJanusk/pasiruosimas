import React from "react";
import ClientsTable from "../clientsTable/ClientsTable";
import { Link } from "react-router-dom";
import * as service from "../../services/ClientsCrudServices";
import { useState } from "react";
import { useEffect } from "react";

const Clients = () => {
  
  const [clients, setClients] = useState([]);

  useEffect(() => {
    service.getAllClients((clients) => {
      setClients(clients);
    });
  }, []);
   
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-client">
            Prideti klienta
          </Link>
        </li>
      </ul>
      <h2>Clients</h2>
      <ClientsTable data={clients} />
    </div>
  );
};

export default Clients;
