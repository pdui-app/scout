import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },

  /* ----------------------- */

  start: {}

  /* ----------------------- */
});
