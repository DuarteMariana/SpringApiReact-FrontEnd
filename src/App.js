import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Viagem from "./views/Viagem";
import ViagemCreate from "./views/Viagem/Create";
import Cliente from "./views/Cliente";
import ClienteCreate from "./views/Cliente/Create";
import Contato from "./views/Contato";
import Promo from "./views/Promo";




function App() {
  return (
    <BrowserRouter>
      <Menu />
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Viagem" element={<Viagem/>} />
        <Route path="/Viagem-Create" element={<ViagemCreate/>} />
        <Route path="/Viagem-Update/:id" element={<ViagemCreate/>} />
        <Route path="/Cliente" element={<Cliente/>} />
        <Route path="/Cliente-Create" element={<ClienteCreate/>} />
        <Route path="/Cliente-Update/:id" element={<ClienteCreate/>} />
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Promo" element={<Promo/>}/>
        
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
