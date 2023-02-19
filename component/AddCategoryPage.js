import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, CheckIcon
} from "native-base";

import { ColorPicker } from 'react-native-color-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function AddCategoryComponent() {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpenCategoryModal(true)}>
        <HStack
          bg={{
            linearGradient: {
              colors: ['lightBlue.300', 'violet.800'],
              start: [0, 0],
              end: [1, 0]
            }
          }} p="3" space={3}
          alignItems="center"
          rounded="xl">
          <Icon
            color={"warmGray.100"}
            size="10"
            as={<MaterialCommunityIcons name="car" />}
          />
          <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>Phương tiện di chuyển</Text>
        </HStack>
      </Pressable>

      <Modal isOpen={openCategoryModal} onClose={() => setOpenCategoryModal(false)} closeOnOverlayClick={false} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Chi tiết</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid>
              <Stack w="100%">
                <Input m={1} variant="underlined" size="sm" placeholder="Tên loại chi tiêu" _light={{
                  placeholderTextColor: "blueGray.700"
                }} _dark={{
                  placeholderTextColor: "blueGray.100"
                }} />
                <ColorPicker
                  onColorSelected={color => alert(`Color selected: ${color}`)}
                  style={{ flex: 1 }}
                />
                <Input m={1} placeholder="icon pladeholder" />
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button colorScheme="secondary" onPress={() => { setOpenCategoryModal(false); }}>
                Xóa
              </Button>
              <Button colorScheme="primary" onPress={() => { setOpenCategoryModal(false); }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default function AddCategoryPage() {
  return (
    <NativeBaseProvider config={config}>
      <AddCategoryComponent />
    </NativeBaseProvider>
  );
};