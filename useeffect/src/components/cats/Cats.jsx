import React from "react";

const Cat = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <ul>
        <li>
          <p>{props.description}</p>
        </li>
      </ul>
    </li>
  );
};

export default Cat;
