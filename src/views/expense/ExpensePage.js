import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon, ScrollView,
  ChevronDownIcon
} from "native-base";

import ExpenseComponent from './ExpenseComponent';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function ExpensePage() {
  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <Text>2023/03/11</Text>
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
        <ExpenseComponent />
      </ScrollView>
    </NativeBaseProvider>
  );
};