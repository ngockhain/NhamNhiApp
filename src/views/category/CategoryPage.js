import React, { useState } from 'react';
import {
  NativeBaseProvider, ScrollView
} from "native-base";

import CategoryComponent from './CategoryComponent';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function CategoryPage() {
  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
        <CategoryComponent />
      </ScrollView>
    </NativeBaseProvider>
  );
};