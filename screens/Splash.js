import React from "react";
import { AsyncStorage } from "react-native";

class Splash extends React.Component {
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem("TOKEN");
      token !== null && this.setState({ token });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { token } = this.state;

    token ? navigate("Calibrate") : navigate("Register");

    return <View />;
  }
}

export default Splash;
