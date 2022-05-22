import "./App.css";
import "./Components/UI Components/Common Components/HeaderComponents/Header";
import Header from "./Components/UI Components/Common Components/HeaderComponents/Header";
import Signup from "./Components/AuthenticationComponents/Signup";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/AuthenticationComponents/Signin";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
