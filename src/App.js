
import React from "react";
import "./App.css";
import Header from "./components/Header";
import MapEmbed from "./components/MapEmbed";
import Banner from "./components/banner";
import About from "./components/About"; 
import Customer from "./components/Customer" ;
import Product from "./components/Products";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Product/>
      <About />
      <Customer/>
      <MapEmbed />
      
    </div>
  );
}

export default App;
