import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="app">
      <div className="container">
        <Header />
        <div class="push"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
