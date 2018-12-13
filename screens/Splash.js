import React from "react";
import { AsyncStorage, View } from "react-native";

class Splash extends React.Component {
  state = { token: "" };

  componentDidMount = async () => {
    try {
      const { navigate } = this.props.navigation;
      let hasToken = await AsyncStorage.getItem("TOKEN");

      hasToken && this.setState({ token: hasToken });

      const { token } = this.state;

      token ? navigate("Calibration") : navigate("Register");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <View />;
  }
}

export default Splash;
