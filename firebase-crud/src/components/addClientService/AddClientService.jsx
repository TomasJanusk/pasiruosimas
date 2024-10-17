import React, { useEffect, useState } from "react";
import * as service from "../../services/ServiceCrudServices";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const AddClientService = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    service: "",
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
      service.updateService(id, formData);
    } else {
      service.addService({
        ...formData,
        uid: user.uid,
      });
    }
    navigate("/clients-services");
  };
  
  useEffect(() => {
    id && service.getServiceById((item) => setFormData(item), id);
  }, [id]);

  
  
  return (
    <div className="card">
      <div className="card-header">
        <h2>Prideti paslauga</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="date">Iveskite klienta</label>
            <input
              type="text"
              name="service"
              className="form-control"
              onChange={handleChange}
              value={formData.service}
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

export default AddClientService;