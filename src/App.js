import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
