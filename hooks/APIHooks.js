import {useState,useEffect} from 'react';

const drinksurl='https://www.thecocktaildb.com/api/json/v2/9973533/'
const drinkurl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const appIdentifier = 'drinksut';

const useLoadMedia = (limit) => {
  const [mediaArray, setMediaArray] = useState([]);
  

  const loadMedia = async () => {
    let json = [];

    try {
      console.log(!limit); 
      if (limit == null) {
        const response = await fetch(drinksurl + 'randomselection.php'); 
         json = await response.json();
      } else {
        const response = await fetch(drinkurl + 'random.php');
         json = await response.json();
      }
        setMediaArray(json.drinks);        
      } catch (error) {
        console.log('loadMedia error', error);
      }
    
      return mediaArray;
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return mediaArray;
  };


export {useLoadMedia};