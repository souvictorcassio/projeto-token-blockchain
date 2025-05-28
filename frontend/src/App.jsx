import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ListProperties from "./pages/ListProperties";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<ListProperties />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
