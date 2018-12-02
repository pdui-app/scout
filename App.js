import { createStackNavigator, createAppContainer } from "react-navigation";

import Splash from "./screens/Splash";
import Scout from "./screens/Scout";
import Register from "./screens/Register";
import Calibration from "./screens/Calibration";

import CameraPermissions from "./screens/CameraPermissions";

const Navigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Scout: { screen: Scout },
    Register: { screen: Register },
    Calibration: { screen: Calibration },
    CameraPermissions: { screen: CameraPermissions }
  },
  {
    initialRouteName: "Calibration",
    headerMode: "none",
    navigationOptions: { swipeEnabled: false, gesturesEnabled: false }
  }
);

const App = createAppContainer(Navigator);

export default App;
