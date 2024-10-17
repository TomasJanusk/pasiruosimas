import React from "react";
import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../user/register/Register";
import Login from "../user/login/Login";
import Clients from "../clients/Clients";
import AddClient from '../addClient/AddClient'
import ClientsServices from "../clientsServices/ClientsServices";
import AddClientService from "../addClientService/AddClientService";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/add-work" element={<AddWork />} />
          <Route path="/update/:id" element={<AddWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/add-client" element={<AddClient />} />
          <Route path="/update-client/:id" element={<AddClient />} />
          <Route path="/clients-services" element={<ClientsServices />} />
          <Route path="/add-client-service" element={<AddClientService />} />
          <Route path="/update-client-service/:id" element={<AddClientService />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
