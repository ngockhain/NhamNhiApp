import React, { Component } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon, ScrollView,
  ChevronDownIcon, Fab,
  View
} from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExpenseComponent from './ExpenseComponent';
import DateInput from '../utils/DateInput';
import { expenseOperations } from '../../state/ducks/expense';

import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function ExpensePage() {
  const expenseData = useSelector((state) => state.expensePage??[]);

  const dispatch = useDispatch();
  const addExpense = (expense) => dispatch(expenseOperations.addExpense(expense));

  const expenseDataTest = {
    'category_icon': 'car',
    'category_code': '1',
    'category_name': 'Xe cộ',
    'expense_date': '2023/03/11',
    'expense_time': '11:30',
    'expense_money': '23000',
    'expense_memo': 'Hôm nay bố đi xe về lêu lêu!!!',
    'isNew': true,
  }

  const expenseList = expenseData.map((expense, idx) => (
    <ExpenseComponent key={idx} expenseIdx={idx} isNew={expense.isNew}/>
  ));

  return (
    <NativeBaseProvider config={config}>
      <ScrollView stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <FormControl flexDirection={"row"} backgroundColor={"warmGray.100"} style={{ justifyContent: "center", alignContent: "center" }}>
          <View flex={1}></View>
          <View flex={1}>
            <DateInput />
          </View>
          <IconButton m={2} variant={"subtle"} icon={<Icon as={<MaterialCommunityIcons size={1} name="magnify" />} />} />
          <View flex={1}></View>
        </FormControl>
        {expenseList}
      </ScrollView>

      <Fab renderInPortal={false} shadow={2} size="lg"
        onPress={() => { addExpense(expenseDataTest) }}
        icon={<Icon as={<MaterialCommunityIcons size={4} name="plus" />} />} />
    </NativeBaseProvider>
  )
}