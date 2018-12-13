import React from "react";
import queryString from "query-string";
import { AsyncStorage } from "react-native";

import { TouchableOpacity, Text, View, Image, WebView } from "react-native";

import styles from "../styles";

export default class Register extends React.Component {
  state = { register: false, doesNavigate: false };

  async componentDidMount() {
    await AsyncStorage.removeItem("TOKEN");

    this.setState({ register: false });
  }

  renderView = () => {
    const { register } = this.state;

    if (register) {
      return (
        <View style={styles.webview}>
          <WebView
            source={{ url: "https://pdui.now.sh/api/car/login" }}
            onNavigationStateChange={async e => {
              const { url } = e;

              const matchedURL = "https://pdui.now.sh/api/car/callback?code";
              const matchedSubString = url.substring(0, 41);
              const { query } = queryString.parseUrl(url);

              console.log(query);
              try {
                const { navigate } = this.props.navigation;

                query.code
                  ? await AsyncStorage.setItem("TOKEN", query.code)
                  : null;

                const token = await AsyncStorage.getItem("TOKEN");

                if (token) {
                  navigate("Calibration");
                }
              } catch (e) {
                console.log(e);
              }
            }}
          />
        </View>
      );
    }

    return (
      <React.Fragment>
        <Image
          source={require("../assets/logo.png")}
          style={styles.register_logo}
        />

        <Text style={styles.register_info}>Register your vehicle below!</Text>
        <TouchableOpacity
          style={styles.register_button}
          onPress={() => this.setState({ register: true })}
        >
          <Text style={styles.register_button_text}>READY</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderView()}
        <Text style={styles.footer_color}>pdui</Text>
      </View>
    );
  }
}
