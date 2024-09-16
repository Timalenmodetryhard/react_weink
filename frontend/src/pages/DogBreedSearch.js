import React, { useState, useEffect } from 'react';
import image from '../1385.jpg'

function DogBreedSearch() {
  //Variables
  const [input, setInput] = useState("");
  const [list, setList] = useState({});
  const [images, setImages] = useState([]);
  const [error, setError] = useState("")

  //Get the full list of available dog breeds
  async function getList(){
    try {
      return fetch ('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.message)
          return result.message
        })
    } catch (error) {
      console.error('Error when trying to fetch the image :', error);
    }
  }

  //Get the specified dog breed
  async function getBreed(breed){
    try {
      return fetch (`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.message)
          return result.message
        })
    } catch (error) {
      console.error('Error when trying to fetch the image :', error);
    }
  }
  
  //Set the list in a variable
  useEffect(() => {
    async function showList() {
      const imageList = await getList()
      setList(imageList);
      console.log(imageList)
    }

    showList();
  }, []);

  //Take the request dog breed as a property then put the given images in a variable
  const handleItemClick = async (breedInput) => {
    try {
      breedInput = breedInput.toLowerCase().split(" ");
      for (let breedName in breedInput) {
        console.log(breedInput[breedName])
        if (list[breedInput[breedName]]) {
          if (list[breedInput[breedName]].length === 0) {
            const breedImages = await getBreed(breedInput[breedName]);
            setError("");
            return setImages(breedImages);
          } else {
            for (let subBreedName in breedInput) {
              for (let subBreedName2 in list[breedInput[breedName]]) {
                if (breedInput[subBreedName] === subBreedName2) {
                  const breedImages = await getBreed(`${breedInput[breedName]}-${breedInput[subBreedName]}`);
                  setError("");
                  return setImages(breedImages);
                }
              }
            }
          }
        }
      }
      setError("The specified dog breed doesn\'t exist.")
      setImages([])
      console.error('Dog breed doesn\'t exist.');
    } catch (error) {
      console.log("Error with the request :", error)
    }
  };

  return (
    <div>
      <div class="main">
        <section class="search">
          <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1>Search</h1>
            <input 
              type="text"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
            />
            <button class="submit-breed" type="submit" onClick={() => handleItemClick(input)}>Search</button>
            <h1 style={{color:"red"}}>{error}</h1>
          </div>
        </section>
        <section class="gallery-image">
        {images.length > 0 ? (
          //If we find images in the variable do
          <div class="item-field">
            {images.map((image, index) => (
            <div class="item-component" key={index}>
              <img src={`${image}`} alt={`Dog ${index}`}/>   
            </div>
            ))}
            </div>
          ) : (
            //If we couldn't find images in the variable do
            <div style={{display:"flex", width:"100%", textAlign:"center", justifyContent:"center", height:"fit-content", margin:"100px 0"}}>
              <h1 style={{color:"black"}}>No image displayed.</h1>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default DogBreedSearch;