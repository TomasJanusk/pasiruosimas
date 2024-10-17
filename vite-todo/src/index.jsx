import ReactDOM from "react-dom/client";
import App from "./components/app/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
