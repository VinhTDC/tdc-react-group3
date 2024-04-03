
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MapEmbed from "./components/MapEmbed";
import Banner from "./components/banner";
import About from "./components/About"; 
import Customer from "./components/Customer" ;
function App() {
  return (
    <div>
       <Header />
      <Banner />
      <About />
      <Customer/>
      <MapEmbed />
    </div>
  );
}

export default App;
