import React, { useState, useEffect } from 'react';
import {
  NativeBaseProvider, ScrollView,
  Fab, Icon
} from "native-base";
import { useDispatch, useSelector } from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';

import CategoryComponent from './CategoryComponent';

import { categoryOperations } from '../../state/ducks/category';

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function CategoryPage() {

  const dispatch = useDispatch();

  const categoryPage = useSelector((state) => state.categoryPage ?? []);
  const categoryData = categoryPage.category;
  const isLoading = categoryPage.isLoading;

  const addCategory = (category) => dispatch(categoryOperations.addCategory(category));

  const category = {
    'icon': 'car',
    'id': 0,
    'name': 'Xe cộ',
    'color_r': 91,
    'color_g': 33,
    'color_b': 182,
    'isNew': true
  };

  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        {categoryData && categoryData.map((category, idx) => (
          <CategoryComponent key={idx} categoryIdx={idx} isNew={category.isNew} />
        ))}
      </ScrollView>

      <Fab renderInPortal={false} shadow={2} size="lg"
        onPress={() => { addCategory({ category }); }}
        icon={<Icon as={<MaterialCommunityIcons size={4} name="plus" />} />} />

      <Spinner
        visible={isLoading}
        color={'blue'}
      />

    </NativeBaseProvider>
  );
};