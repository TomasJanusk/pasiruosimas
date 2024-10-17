import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "../home/Home";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Header from "../header/Header";
import AddForm from "../addForm/AddForm";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleSave = (formData) => {
    setContacts((prevData) => [formData, ...prevData]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts contacts={contacts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-form" element={<AddForm onSave={handleSave} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
