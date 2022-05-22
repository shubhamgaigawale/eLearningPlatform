import "./App.css";
import "./Components/UI Components/Common Components/HeaderComponents/Header"
import Header from "./Components/UI Components/Common Components/HeaderComponents/Header";
import Signup from "./Components/AuthenticationComponents/Signup";
import SignIn from "./Components/AuthenticationComponents/Signin";

function App() {
  return (
    <div className="App">
     {/* <Header/> */}
      {/* <h1>Hello World</h1> */}
      <Signup/>
      <SignIn/>
    </div>
  );
}

export default App;
