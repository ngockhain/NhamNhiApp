import React, { useEffect, useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon,
  ChevronDownIcon,
  View
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';
import { expenseOperations } from '../../state/ducks/expense';

import DateInput from '../utils/DateInput';
import TimeInput from '../utils/TimeInput';
import NumberInput from '../utils/NumberInput';

export default function ExpenseComponent(props = {}) {
  const [openAddDataModal, setOpenAddDataModal] = useState(false);
  const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

  const { expenseIdx, isNew } = props;
  const expenseDetail = useSelector((state) => state.expensePage[expenseIdx]);

  const dispatch = useDispatch();
  const editExpense = (index, expense) => dispatch(expenseOperations.editExpense({ index, expense }));
  const removeExpense = (index) => dispatch(expenseOperations.removeExpense({ index }));

  const SaveExpenseFunc = () => {
    editExpense(expenseIdx, getValues());
    setOpenAddDataModal(false);
  }

  const RemoveExpenseFunc = () => {
    removeExpense(expenseIdx);
    setOpenAddDataModal(false);
  }

  useEffect(() => {
    if (isNew) {
      setOpenAddDataModal(true);
    }

    setValue('category_name', expenseDetail.category_name);
    setValue('category_icon', expenseDetail.category_icon);
  }, []);


  if (!expenseDetail) {
    return <></>;
  }

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
            as={<MaterialCommunityIcons name={expenseDetail.category_icon} />}
          />
          <HStack alignItems="center" justifyContent="space-between" flex={1}>
            <VStack>
              <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>
                {expenseDetail.category_name}
              </Text>
              <Text fontSize={'sm'} fontWeight="normal" color={"warmGray.300"}>
                {expenseDetail.expense_memo}
              </Text>
            </VStack>
            <Text fontSize={'md'} fontWeight="medium" color={"warmGray.50"}>{expenseDetail.expense_money} đồng</Text>
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
                    <DateInput defaultValue={expenseDetail.expense_date}
                      name={"expense_date"} setValue={setValue} />
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
                    <TimeInput defaultValue={expenseDetail.expense_time}
                      name={"expense_time"} setValue={setValue} />
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
                        setValue('category_name', 'Phương tiện vận chuyển');
                        setValue('category_icon', 'car');
                      }}
                      placeholder="Loại chi tiêu"
                      _selectedItem={{
                        bg: "blueGray.700",
                        // endIcon: <CheckIcon size="2" />
                      }}
                      dropdownOpenIcon={<ChevronUpIcon size="3" />}
                      dropdownCloseIcon={<ChevronDownIcon size="3" />}>
                      <Select.Item label="UX Research" value="0" />
                      <Select.Item label="Web Development" value="1" />
                      <Select.Item label="Cross Platform Development" value="2" />
                      <Select.Item label="UI Designing" value="3" />
                      <Select.Item label="Backend Development" value="4" />
                    </Select>
                  )}
                  name="category_code"
                  // rules={{ required: 'Field is required' }}
                  defaultValue={expenseDetail.category_code}
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
                <NumberInput defaultValue={expenseDetail.expense_money}
                  name="expense_money" setValue={setValue} />

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
                  name="expense_memo"
                  defaultValue={expenseDetail.expense_memo}
                />
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button colorScheme="secondary" onPress={RemoveExpenseFunc}>
                Xóa
              </Button>
              <Button colorScheme="primary" onPress={SaveExpenseFunc}>
                OK
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal >
    </>
  )
};