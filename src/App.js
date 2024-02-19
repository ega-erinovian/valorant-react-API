import React from "react";
import { AgentsPage, Home } from "./containers";
import { Navbar, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes forceRefresh>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agent/:id" element={<AgentsPage />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
