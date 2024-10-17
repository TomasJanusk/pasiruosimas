import React from "react";
import ClientsServicesTable from "../clientsServicesTable/ClientsServicesTable";
import { Link } from "react-router-dom";
import * as service from "../../services/ServiceCrudServices";
import { useState } from "react";
import { useEffect } from "react";

const ClientsServices = () => {
  
  const [clientsServices, setClientsServices] = useState([]);

  useEffect(() => {
    service.getAllServices((clientsServices) => {
      setClientsServices(clientsServices);
    });
  }, []);
   
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-item btn btn-primary" to="/add-client-service">
            Prideti paslauga
          </Link>
        </li>
      </ul>
      <h2>Clients</h2>
      <ClientsServicesTable data={clientsServices} />
    </div>
  );
};

export default ClientsServices;