import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './ecommerce.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import tazaImage from './imgecommerce/producto1.jpg';
import agendaImage from './imgecommerce/agenda.png';
import bolsaImage from './imgecommerce/bolsa.png';
import gorroImage from './imgecommerce/gorro.png';
import lentesImage from './imgecommerce/lentes.png';
import llaveroImage from './imgecommerce/llavero.png';
import mochilaImage from './imgecommerce/mochila.png';
import morralImage from './imgecommerce/morral.png';
import poleraImage from './imgecommerce/polera.png';
import poleronImage from './imgecommerce/poleron.png';
import producto2Image from './imgecommerce/producto2.png';
import lanaImage from './imgecommerce/lana.png';
const ProductList = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const formatPrice = (price) => {
    return `$${Math.round(price)}`;
  };

  const products = [
    { id: 1, name: 'Taza', price: 4990, image: tazaImage },
    { id: 2, name: 'Agenda', price: 7990, image: agendaImage },
    { id: 3, name: 'Bolsa', price: 11990, image: bolsaImage },
    { id: 4, name: 'Gorro', price: 9990, image: gorroImage },
    { id: 5, name: 'Lentes', price: 14990, image: lentesImage },
    { id: 6, name: 'Llavero', price: 9990, image: llaveroImage },
    { id: 7, name: 'Mochila', price: 24990, image: mochilaImage },
    { id: 8, name: 'Morral', price: 14990, image: morralImage },
    { id: 9, name: 'Polera', price: 19990, image: poleraImage },
    { id: 10, name: 'Polerón', price: 19990, image: poleronImage },
    { id: 11, name: 'Botellas de Vidrio', price: 11990, image: producto2Image },
    { id: 12, name: 'Gorro de Lana', price: 9990, image: lanaImage },
  ];

  return (
    <>
      <Header />

      <Container className='espacio-tienda'>
        <h2 className='espacio-h2'>Bienvenidos a Ávida Store</h2>
        <div className='d-flex flex-wrap justify-content-between'>
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: '18rem', marginBottom: '20px' }}
            >
              <Card.Img variant='top' src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{formatPrice(product.price)}</Card.Text>
                <Button
                  variant='primary'
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ProductList;
