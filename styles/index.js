import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },

  container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center"
  },

  footer_color: {
    fontSize: 35,
    color: "#47F4C8",
    fontWeight: "700",
    position: "absolute",
    bottom: 10
  },

  webview: {
    width,
    height: height,
    zIndex: 2
  },

  /* ----------------------- */

  start: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    padding: 15
  },

  startText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900"
  },
  /* ----------------------- */

  register_logo: {
    height: 250,
    width: 250
  },
  register_info: {
    color: "#636363",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 15
  },
  register_button: {
    backgroundColor: "#47F4C8",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 65
  },

  register_button_text: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 30
  }
});
