import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, CheckIcon
} from "native-base";
import { Picker } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

function AddDataComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
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
          <HStack alignItems="center" justifyContent="space-between" flex={1}>
            <VStack>
              <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>
                Phương tiện vận chuyển
              </Text>
              <Text fontSize={'sm'} fontWeight="normal" color={"warmGray.300"}>
                Hôm nay bố đi Grab về
              </Text>
            </VStack>
            <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>20,000 đồng</Text>
          </HStack>
        </HStack>
      </Pressable>

      <Modal isOpen={open} onClose={() => setOpen(false)} closeOnOverlayClick={false} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Chi tiết</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid>
              <Stack w="100%">
                <HStack flex={1} justifyContent="space-between">
                  <Input width="48%" variant="underlined" size="sm" placeholder="Ngày giờ" _light={{
                    placeholderTextColor: "blueGray.700"
                  }} _dark={{
                    placeholderTextColor: "blueGray.100"
                  }} />
                  <Input width="48%" variant="underlined" size="sm" placeholder="Loại chi tiêu" _light={{
                    placeholderTextColor: "blueGray.700"
                  }} _dark={{
                    placeholderTextColor: "blueGray.100"
                  }} />
                </HStack>
                <Input m={1} variant="underlined" size="sm" placeholder="Số tiền" _light={{
                  placeholderTextColor: "blueGray.700"
                }} _dark={{
                  placeholderTextColor: "blueGray.100"
                }} />
                <Input m={1} variant="underlined" size="sm" placeholder="Ghi chú" _light={{
                  placeholderTextColor: "blueGray.700"
                }} _dark={{
                  placeholderTextColor: "blueGray.100"
                }} />
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button colorScheme="secondary" onPress={() => { setOpen(false); }}>
                Xóa
              </Button>
              <Button colorScheme="primary" onPress={() => { setOpen(false); }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default function AddDataPage() {
  return (
    <NativeBaseProvider config={config}>
      <AddDataComponent />
    </NativeBaseProvider>
  );
};