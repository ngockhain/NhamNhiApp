import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon,
  ChevronDownIcon,
  View
} from "native-base";
import { useForm, Controller } from "react-hook-form";

import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

import DateInput from '../utils/DateInput';
import TimeInput from '../utils/TimeInput';
import NumberInput from '../utils/NumberInput';

export default function ExpenseComponent() {
  const [openAddDataModal, setOpenAddDataModal] = useState(false);
  const { control, handleSubmit, getValues, formState: { errors } } = useForm();

  return (
    <>
      <Pressable m={1} onPress={() => setOpenAddDataModal(true)}>
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

      <Modal isOpen={openAddDataModal} onClose={() => setOpenAddDataModal(false)} closeOnOverlayClick={false} avoidKeyboard>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Chi tiết</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid>
              <Stack w="100%">
                <HStack flex={1} justifyContent="space-between">
                  {/* ----- 日付 ----- */}
                  {/* <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input width="63%" variant="underlined" size="sm" placeholder="Ngày"
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
                    name="date"
                    defaultValue=""
                  /> */}
                  <View width={"60%"}>
                    <DateInput />
                  </View>

                  {/* ----- 時間 ----- */}
                  {/* <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input width="33%" variant="underlined" size="sm" placeholder="Giờ"
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
                    name="time"
                    defaultValue=""
                  /> */}
                  <View width={"30%"}>
                    <TimeInput />
                  </View>

                </HStack>
                {/* ----- 使用タイプ ----- */}
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select variant="underlined"
                      selectedValue={value}
                      onValueChange={(itemValue) => {
                        onChange(itemValue);
                      }}
                      placeholder="Loại chi tiêu"
                      _selectedItem={{
                        bg: "blueGray.700",
                        // endIcon: <CheckIcon size="2" />
                      }}
                      dropdownOpenIcon={<ChevronUpIcon size="3" />}
                      dropdownCloseIcon={<ChevronDownIcon size="3" />}>
                      <Select.Item label="UX Research" value="ux" />
                      <Select.Item label="Web Development" value="web" />
                      <Select.Item label="Cross Platform Development" value="cross" />
                      <Select.Item label="UI Designing" value="ui" />
                      <Select.Item label="Backend Development" value="backend" />
                    </Select>
                  )}
                  name="consumeType"
                  // rules={{ required: 'Field is required' }}
                  defaultValue="ux"
                />

                {/* ----- 金額 ----- */}
                {/* <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input variant="underlined" size="sm" placeholder="Số tiền"
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
                  name="money"
                  defaultValue=""
                /> */}
                <NumberInput />

                {/* ----- 備考 ----- */}
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input variant="underlined" size="sm" placeholder="Ghi chú"
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
                  name="memo"
                  defaultValue=""
                />
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button colorScheme="secondary" onPress={() => { setOpenAddDataModal(false); }}>
                Xóa
              </Button>
              <Button colorScheme="primary" onPress={() => { Alert.alert(JSON.stringify(getValues())); setOpenAddDataModal(false); }}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal >
    </>
  )
};