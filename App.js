import React from "react";
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar
} from "native-base";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Text>Thống kê</Text>
        <Text>Thêm dữ liệu</Text>
        <Text>Thêm dữ liệu 1</Text>
      </VStack>
    </DrawerContentScrollView>
  )
}

function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box safeArea flex={1}>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            <Drawer.Screen name="Inbox" component={Component} />
            <Drawer.Screen name="Outbox" component={Component} />
            <Drawer.Screen name="Favorites" component={Component} />
            <Drawer.Screen name="Archive" component={Component} />
            <Drawer.Screen name="Trash" component={Component} />
            <Drawer.Screen name="Spam" component={Component} />
          </Drawer.Navigator>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}