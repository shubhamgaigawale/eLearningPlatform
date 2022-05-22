import "./App.css";
import "./Components/UI Components/Common Components/HeaderComponents/Header"
import Header from "./Components/UI Components/Common Components/HeaderComponents/Header";
import Signin from "./Components/AuthenticationComponents/Signin";
import Signup from "./Components/AuthenticationComponents/Signup";

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
      {/* <h1>Hello World</h1> */}
      <Signup/>
      <Signin/>
    </div>
  );
}

export default App;
