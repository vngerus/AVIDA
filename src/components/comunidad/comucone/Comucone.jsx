import React from "react";
import "./Comucone.css";
import comuconecta from "/src/assets/img/mnature.png";

const Comucone = () => {
  return (
    <div className="container container-espacio">
      <div className="divider-center2">
        <div className="section-verde"></div>
      </div>
      <div className="row espacio-row">
        <div className="col-md-6 flex-column justify-content-center">
          <h1 className="conecta-title mb-3 align-self-start">
            Explora con nosotros
          </h1>
          <p className="conecta-text text-muted align-self-start">
            En Ávida, valoramos profundamente nuestros ecosistemas. Te instamos
            a unirte a nosotros para preservar estos tesoros naturales. Al
            explorar nuestras rutas, te pedimos que veas más allá de tus huellas
            y consideres el impacto que tenemos en la tierra. Los ecosistemas
            son esenciales para nuestra vida y la vida silvestre. Al cuidar
            nuestras rutas, escribimos una historia de conservación y aseguramos
            un hogar para todas las criaturas. Únete a nuestra misión para
            proteger nuestro planeta.
          </p>
        </div>
        <div className="col-md-6 flex-imagen">
          <img
            src={comuconecta}
            alt="Descripción de la imagen"
            className="img-fluid conecta-image"
          />
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
};

export default Comucone;
