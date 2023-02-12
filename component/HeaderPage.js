import React from "react";
import { Menu, Avatar, HStack, HamburgerIcon, Icon, IconButton, Pressable, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderPage() {

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Menu w="200" trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              {/* <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} /> */}
              <HamburgerIcon style={{color: 'white', padding: 10, margin: 10}}/>
            </Pressable>;
          }}>
            <Menu.Item>Thống kê</Menu.Item>
            <Menu.Item>Thêm chi tiêu</Menu.Item>
            <Menu.Item>Thêm loại chi tiêu</Menu.Item>
          </Menu>

          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <Avatar bg="green.500" alignSelf="center" size="sm" source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }}></Avatar>
      </HStack>
    </>
  );
}

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