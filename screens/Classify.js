import React from "react";
import { Camera } from "expo";
import { View, Text, Image, TouchableOpacity } from "react-native";

import classifyService from "../services/classify";
// import carService from "../services/car";

import styles from "../styles";

const Dimensions = require("Dimensions");
let { width, height } = Dimensions.get("window");

export default class Classify extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "Testing",
      testing: false,
      remainingTime: 10,
      countdown: "",
      classifying: false,
      startCountdown: false,
      classifyCountdown: false,
      isCountingDown: false,
      info: "Look at the dot on the screen"
    };
    this.timer = () => {};
  }
  async componentDidMount() {
    try {
      const { classifying } = this.state;

      if (!classifying) {
        this.setState({ startCountdown: true });
        this.countdown(3);
        await this.waitSeconds(1);
        this.setState({ isCountingDown: true });
      }
    } catch (e) {
      console.log(e);
    }
  }

  waitSeconds = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

  countdown = async count => {
    try {
      let timeLeft = count;
      for (let i = 0; i < count; i++) {
        await this.waitSeconds(1);
        this.setState({ countdown: timeLeft });
        timeLeft--;
      }
      await this.waitSeconds(1);
      timeLeft == 0 && this.record();
    } catch (e) {
      console.log(e);
    }
  };

  record = async () => {
    try {
      this.setState({
        classifyCountdown: false,
        startCountdown: false,
        testing: true
      });
      this.beginClassifying();
      const { uri } = await this.camera.recordAsync({
        quality: Camera.Constants.VideoQuality["480p"],
        maxDuration: 10,
        mute: true
      });

      if (uri) {
        this.setState({
          testing: false,
          classifying: true,
          startCountdown: false,
          classifyCountdown: false,
          header: "Classifying",
          info: "Getting your results, sit tight.."
        });
        this.classify(uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  stop = () => this.camera.stopRecording();

  beginClassifying = () => {
    const { remainingTime } = this.state;

    this.timer = setInterval(() => {
      if (!remainingTime || remainingTime < 0) {
        // clearInterval(timer);
        return false;
      }
      this.setState(prevState => {
        return { remainingTime: prevState.remainingTime - 1 / 60 };
      });
    }, 1000 / 60);
  };

  classify = async uri => {
    const { navigate } = this.props.navigation;
    try {
      // const result = await classifyService.classify(uri);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      remainingTime,
      startCountdown,
      classifyCountdown,
      classifying,
      isCountingDown,
      countdown,
      info,
      testing,
      header
    } = this.state;

    let t = remainingTime - 10;

    let pos = ((1 + Math.sin(t - Math.PI)) * height) / 2 - 15;

    let dotPos = { bottom: pos };

    const { navigate } = this.props.navigation;
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="front"
      >
        <View style={styles.container}>
          <View style={styles.calibration_header_container}>
            <Text style={styles.calibration_header}>{header}</Text>
            <Text style={styles.calibration_info}>{info}</Text>
          </View>

          {startCountdown && (
            <View style={styles.countdown_container}>
              {isCountingDown ? (
                <Text style={styles.countdown}>{countdown}</Text>
              ) : (
                <Text style={styles.countdown_getReady}>Get Ready..</Text>
              )}
            </View>
          )}

          {classifyCountdown && (
            <View style={styles.countdown_container}>
              <Text style={styles.countdown}>{countdown}</Text>
            </View>
          )}

          {classifying && (
            <View style={styles.countdown_container}>
              <Image
                source={require("../assets/loading.gif")}
                style={styles.loading}
              />
            </View>
          )}

          {classifying && (
            <TouchableOpacity
              style={styles.btn_container}
              onPress={() => {
                clearInterval(this.timer);
                navigate("Success");
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  clearInterval(this.timer);
                  navigate("Failure");
                }}
              >
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.fake}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          {testing && <View style={[styles.circle, dotPos]} />}
        </View>
      </Camera>
    );
  }
}
