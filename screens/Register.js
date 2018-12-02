import React from "react";

import { TouchableOpacity, Text, View, Image, WebView } from "react-native";

import styles from "../styles";

export default class Register extends React.Component {
  state = { register: false };

  renderView = () => {
    const { register } = this.state;

    if (register) {
      return (
        <View style={styles.webview}>
          <WebView
            useWebKit={true}
            source={{ url: "https://mangohype.netlify.com" }}
            onNavigationStateChange={e => console.log(e)}
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
