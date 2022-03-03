import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="app">
      <div className="container">
        <div className="header-container">
          <Header />
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {renderPage()}
        <div class="push"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
