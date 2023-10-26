import React, { Component } from 'react';
import './loginform.css';

class Userview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: null,
    };
  }

  handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      this.setState({ imageURL });
    }
  };

  render() {
    const { imageURL } = this.state;

    return (
      <section className='h-100 gradient-custom-2'>
        <div className='container py-5 h-100'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col col-lg-9 col-xl-7'>
              <div className='card'>
                <div
                  className='rounded-top text-white d-flex flex-row'
                  style={{ backgroundColor: '#000', height: '200px' }}
                >
                  <div
                    className='ms-4 mt-5 d-flex flex-column'
                    style={{ width: '150px' }}
                  >
                    {imageURL && (
                      <img
                        src={imageURL}
                        alt='Vista Previa de la Imagen'
                        className='img-fluid img-thumbnail mt-4 mb-2'
                        style={{ width: '150px', zIndex: 1 }}
                      />
                    )}
                    <input
                      type='file'
                      accept='image/*'
                      id='image-upload'
                      onChange={this.handleImageUpload}
                    />
                    <label htmlFor='image-upload'>Cargar Imagen</label>
                  </div>
                  <div className='ms-3' style={{ marginTop: 'auto' }}>
                    <h5>Nombre usuario</h5>
                    <p>Ciudad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Userview;
