import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Header from '../header/Header';
import Guiahome from '../guia/guiabody/guiahome/Guiahome';

function Guialand() {
  return (
    <div className='app-container'>
      <Header />
      <Guiahome />
    </div>
  );
}

export default Guialand;
