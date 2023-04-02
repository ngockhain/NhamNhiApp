import React, { useEffect } from "react";
import { Menu, Avatar, HStack, HamburgerIcon, Icon, IconButton, Pressable, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import CustomBarChart from "./CustomBarChart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import CustomStackBarChart from "./CustomStackBarChart";
import { expenseOperations } from "../../state/ducks/expense";
import Spinner from "react-native-loading-spinner-overlay";


const Tab = createBottomTabNavigator();

export default function MainPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(expenseOperations.fetchAllExpense());
  }, []);

  const expensePage = useSelector((state) => state.expensePage ?? {});
  const isLoading = expensePage.isLoading;

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Theo ngày" component={CustomBarChart} />
        <Tab.Screen name="Theo tuần" component={CustomStackBarChart} />
      </Tab.Navigator>

      {isLoading && <Spinner
        visible={isLoading}
        color={'blue'}
      />}
    </>
  );
}