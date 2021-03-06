import React, {useState,useEffect, useContext} from "react";
import {Container, Content, Form, Button,Text, Spinner, Title, Card} from "native-base";
import PropTypes from 'prop-types';
import FormTextInput from "../components/FormTextInput";
import {Image,Platform} from "react-native";
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import {appIdentifier, postTag, upload, useLoadMedia} from "../hooks/APIHooks";
import AsyncStorage from "@react-native-community/async-storage";
import {Video} from "expo-av";
import List from "../components/List";
import {AuthContext} from "../context/AuthContext";




const Upload = ({navigation,route}) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileType, setFileType] = useState('image');
  const {setIsLoggedIn, user} = useContext(AuthContext);
  
  //console.log('"#¤"#¤', route.params.avatar);
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        setFileType(result.type);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const doUpload = async () => {
    setIsLoading(true);
    
    try {
      const formData = new FormData(); 
      formData.append('title', inputs.title);
      formData.append('description', inputs.description);

      const filename = image.split('/').pop();
      const match = /\.(\w+)$/.exec(filename);

      let type = match ? `${fileType}/${match[1]}` : fileType;
      if (type === 'image/jpg') type = 'image/jpeg';


      formData.append('file', {uri: image, name: filename, type});
      //token
      const userToken = await AsyncStorage.getItem('userToken');
      
      //upload
      const resp = await upload(formData, userToken);
      console.log('File uploaded', resp);

      const postTagResponce = await postTag({
        file_id: resp.file_id,
        tag: user.user_id,
      }, userToken);
      console.log(' posting', postTagResponce);

      setTimeout(() => {
        doReset();

        navigation.push('Home');
      }, 2000);
      setIsLoading(false);
    } catch (e) {
      
      throw new Error('ai perkele', e);
    } finally {
      setIsLoading(false);
    }
  }
  const getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);



  const {
    handleInputChange,
    uploadErrors,
    inputs,
    reset,

  } = useUploadForm();

  const doReset = () => {
    reset();
    setImage(null);
  };

  return (
    <Container>
      <Content padder>
        <Card>
          <Text style={{alignSelf:'center'}}>Set your Avatar</Text>
        <List navigation={navigation} output="2" id="user_id" route={route.params.avatar} />
        </Card>
        
        {image &&
          <>
          {fileType === 'image' ?
            <Image
              source={{uri: image}}
              style={{height: 400, width: null, flex: 1}}
            />
            :
            <Video
              source={{uri: image}}
              style={{height: 400, width: null, flex: 1}}
              useNativeControls={true}
            />
          }
          </>
        }
        <Form>
          <FormTextInput
            autoCapitalize="none"
            placeholder="title"
            value={inputs.title}
           onChangeText={(txt) => handleInputChange('title', txt)}
           error={uploadErrors.title}
          />
           <FormTextInput
           autoCapitalize="none"
            placeholder="description"
            value={inputs.description}
           onChangeText={(txt) => handleInputChange('description', txt)}
           error={uploadErrors.description}
          />
        </Form>
        <Button block onPress={pickImage}>
          <Text>Choose file</Text>
        </Button>
        <Button block disabled={(uploadErrors.title !== null || uploadErrors.description !== null || image ===null)} onPress={doUpload}>
          <Text>Upload</Text>
        </Button>
        {isLoading && <Spinner/>}
        <Button block onPress={doReset}>
        <Text>Reset</Text>
        </Button>
      </Content>
    </Container>
  );
};

Upload.protoType = {
  navigation: PropTypes.object,
};

export default Upload;