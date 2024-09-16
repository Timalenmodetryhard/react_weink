import React, { useState, useEffect } from 'react';
import imageback from '../1385.jpg'

function Home() {
    const [image, setImage] = useState("");

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
    
    //Set the image in a variable
    useEffect(() => {
        async function getImage() {
        const imageList = [];
        const image = await randomImage();
        imageList.push(image);
        setImage(imageList);
        console.log(imageList)
        }

        getImage();
    }, []);
    return (
        <div>
            <div class="main">
                <section class="home">
                    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h1>Welcome to the Ultimate Dog Gallery!</h1>
                        <div class="text">
                            <p>Explore our collection of adorable and heartwarming dog images. Whether you're a dog lover or just looking for a smile, you'll find a diverse range of breeds and personalities in our gallery. From playful puppies to majestic adult dogs, each image captures the unique charm and beauty of our furry friends. Enjoy browsing through our curated gallery and let these lovable dogs brighten your day!</p>
                        </div>
                    </div>
                </section>
                <section class="gallery-image show-image">
                    
                    <div>
                    <h1 style={{color:"black"}}>Random dog</h1>
                        <img src={`${image}`} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
