import * as React from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { newProfileImageSelected } from "../actions";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Images } from "../../assets/images";

interface ImagePickerProps {
  image: string;
  newProfileImageSelected: (imageURI: string) => {type: string, payload: string};
}

class ImagePickerComponent extends React.Component<ImagePickerProps> {
  componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert('Camera roll permissions required to select an image.');
      }
    }
  }

  _pickImage = async () => {
    try {
      let selectedImage = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1
      });
      if (!selectedImage.cancelled) {
        this.onImageSelect(selectedImage.uri);
      }
    } catch (err) {
      console.log(err);
    }
  }

  onImageSelect = (image: string) => {
    this.props.newProfileImageSelected(image);
  }

  render() {
    return (
      <View style={styles.pickerContainer}>
        <TouchableOpacity style={styles.touchable} onPress={this._pickImage}>
          <Image
            source={this.props.image ? {uri: this.props.image} : Images.profilePlaceholder}
            style={styles.imageProfile}
          />
          {/* Replace this image with one at a higher resolution */}
          <Image
            source={Images.profilePlusSign}
            style={styles.imagePlus}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ registration }: any) => {
  const { image } = registration;
  return { image };
}

export default connect(mapStateToProps, { newProfileImageSelected })(ImagePickerComponent);

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },  
  imageProfile: { 
    height: 120,
    width: 120,
    borderRadius: 30,
    resizeMode: 'contain'
  },
  imagePlus: {
    resizeMode: 'contain',
    zIndex: 1,
    position: 'absolute',
    top: 100,
    left: 100
  },
})