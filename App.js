import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./Navigate/RootNavigate";
import Splash from "./screen/Splash";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true); // Ignore all log notifications

export default function App() {
  return <RootStack />;
}
