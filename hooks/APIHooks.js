import {useState,useEffect} from 'react';

const drinkurl='https://www.thecocktaildb.com/api/json/v2/9973533/'
//const drinkurl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const appIdentifier = 'drinksut';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit) => {
    
      try {
        const response = await fetch(drinkurl + 'randomselection.php');
        const json = await response.json();
        /*let media = await Promise.all(json.map(async (item) => {
          const resp2 = await fetch(apiUrl + 'media/' + item.file_id);
          const json2 = await resp2.json();
          return json2;
           }));*/

        
        setMediaArray(json.drinks);
      
      } catch (error) {
        console.log('loadMedia error', error);
      }
    
    
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return mediaArray;
  };


export {useLoadMedia};