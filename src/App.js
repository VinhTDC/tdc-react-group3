import React from "react";
import "./App.css";
import Header from "./components/Header";
import MapEmbed from "./components/MapEmbed";
import Banner from "./components/banner";
import About from "./components/About";
import Customer from "./components/Customer";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Customer />
      <MapEmbed />
      <Footer />

    </div>
  );
}

export default App;
