import React from "react";
import { View, Text, AsyncStorage } from "react-native";

import { Permissions } from "expo";

import styles from "../styles";

export default class CameraPermissions extends React.Component {
  state = { cameraPermission: false };

  componentDidMount = async () => {
    // await AsyncStorage.removeItem("LEFT");
    // await AsyncStorage.removeItem("RIGHT");
    await AsyncStorage.removeItem("TOKEN");

    // await AsyncStorage.clear(e => console.log(e));

    const { navigate } = this.props.navigation;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    const isGranted = status === "granted";
    if (isGranted) {
      navigate("Splash");
    }
  };

  render() {
    return (
      <View style={styles.permissions_container}>
        <Text>No access to camera</Text>
      </View>
    );
  }
}
