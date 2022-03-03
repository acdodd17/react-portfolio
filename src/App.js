import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

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
      <div className="header-container flex-row space-between mx-2 my-2">
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <main className="flex-row center">
        {renderPage()}
      </main>
      <div className="push"></div>
      <Footer />
    </div>
  );
}

export default App;
