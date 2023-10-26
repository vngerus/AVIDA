import React from 'react';
import '../mapa/mapacrea.css';

export default function Mapacrea() {
  const customStyles = {
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '-160px',
  };

  return (
    <div className='home-container-mapa'>
      <h1 className='display-4 custom-text' style={customStyles}>
        Crea tus rutas
      </h1>
    </div>
  );
}
