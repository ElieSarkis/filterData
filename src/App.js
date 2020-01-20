import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import FormCards from "./Components/FormCards/FormCards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <br />

      <h1 className="mt-3 mb-5">
        Candidates for the Software Engineer vacancy:
      </h1>
      <div className="input-group">
        <FormCards />
      </div>

      <Footer />
    </div>
  );
}

export default App;
