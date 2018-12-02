import { createStackNavigator, createAppContainer } from "react-navigation";

import Splash from "./screens/Splash";
import Scout from "./screens/Scout";
import Register from "./screens/Register";

const Navigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Scout: { screen: Scout },
    Register: { screen: Register }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
    navigationOptions: { swipeEnabled: false, gesturesEnabled: false }
  }
);

const App = createAppContainer(Navigator);

export default App;
