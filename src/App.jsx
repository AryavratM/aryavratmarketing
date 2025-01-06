import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>We're Building Something Amazing!</h1>
      </div>
      <p>
        Our website is currently under construction as we work to bring you an
        exceptional online experience. Please check back soon for updates. Thank
        you for your patience and support!
      </p>
    </>
  );
}

export default App;
