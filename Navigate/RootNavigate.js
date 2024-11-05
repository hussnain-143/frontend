import React from "react";
import { Color } from "../components/styles";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Signup from "../screen/Signup";
import Forgot from "../screen/Forgot";
import Login from "../screen/Login";
import Splash from "../screen/Splash";
import Home from "../screen/Home";
import Menu from "../screen/Menu";
import HelpRequest from "../screen/HelpRequest";
import ChangePassword from "../screen/ChangePassword";
import DeleteAccount from "../screen/DeleteAccount";
import MapPage from "../screen/MapPage";
import Accept from "../screen/Accept";
import Connect from "../screen/Connect";
import Complete from "../screen/Complete";
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: "transparent",
          },
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
        <Stack.Screen name="HelpRequest" component={HelpRequest} />
        <Stack.Screen name="MapPage" component={MapPage} />
        <Stack.Screen name="Accept" component={Accept} />
        <Stack.Screen name="Connect" component={Connect} />
        <Stack.Screen name="Complete" component={Complete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
