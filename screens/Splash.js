import React from "react";
import { Camera } from "expo";
import { TouchableOpacity, Text } from "react-native";

import styles from "../styles";

class Splash extends React.Component {
  start = () => console.log("Starting");
  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <TouchableOpacity onPress={this.start}>
          <Text>Start</Text>
        </TouchableOpacity>
      </Camera>
    );
  }
}

export default Splash;
