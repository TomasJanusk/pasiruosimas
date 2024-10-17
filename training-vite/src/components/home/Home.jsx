import React from "react";
import { useState } from "react";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}/${month}/${date}`;
  }

  return (
    <div>
      <h1>Home</h1>
      <h4>{currentDate}</h4>
    </div>
  );
};

export default Home;
