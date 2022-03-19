import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
       <>
      <nav className="navbar navbar-expand-md navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{fontStyle:"oblique", fontSize:"bold"}}>
          Agência World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-black ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Promo" className="nav-link text-black">
                Promoções
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/Viagem" className="nav-link text-black">
                Viagem
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Cliente" className="nav-link text-black">
                Cliente
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contato" className="nav-link text-black">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
       
       </> 


        
    );
}