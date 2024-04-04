

import React from "react";
import "./App.css";
import Header from "./components/Header";
import MapEmbed from "./components/MapEmbed";
import Banner from "./components/banner";
import About from "./components/About"; 
import Customer from "./components/Customer" ;
import Footer from "./components/footer";
import Products from "./components/Products";
function App() {
  return (

    <div>
      <Header />
      <Banner />
      <Products/>
      <Customer />
      <About />
      <MapEmbed />
      <Footer />
    </div>
  );
}

export default App;
