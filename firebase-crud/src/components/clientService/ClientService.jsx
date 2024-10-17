import React from "react";
import * as service from "../../services/ServiceCrudServices";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ClientService = (props) => {
  const navigate = useNavigate();

  const deleteHandler = () => {
    service.deleteService(props.id);
    navigate("/clients-service");
  };
  return (
    <tr>
      <td>{props.service}</td>
      <td>
        <Link to={`/update-client-service/${props.id}`}>Atnaujinti</Link>
      </td>
      <td>
        <a href="#" onClick={deleteHandler}>
          Trinti
        </a>
      </td>
    </tr>
  );
};

export default ClientService;