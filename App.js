import { createStackNavigator, createAppContainer } from "react-navigation";

import Splash from "./screens/Splash";

const Navigator = createStackNavigator(
  { Splash: { screen: Splash } },
  {
    initialRouteName: "Splash",
    headerMode: "none",
    navigationOptions: { swipeEnabled: false, gesturesEnabled: false }
  }
);

const App = createAppContainer(Navigator);

export default App;
