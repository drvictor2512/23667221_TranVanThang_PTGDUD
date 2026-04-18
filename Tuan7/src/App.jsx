import { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [authType, setAuthType] = useState(null);

  return (
    <>
      <Navbar setAuthType={setAuthType} />
      <div className="content">
        {authType === "login" && <Login onClose={() => setAuthType(null)} />}
        {authType === "signup" && <Signup />}
        {authType === null && <Home />}
      </div>
    </>
  );
}

export default App;