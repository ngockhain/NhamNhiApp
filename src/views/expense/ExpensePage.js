import React, { Component } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon, ScrollView,
  ChevronDownIcon, Fab, View
} from "native-base";

import { ActivityIndicator } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

import ExpenseComponent from './ExpenseComponent';
import DateInput from '../utils/DateInput';
import { expenseOperations } from '../../state/ducks/expense';

import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function ExpensePage() {
  const expensePage = useSelector((state) => state.expensePage ?? []);
  const expenseData = expensePage.expense;
  const isLoading = expensePage.isLoading;

  const dispatch = useDispatch();
  const addExpense = (expense) => dispatch(expenseOperations.addExpense(expense));

  const expense = {
    'category_icon': 'car',
    'category_code': '1',
    'category_name': 'Xe cộ',
    'date': '2023/03/11',
    'time': '11:30',
    'money': '23000',
    'memo': 'Hôm nay bố đi xe về lêu lêu!!!',
    'isNew': true,
    'id': 0
  }

  return (
    <NativeBaseProvider config={config}>
      <ScrollView stickyHeaderIndices={[0]} flex="1"
        showsVerticalScrollIndicator={false}>
        <FormControl flexDirection={"row"} backgroundColor={"warmGray.100"} style={{ justifyContent: "center", alignContent: "center" }}>
          <View flex={1}></View>
          <View flex={1}>
            <DateInput />
          </View>
          <IconButton m={2} variant={"subtle"} icon={<Icon as={<MaterialCommunityIcons size={1} name="magnify" />} />} />
          <View flex={1}></View>
        </FormControl>
        {expenseData && expenseData.map((expense, idx) => (
          <ExpenseComponent key={idx} expenseIdx={idx} isNew={expense.isNew} />
        ))}
      </ScrollView>

      <Fab renderInPortal={false} shadow={2} size="lg"
        onPress={() => { addExpense({ expense }) }}
        icon={<Icon as={<MaterialCommunityIcons size={4} name="plus" />} />} />

      <Spinner
        visible={isLoading}
        color={'blue'}
      />
    </NativeBaseProvider>
  )
}