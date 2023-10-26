import React from "react";
import "./tienda.css";

function Tienda() {
  return (
    <div className="tienda-container">
      <div className="tienda-image">
        <div className="custom-space">
          <h2 className="custom-text-2 display-4">
            Visita nuestra<br></br>tienda
          </h2>
          <button className="ver-tienda-button">Ver Tienda</button>
        </div>
      </div>
      <div className="guia-button"></div>
    </div>
  );
}

export default Tienda;
