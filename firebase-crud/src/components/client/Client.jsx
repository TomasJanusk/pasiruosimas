import React from "react";
import * as service from "../../services/ClientsCrudServices";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Client = (props) => {
  const navigate = useNavigate();

  const deleteHandler = () => {
    service.deleteClient(props.id);
    navigate("/clients");
  };
  return (
    <tr>
      <td>{props.company}</td>
      <td>
        <Link to={`/update-client/${props.id}`}>Atnaujinti</Link>
      </td>
      <td>
        <a href="#" onClick={deleteHandler}>
          Trinti
        </a>
      </td>
    </tr>
  );
};

export default Client;
