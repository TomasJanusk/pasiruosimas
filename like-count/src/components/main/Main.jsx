import React, { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <button className="btn btn-primary" onClick={handleCount}>
        Click {count}
      </button>
    </main>
  );
};

export default Main;
