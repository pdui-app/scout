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
  permissions_container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#47F4C8"
  },
  circle: {
    backgroundColor: "#47F4C8",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    position: "absolute"
  },

  flash: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgb(255, 255, 255)",
    width: width,
    height: height,
    zIndex: 5
  },
  loading: {
    height: 150,
    width: 150
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
  },
  /* ----------------------- */

  overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(0, 240, 179,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  calibration_header_container: {
    alignItems: "center",
    position: "absolute",
    transform: [{ rotate: "90deg" }],
    right: -75
  },

  calibration_header: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 50,
    marginBottom: 5
  },
  calibration_info: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 22
  },
  calibration_circle_left: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    position: "absolute",
    top: -15
  },
  calibration_circle_right: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    position: "absolute",
    bottom: -15
  },
  countdown_container: {
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    position: "absolute"
  },
  countdown: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 90
  },
  countdown_getReady: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "900"
  },

  /* ----------------------- */
  response_failure_overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(240, 18, 0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  response_success_overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(0, 240, 62,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  response_failure_card: {
    backgroundColor: "#F9FFF6",
    width,
    height: height / 3,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  response_success_card: {
    backgroundColor: "#FFF6F6",
    width,
    height: height / 3,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  failure_button: {},
  success_button: {},
  response_button_text: { fontWeight: "700", color: "#fff", fontSize: 20 },
  response_card_info: { fontWeight: "500", color: "#515151", marginBottom: 20 },
  failure_button: {
    backgroundColor: "#F3513B",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 65
  },
  success_button: {
    backgroundColor: "#3FEA5E",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 65
  },

  /* ----------------------- */

  fake: {
    height: 50,
    width: 50,
    opacity: 0.5,
    position: "absolute",
    // right: 0,
    // bottom: 0
  },
  score: {
    fontWeight: "900",
    fontSize: 100,
    color: "#fff"
  },
  score_info: {
    fontWeight: "600",
    fontSize: 30,
    color: "#fff"
  },
  btn_container: {
    width,
    height
  }
});
