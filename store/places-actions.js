import FileSystem from 'react-native-fs';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = `${FileSystem.DocumentDirectoryPath}/${fileName}`;
    console.log(`new path >>>>${newPath}`);

    try {
      await FileSystem.moveFile({
        filepath: image,
        destPath: `file://${newPath}`,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({type: ADD_PLACE, placeData: {title: title, image: newPath}});
  };
};
