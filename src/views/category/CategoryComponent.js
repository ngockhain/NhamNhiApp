import React, { useEffect, useState } from 'react';
import {
  Menu, Avatar, HStack, Icon, VStack,
  IconButton, Pressable, Text, Modal, Button,
  FormControl, Stack, Input, Select, CheckIcon
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import rgbHex from 'rgb-hex';

import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import IconListComponent from "./IconListComponent";
import { categoryOperations } from '../../state/ducks/category';
import { formatNumber, createSaveData, createRemoveData } from '../../utils';

export default function CategoryComponent(props = {}) {
  const [openAddDataModal, setOpenAddDataModal] = useState(false);
  const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

  const { categoryIdx, isNew } = props;
  const categoryDetail = useSelector((state) => state.categoryPage.category[categoryIdx]);

  const [redComp, setRedComp] = useState(Number(categoryDetail.color_r));
  const [greenComp, setGreenComp] = useState(Number(categoryDetail.color_g));
  const [blueComp, setBlueComp] = useState(Number(categoryDetail.color_b));
  const [hexColor, setHexColor] = useState(categoryDetail.color_hex);

  useEffect(() => {
    if (redComp && blueComp && greenComp) {
      setHexColor(rgbHex(redComp, greenComp, blueComp));
      setValue('color_hex', rgbHex(redComp, greenComp, blueComp));
    }
  }, [redComp, greenComp, blueComp]);

  useEffect(() => {
    if (isNew) {
      setOpenAddDataModal(true);
    }

    setValue('icon', categoryDetail.icon);
    setValue('id', categoryDetail.id);
  }, []);

  const dispatch = useDispatch();

  const SaveCategoryFunc = () => {
    if (categoryDetail.isNew) {
      dispatch(categoryOperations.addAsyncCategory(createSaveData('7', getValues(), categoryIdx)));
    } else {
      dispatch(categoryOperations.editAsyncCategory(createSaveData('7', getValues(), categoryIdx)));
    }
    setOpenAddDataModal(false);
  }

  const RemoveCategoryFunc = () => {
    if (categoryDetail.isNew) {
      dispatch(categoryOperations.removeCategory({ categoryIdx }));
    } else {
      dispatch(categoryOperations.removeAsyncCategory(createRemoveData('7', categoryDetail, categoryIdx)));
    }
    setOpenAddDataModal(false);
  }

  return (
    <>
      <Pressable m={1} onPress={() => setOpenAddDataModal(true)}>
        <HStack
          // bg={{
          //   linearGradient: {
          //     // colors: ['lightBlue.300', 'violet.800'],
          //     colors: [`#${categoryDetail.color_hex}`],
          //     start: [0, 0],
          //     end: [1, 0]
          //   }
          // }}
          bg={`#${categoryDetail.color_hex}`}
          p="3" space={3}
          alignItems="center"
          rounded="xl">
          <Icon
            color={"warmGray.100"}
            size="10"
            as={<MaterialCommunityIcons name={categoryDetail.icon} />}
          />
          <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>{categoryDetail.name}</Text>
        </HStack>
      </Pressable>

      <Modal isOpen={openAddDataModal} onClose={() => setOpenAddDataModal(false)} closeOnOverlayClick={false} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Chi tiết loại chi tiêu</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid>
              <Stack w="100%">
                {/* ----- カテゴリー名 ----- */}
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input variant="underlined" size="sm" placeholder="Tên loại chi tiêu"
                      _light={{
                        placeholderTextColor: "blueGray.700"
                      }} _dark={{
                        placeholderTextColor: "blueGray.100"
                      }}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                  defaultValue={categoryDetail.name}
                />

                <HStack alignItems={"center"} justifyContent="space-around">
                  <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Màu sắc</Text>
                  <Text style={{
                    fontSize: 12,
                    backgroundColor: `#${hexColor}`
                  }}>#{hexColor}</Text>

                  {/* ----- 色（赤） ----- */}
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input variant="underlined" size="sm" placeholder="r"
                        width={"10%"} m={1}
                        _light={{
                          placeholderTextColor: "blueGray.700"
                        }} _dark={{
                          placeholderTextColor: "blueGray.100"
                        }}
                        onBlur={onBlur}
                        onChangeText={(val) => { val = Math.min(val, 255); onChange(val); setRedComp(Number(val)); }}
                        value={value}
                        keyboardType='numeric'
                        maxLength={3}
                      />
                    )}
                    name="color_r"
                    defaultValue={categoryDetail.color_r}
                  />

                  {/* ----- 色（緑） ----- */}
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input variant="underlined" size="sm" placeholder="r"
                        width={"10%"} m={1}
                        _light={{
                          placeholderTextColor: "blueGray.700"
                        }} _dark={{
                          placeholderTextColor: "blueGray.100"
                        }}
                        onBlur={onBlur}
                        onChangeText={(val) => { val = Math.min(val, 255); onChange(val); setGreenComp(Number(val)); }}
                        value={value}
                        keyboardType='numeric'
                        maxLength={3}
                      />
                    )}
                    name="color_g"
                    defaultValue={categoryDetail.color_g}
                  />

                  {/* ----- 色（青） ----- */}
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input variant="underlined" size="sm" placeholder="r"
                        width={"10%"} m={1}
                        _light={{
                          placeholderTextColor: "blueGray.700"
                        }} _dark={{
                          placeholderTextColor: "blueGray.100"
                        }}
                        onBlur={onBlur}
                        onChangeText={(val) => { val = Math.min(val, 255); onChange(val); setBlueComp(Number(val)); }}
                        value={value}
                        keyboardType='numeric'
                        maxLength={3}
                      />
                    )}
                    name="color_b"
                    defaultValue={categoryDetail.color_b}
                  />

                </HStack>
                <IconListComponent name="icon" setValue={setValue} defaultValue={categoryDetail.icon} />
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button colorScheme="secondary" onPress={RemoveCategoryFunc}>
                Xóa
              </Button>
              <Button colorScheme="primary" onPress={SaveCategoryFunc}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}