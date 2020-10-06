import {useState,useEffect} from 'react';

const drinksurl='https://www.thecocktaildb.com/api/json/v2/9973533/'
const drinkurl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const appIdentifier = 'drinksut';

const useLoadMedia = (limit=null) => {
  const [mediaArray, setMediaArray] = useState([]);
  

  const loadMedia = async () => {
    console.log('FTW', limit);
    let json = [];

    try {
      
      if ( limit == null) {
        const response = await fetch(drinksurl + 'randomselection.php'); 
         json = await response.json();
      } else {
        const response = await fetch(apiUrl + 'random.php');
         json = await response.json();
      }
        setMediaArray(json.drinks);        
      } catch (error) {
        console.log('loadMedia error', error);
      }
    
      //return mediaArray;
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return mediaArray;
  };

  const postLogIn = async (userCreds) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(userCreds),
    };
    try {
      const response = await fetch(apiUrl + 'login', options);
      const userData = await response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };
  
      const postRegistration = async (newUser) => {
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(newUser),
        };
        try {
          const response = await fetch(apiUrl + 'users', options);
          const result = await response.json();
          if (response.ok) {
            return result;
          } else {
            throw new Error(result.message);
          };
        } catch (e) {
          throw new Error(e.message);
        }
      };
  
  const checkToken = async (token) => {
    const options = {
      method: 'GET',
      headers: {'x-access-token':token},
    };
    try {
      const response = await fetch(apiUrl + 'users/user', options);
      const userData = await response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const getAvatar = async (id) => {

    try {
      const response = await fetch(apiUrl + 'tags/' + id  );
      const avatarImages = await response.json();
      if (response.ok) {
        return avatarImages;
      } else {
        throw new Error(avatarImages.message);
      };
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const checkAvailable = async (username) => {
    try {
      const response = await fetch(apiUrl + 'users/username/' + username);
      const resultData = await response.json();
      if (response.ok) {
        if (resultData.available) {
          return null;
        } else {
          return 'Username ' + username + ' is not available.';
        }
      } else {
        throw new Error(resultData.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const upload = async (fd,token) => {
    const options = {
      method: 'POST',
      headers: {
        'x-access-token': token},
      data: fd,
      url: apiUrl + 'media',
    };
    try {
      const response = await axios(options);
      return response.data;
    } catch (e) {
      throw new Error('Error upload', e.message);
    }
  };

  const updateFile = async (fileId, fileInfo, token) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(fileInfo),
    };
    try {
      const response = await fetch(apiUrl + 'media/' + fileId, options);
      const result = await response.json();
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const deleteFile = async (fileId, token) => {
    const options = {
      method: 'DELETE',
      headers: {
        'x-access-token': token,
      },
    };
    try {
      const response = await fetch(apiUrl + 'media/' + fileId, options);
      const result = await response.json();
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };
const postTag = async (tag, token) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(tag),
  };
  try {
    const response = await fetch(apiUrl + 'tags',options);
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.error)
    }
  } catch (e) {
    console.log('nope', e);
  }
}

const getUser = async (id, token) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },

  };
  try {
    const response = await fetch(apiUrl + 'users/'+ id,options);
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.error)
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export {
  useLoadMedia,
  postLogIn,
  postRegistration,
  checkToken,
  getAvatar,
  checkAvailable,
  upload,
  updateFile,
  deleteFile,
  postTag,
  getUser
};