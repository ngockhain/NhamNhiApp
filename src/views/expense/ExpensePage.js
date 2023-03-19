import React, { useState } from 'react';
import {
  Menu, Avatar, HStack, HamburgerIcon, Icon, VStack,
  IconButton, Pressable, Text, Center, Box, StatusBar,
  Divider, NativeBaseProvider, Container, Modal, Button,
  FormControl, Stack, Input, Select, ChevronUpIcon, ScrollView,
  ChevronDownIcon,
  View
} from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ExpenseComponent from './ExpenseComponent';
import DateInput from '../utils/DateInput';

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const LinearGradient = require('expo-linear-gradient').LinearGradient;
const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

const ExpensePage = ({ expenseData }) => {
  if (expenseData.length === 0) {
    return (<></>);
  }
  const expenseList = expenseData.map((expense, idx) => (
    <ExpenseComponent key={idx}/>
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
          <IconButton m={2} variant={"solid"} icon={<Icon as={<MaterialCommunityIcons size={3} name="magnify" />} />} />
          <View flex={1}></View>
        </FormControl>
        {expenseList}
      </ScrollView>
    </NativeBaseProvider>
  )
}

const { arrayOf, object } = PropTypes;

ExpensePage.propTypes = {
  expenseData: arrayOf( object ),
}

ExpensePage.defaultProps = {
  expenseData: [{},{}],
};

const mapStateToProps = ( state ) => ( {
  expenseData: state.expense,
} );

export default connect( mapStateToProps, null )( ExpensePage );


// export default function ExpensePage() {
//   return (
//     <NativeBaseProvider config={config}>
//       <ScrollView stickyHeaderIndices={[0]}
//         showsVerticalScrollIndicator={false}>
//         <FormControl flexDirection={"row"} backgroundColor={"warmGray.100"} style={{ justifyContent: "center", alignContent: "center" }}>
//           <View flex={1}></View>
//           <View flex={1}>
//             <DateInput />
//           </View>
//           <IconButton m={2} variant={"solid"} icon={<Icon as={<MaterialCommunityIcons size={3} name="magnify" />} />} />
//           <View flex={1}></View>
//         </FormControl>
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//         <ExpenseComponent />
//       </ScrollView>
//     </NativeBaseProvider>
//   );
// };