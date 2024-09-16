import React, { useState, useEffect } from 'react';
import image from '../1385.jpg'

function DogGallery() {
  //Variables
  const [images, setImages] = useState([]);

  //return a random image in an object type variable
  async function randomImage(){
    try {
      return fetch ('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.message)
          return result.message
        })
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'image :', error);
    }
  }
  
  //Set 10 images in a variable
  useEffect(() => {
    async function getImage() {
      const imageList = [];
      for (let i = 0; i < 10; i++) {
        const image = await randomImage();
        imageList.push(image);
      }
      setImages(imageList);
      console.log(imageList)
    }

    getImage();
  }, []);

  return (
    <div>
      <div class="main">
        <section class="gallery">
          <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1>Gallery</h1>
          </div>
        </section>
        <section class="gallery-image">
        <div class="item-field">
          {images.map((image, index) => (
            //Show the Images
          <div class="item-component" key={index}>
            <img src={`${image}`} alt={`Dog ${index}`}/>   
          </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  )
}

export default DogGallery;