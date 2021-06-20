import React, {useState, useRef, Fragment} from 'react';
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Camera from './Camera';
import Colors from '../constants/Colors';

const ImgPicker = props => {
  const [showCamera, setShowCamera] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);
  const verifyPermissions = async () => {
    let cameraStatus = null;
    if (Platform.OS === 'ios') {
      cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
    } else {
      console.log(`Platform is android>>>`);
      cameraStatus = await request(PERMISSIONS.ANDROID.CAMERA);
    }

    switch (cameraStatus) {
      case RESULTS.UNAVAILABLE:
        Alert.alert(
          'Insufficient permissions!',
          'This feature is not available (on this device / in this context)',
          [{text: 'Okay'}],
        );
        return false;
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        Alert.alert(
          'Insufficient permissions!',
          'The permission has not been requested / is denied but requestable',
          [{text: 'Okay'}],
        );
        return false;
        break;
      case RESULTS.GRANTED:
        return true;
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Insufficient permissions!',
          'The permission is denied and not requestable anymore',
          [{text: 'Okay'}],
        );
        return false;
        break;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    setShowCamera(true);
  };

  const onImagePick = uri => {
    setPickedImage(uri);
    setShowCamera(false);
    props.onImageTaken(uri);
  };

  let cameraView = null;

  if (showCamera) {
    cameraView = <Camera onSelect={onImagePick} />;
  }

  return (
    <Fragment>
      {showCamera && <Camera onSelect={onImagePick} />}
      {!showCamera && (
        <View style={styles.container}>
          <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
              <Text>No image picked yet.</Text>
              <Image style={styles.image} source={{uri: pickedImage}} />
            </View>
            <Button
              title="Take Image"
              color={Colors.primary}
              onPress={takeImageHandler}
            />
          </View>
        </View>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ImgPicker;
