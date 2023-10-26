import React from "react";
import "./comuruta.css";
import chercan from "/src/assets/img/chercan.png";
import gorrion from "/src/assets/img/gorrion.png";
import colibri from "/src/assets/img/colibri.png";
import chilco from "/src/assets/img/chilco.jpg";
import florcita from "/src/assets/img/ortiga.png";

function Comuruta() {
  return (
    <div className="container flex-galeria">
      <div className="col-md-5">
        <img
          src={chercan}
          alt="Descripción de la imagen 1"
          className="img-fluid"
        />
      </div>

      <div className="col-md-7">
        <div className="flex-interno">
          <div>
            <img
              src={gorrion}
              alt="Descripción de la imagen 2"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={florcita}
              alt="Descripción de la imagen 3"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="flex-interno">
          <div>
            <img
              src={chilco}
              alt="Descripción de la imagen 4"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={colibri}
              alt="Descripción de la imagen 5"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comuruta;
