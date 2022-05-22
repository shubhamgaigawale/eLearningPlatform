import "./App.css";
import "./Components/UI Components/Common Components/HeaderComponents/Header";
import Header from "./Components/UI Components/Common Components/HeaderComponents/Header";
import Signin from "./Components/AuthenticationComponents/Signin";
import Signup from "./Components/AuthenticationComponents/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <h1>Hello World</h1> */}
      {/* <Signup />
      <Signin /> */}

      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
