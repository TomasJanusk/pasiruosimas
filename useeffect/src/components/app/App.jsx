import { useEffect, useState } from "react";
import Cat from "../cats/Cats";

const App = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    try {
      fetch("https://api.thecatapi.com/v1/breeds")
        .then((response) => response.json())
        .then((data) => setCats(data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(cats);

  return (
    <div className="App">
      {cats.map((cat) => (
        <Cat key={cat.id} name={cat.name} description={cat.description} />
      ))}
    </div>
  );
};

export default App;
