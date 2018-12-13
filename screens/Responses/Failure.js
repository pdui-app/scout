import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo";

import carService from "../../services/car";

import styles from "../../styles/index";

export default class Failure extends React.Component {
  async componentDidMount() {
    await carService.lock();
  }

  render() {
    // const { navigation } = this.props;
    const { navigate } = this.props.navigation;

    const score = Math.floor(Math.random() * (70 - 40 + 1)) + 40;

    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.response_failure_overlay}>
          {/* <Image
            source={require("../../assets/alert.png")}
            style={styles.error}
          /> */}

          <Text style={styles.score}>{score}</Text>
          <Text style={styles.score_info}>Your score</Text>

          <View style={styles.response_failure_card}>
            <Text style={styles.response_card_info}>
              Oopps we could validate your driving integrity.
            </Text>
            <TouchableOpacity
              style={styles.failure_button}
              onPress={() => navigate("CameraPermissions")}
            >
              <Text style={styles.response_button_text}>Try again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    );
  }
}
