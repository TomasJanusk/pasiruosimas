import React, { useEffect, useState } from "react";
import * as service from "../../services/ClientsCrudServices";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const AddWork = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    company: "",
    uid: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (id) {
      service.updateClient(id, formData);
    } else {
      service.addClient({
        ...formData,
        uid: user.uid,
      });
    }
    navigate("/clients");
  };
  
  useEffect(() => {
    id && service.getClientById((item) => setFormData(item), id);
  }, [id]);

  
  
  return (
    <div className="card">
      <div className="card-header">
        <h2>Prideti klienta</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="date">Iveskite klienta</label>
            <input
              type="text"
              name="company"
              className="form-control"
              onChange={handleChange}
              value={formData.company}
            />
          </div>

          <div className="mb-3">
            {id ? (
              <button type="submit" className="btn btn-primary">
                Atnaujinti
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Saugoti
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
