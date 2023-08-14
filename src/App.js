// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Navbar from "./components/Navbar.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333333";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title="TextUtils Is Amazing"
      // },1500);
      // setInterval(() => {
      //   document.title="Install Now"
      // },1200);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>

      {/* <BrowserRouter> */}
        <Navbar
          title="Textutils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path='Path You want to use' element={<What you want to render >}/> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route path="/" element={ */}
            <TextForm
              heading="Enter a text to analyze below."
              mode={mode}
              showAlert={showAlert}
            />
            {/* }></Route> */}
          {/* </Routes> */}


          {/* <About /> */}
        </div>

      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
