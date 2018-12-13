import { createStackNavigator, createAppContainer } from "react-navigation";

import Scout from "./screens/Scout";
import Splash from "./screens/Splash";
import Classify from "./screens/Classify";
import Register from "./screens/Register";
import Calibration from "./screens/Calibration";

import Failure from "./screens/Responses/Failure";
import Failure_Calib from "./screens/Responses/Failure_Calib";
import Success from "./screens/Responses/Success";

import CameraPermissions from "./screens/CameraPermissions";

const Navigator = createStackNavigator(
  {
    Scout: { screen: Scout },
    Splash: { screen: Splash },
    Classify: { screen: Classify },
    Register: { screen: Register },
    Calibration: { screen: Calibration },
    CameraPermissions: { screen: CameraPermissions },
    Failure: { screen: Failure },
    Failure_Calib: { screen: Failure_Calib },
    Success: { screen: Success }
  },
  {
    initialRouteName: "CameraPermissions",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: false,
      gesturesEnabled: false,
      headerVisible: false
    }
  }
);

const App = createAppContainer(Navigator);

export default App;
