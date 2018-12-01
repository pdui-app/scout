import React from "react";
import { Camera } from "expo";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "../styles";

class Scout extends React.Component {
  start = async () => {
    const { uri } = await this.camera.recordAsync({
      quality: Camera.Constants.VideoQuality["480p"],
      maxDuration: 30,
      mute: true
    });
  };

  stop = () => this.camera.stopRecording();

  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPressIn={this.start}
            onPressOut={this.stop}
            style={styles.start}
          >
            <Text style={styles.startText}>Start</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}

export default Scout;
