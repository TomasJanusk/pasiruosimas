import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSave(formData)
    navigate("/contacts");
  };
  console.log(formData);
  return (
    <form className="container" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Vardas</label>
        <input
          name="firstName"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formData.firstName}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Pavarde</label>
        <input
          name="surname"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formData.surname}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">El.pastas</label>
        <input
          name="email"
          type="email"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Zinute</label>
        <textarea
          name="message"
          type="text"
          className="form-control"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
