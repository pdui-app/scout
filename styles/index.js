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
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center"
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
  }
  /* ----------------------- */
});
