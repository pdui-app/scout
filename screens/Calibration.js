import React from "react";
import { Camera, Permissions } from "expo";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";

import calibrationService from "../services/calibrate";

import styles from "../styles";

export default class Calibration extends React.Component {
  state = {
    pics: 0,
    left: "",
    picturesTaken: 0,
    flash: false,
    countdown: "",
    calibrating: false,
    startCountdown: false,
    cameraPermission: false,
    isCountingDown: false,
    calibrationCountdown: false,
    info: "Look at the dot on the screen"
  };

  async componentDidMount() {
    const { navigate } = this.props.navigation;

    const { calibrating } = this.state;

    if (!calibrating) {
      this.setState({ startCountdown: true });
      this.countdown(3);
      await this.waitSeconds(1);
      this.setState({ isCountingDown: true });
    }
  }

  countdown = async count => {
    let timeLeft = count;
    for (let i = 0; i < count; i++) {
      await this.waitSeconds(1);
      this.setState({ countdown: timeLeft });
      timeLeft--;
    }
    await this.waitSeconds(1);
    timeLeft == 0 && this.beginCalibration();
  };

  beginCalibration = async () => {
    let { picturesTaken } = this.state;
    let waitSeconds = 3;
    if (picturesTaken < 1) {
      try {
        this.setState({
          storyCountdown: false,
          startCountdown: false,
          countdown: waitSeconds,
          picturesTaken: picturesTaken + 1
        });
        await this.flash();
        await this.left();
        this.setState({ calibrationCountdown: true });
        await this.countdown(2);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        this.setState({ calibrationCountdown: false });
        await this.flash();
        await this.right();
      } catch (e) {
        console.log(e);
      }
    }
  };

  flash() {
    this.setState({ flash: true });
    setTimeout(() => this.setState({ flash: false }), 200);
  }

  waitSeconds = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

  left = async () => {
    try {
      const { pics } = this.state;

      await this.flash();
      const { base64 } = await this.camera.takePictureAsync({
        base64: true
      });

      const buffer = `data:image/jpg;base64,${base64}`;

      this.setState({ pics: pics + 1, left: buffer });
    } catch (e) {
      console.log(e);
    }
  };

  right = async () => {
    try {
      const { pics, left } = this.state;
      const { base64 } = await this.camera.takePictureAsync({
        base64: true,
        quality: 1
      });
      const buffer = `data:image/jpg;base64,${base64}`;

      const right = buffer;

      this.setState({
        calibrating: true,
        info: "Running some analytics, one sec.."
      });
      const cal = await calibrationService.calibrate(left, right);
      const { navigate } = this.props.navigation;
      await AsyncStorage.setItem("LEFT", cal.left);
      await AsyncStorage.setItem("RIGHT", cal.right);
      navigate("Classify");
    } catch (e) {
      const { navigate } = this.props.navigation;
      console.log(e);
      navigate("Failure_Calib");
    }
  };

  render() {
    const {
      pics,
      startCountdown,
      isCountingDown,
      calibrationCountdown,
      countdown,
      flash,
      calibrating,
      info
    } = this.state;

    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        {flash && <View style={styles.flash} />}

        <View style={styles.overlay}>
          <View style={styles.calibration_header_container}>
            <Text style={styles.calibration_header}>Calibration</Text>
            <Text style={styles.calibration_info}>{info}</Text>
          </View>

          {!calibrating &&
            (pics < 1 ? (
              <TouchableOpacity
                style={styles.calibration_circle_left}
                onPress={this.left}
              />
            ) : (
              <TouchableOpacity
                style={styles.calibration_circle_right}
                onPress={this.right}
              />
            ))}

          {startCountdown && (
            <View style={styles.countdown_container}>
              {isCountingDown ? (
                <Text style={styles.countdown}>{countdown}</Text>
              ) : (
                <Text style={styles.countdown_getReady}>Get Ready..</Text>
              )}
            </View>
          )}

          {calibrationCountdown && (
            <View style={styles.countdown_container}>
              <Text style={styles.countdown}>{countdown}</Text>
            </View>
          )}

          {calibrating && (
            <View style={styles.countdown_container}>
              <Image
                source={require("../assets/loading.gif")}
                style={styles.loading}
              />
            </View>
          )}
        </View>
      </Camera>
    );
  }
}
