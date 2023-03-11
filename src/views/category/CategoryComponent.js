import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, Icon, VStack,
  IconButton, Pressable, Text, Modal, Button,
  FormControl, Stack, Input, Select, CheckIcon
} from "native-base";
import rgbHex from 'rgb-hex';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import IconListComponent from "./IconListComponent";

export default function CategoryComponent() {
    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const [redComp, setRedComp] = useState(65);
    const [greenComp, setGreenComp] = useState(131);
    const [blueComp, setBlueComp] = useState(196);
    return (
      <>
        <Pressable m={1} onPress={() => setOpenCategoryModal(true)}>
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
                  <HStack alignItems={"center"} justifyContent="space-around">
                    <Text style={{ fontSize: 12 }}>Màu sắc</Text>
                    <Text style={{
                      fontSize: 12,
                      backgroundColor: `#${rgbHex(redComp, greenComp, blueComp)}`
                    }}>#{rgbHex(redComp, greenComp, blueComp)}</Text>
  
                    <Input width={"10%"} m={1} variant="underlined" size="sm" placeholder="r" _light={{
                      placeholderTextColor: "blueGray.700"
                    }} _dark={{
                      placeholderTextColor: "blueGray.100"
                    }} />
                    <Input width={"10%"} m={1} variant="underlined" size="sm" placeholder="g" _light={{
                      placeholderTextColor: "blueGray.700"
                    }} _dark={{
                      placeholderTextColor: "blueGray.100"
                    }} />
                    <Input width={"10%"} m={1} variant="underlined" size="sm" placeholder="b" _light={{
                      placeholderTextColor: "blueGray.700"
                    }} _dark={{
                      placeholderTextColor: "blueGray.100"
                    }} />
  
                  </HStack>
                  <IconListComponent />
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