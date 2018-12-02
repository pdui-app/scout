import React from "react";
import { Camera } from "expo";
import { AsyncStorage } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "../styles";

export default class Calibration extends React.Component {
  state = { pics: 0, calibrating: false };

  left = async () => {
    try {
      const { pics } = this.state;
      const { base64 } = await this.camera.takePictureAsync({ base64: true });
      const buffer = `data:image/jpg;base64,${base64}`;

      AsyncStorage.setItem("left", buffer);
      this.setState({ pics: pics + 1 });
    } catch (e) {
      console.log(e);
    }
  };

  right = async () => {
    try {
      const { pics } = this.state;
      const { base64 } = await this.camera.takePictureAsync({ base64: true });
      const buffer = `data:image/jpg;base64,${base64}`;

      await AsyncStorage.setItem("right", buffer);
      pics++;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { pics } = this.state;
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.overlay}>
          <View style={styles.calibration_header_container}>
            <Text style={styles.calibration_header}>Calibration</Text>
            <Text style={styles.calibration_info}>
              Look & press the dot on the screen
            </Text>
          </View>

          {pics < 1 ? (
            <TouchableOpacity
              style={styles.calibration_circle_left}
              onPress={this.left}
            />
          ) : (
            <TouchableOpacity
              style={styles.calibration_circle_right}
              onPress={this.right}
            />
          )}
        </View>
      </Camera>
    );
  }
}
