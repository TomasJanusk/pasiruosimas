import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerUser,
} from "../../../services/AuthServices";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    registerUser(
      userData.firstName,
      userData.email,
      userData.password
    );
  };
  console.log("user data from google", user);
  return (
    <form className="form container" onSubmit={submitHandler}>
      <div className="form-group mt-3">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Jusu vardas"
          name="firstName"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="email"
          onChange={handleChange}
          placeholder="El.pastas"
          name="email"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          onChange={handleChange}
          placeholder="Slaptazodis"
          name="password"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Registruotis
        </button>
      </div>
      <div className="form-group mt-3">
        <p>
          Turite paskyra ?<Link to="/login">Galite prisijungti</Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
