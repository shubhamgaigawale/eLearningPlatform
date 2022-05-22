import "./App.css";
import Signup from "./Components/AuthenticationComponents/Signup";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/AuthenticationComponents/Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
