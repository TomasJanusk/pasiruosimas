import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, login } from "../../../services/AuthServices";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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
    login(userData.email, userData.password);
  };
  return (
    <form className="form container" onSubmit={submitHandler}>
      <div className="form-group mt-3">
        <input
          type="email"
          placeholder="El.pastas"
          name="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          placeholder="Slaptazodis"
          name="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Prisijungti
        </button>
      </div>
      <div className="form-group mt-3">
        <p>
          Neturite paskyros ?<Link to="/register">Galite susikurti</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
