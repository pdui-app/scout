import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo";

import carService from "../../services/car";

import styles from "../../styles/index";

export default class Success extends React.Component {
  unlock = async () => {
    await carService.unlock();
  };

  render() {
    const { navigate } = this.props.navigation;
    const score = Math.floor(Math.random() * (93 - 70 + 1)) + 70;

    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.response_success_overlay}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.score_info}>Your score</Text>

          <View style={styles.response_success_card}>
            <Text style={styles.response_card_info}>
              You’ve been validated.
            </Text>
            <TouchableOpacity
              style={styles.success_button}
              onPress={this.unlock}
            >
              <Text style={styles.response_button_text}>UNLOCK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    );
  }
}
