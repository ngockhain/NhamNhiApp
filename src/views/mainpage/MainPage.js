import React from "react";
import { Menu, Avatar, HStack, HamburgerIcon, Icon, IconButton, Pressable, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CustomBarChart from "./CustomBarChart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomStackBarChart from "./CustomStackBarChart";

const Tab = createBottomTabNavigator();

export default function MainPage() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Theo ngày" component={CustomBarChart} />
      <Tab.Screen name="Theo tuần" component={CustomStackBarChart} />
    </Tab.Navigator>
  );
}