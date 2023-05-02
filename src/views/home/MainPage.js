import React, { useEffect } from "react";
import { Menu, Avatar, HStack, HamburgerIcon, Icon, IconButton, Pressable, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import CustomBarChart from "./CustomBarChart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomStackBarChart from "./CustomStackBarChart";
import { expenseOperations } from "../../state/ducks/expense";
import { categoryOperations } from "../../state/ducks/category";
import Spinner from "react-native-loading-spinner-overlay";


const Tab = createBottomTabNavigator();

export default function MainPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(expenseOperations.fetchAllExpense());
    dispatch(categoryOperations.fetchAllCategory());
  }, []);

  const expensePage = useSelector((state) => state.expensePage ?? {});
  const categoryPage = useSelector((state) => state.categoryPage ?? {});
  const isLoading = expensePage.isLoading && categoryPage.isLoading;

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Theo ngày" component={CustomBarChart}
          options={{
            tabBarLabel: 'Ngày',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-today' color={color} size={size} />
            ),
          }} />

        <Tab.Screen name="Theo tuần" component={CustomStackBarChart}
          options={{
            tabBarLabel: 'Tuần',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-week' color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>

      {isLoading && <Spinner
        visible={isLoading}
        color={'blue'}
      />}
    </>
  );
}