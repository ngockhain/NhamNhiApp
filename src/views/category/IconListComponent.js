import React, { useState } from "react";
import {
  Box, Text, MoonIcon, SunIcon, CheckIcon,
  CircleIcon, ArrowBackIcon, AddIcon, ArrowForwardIcon,
  ArrowUpIcon, ArrowDownIcon, CheckCircleIcon, ChevronDownIcon,
  ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon,
  SmallCloseIcon, HamburgerIcon, InfoIcon, InfoOutlineIcon,
  MinusIcon, QuestionIcon, QuestionOutlineIcon, SearchIcon,
  WarningIcon, WarningTwoIcon, ThreeDotsIcon, WarningOutlineIcon,
  ShareIcon, PlayIcon, FavouriteIcon, DeleteIcon, VStack, FlatList,
  useBreakpointValue, Center, NativeBaseProvider, View, HStack
} from "native-base";

export default function IconListComponent() {

  const [icons, setIcons] = useState([[{
    icon: <AddIcon/>,
    iconName: "add"
  }, {
    icon: <ArrowBackIcon/>,
    iconName: "arrow-back"
  }, {
    icon: <ArrowForwardIcon />,
    iconName: "arrow-forward"
  }, {
    icon: <ArrowUpIcon />,
    iconName: "arrow-up"
  }, {
    icon: <ArrowDownIcon />,
    iconName: "arrow-down"
  }, {
    icon: <CheckIcon />,
    iconName: "check"
  }, {
    icon: <CheckCircleIcon />,
    iconName: "check-circle"
  }, {
    icon: <ChevronDownIcon />,
    iconName: "chevron-down"
  }], [{
    icon: <ChevronLeftIcon />,
    iconName: "chevron-left"
  }, {
    icon: <ChevronRightIcon />,
    iconName: "chevron-right"
  }, {
    icon: <ChevronUpIcon />,
    iconName: "chevron-up"
  }, {
    icon: <CircleIcon />,
    iconName: "circle"
  }, {
    icon: <CloseIcon />,
    iconName: "close"
  }, {
    icon: <SmallCloseIcon />,
    iconName: "small-close"
  }, {
    icon: <HamburgerIcon />,
    iconName: "menu"
  }, {
    icon: <InfoIcon />,
    iconName: "info"
  }], [{
    icon: <InfoOutlineIcon />,
    iconName: "info-outline"
  }, {
    icon: <MinusIcon />,
    iconName: "minus"
  }, {
    icon: <MoonIcon />,
    iconName: "moon"
  }, {
    icon: <QuestionIcon />,
    iconName: "question"
  }, {
    icon: <QuestionOutlineIcon />,
    iconName: "question-outline"
  }, {
    icon: <SearchIcon />,
    iconName: "search"
  }, {
    icon: <SunIcon />,
    iconName: "sun"
  }, {
    icon: <WarningIcon />,
    iconName: "warning-1"
  }], [{
    icon: <WarningTwoIcon />,
    iconName: "warning-2"
  }, {
    icon: <WarningOutlineIcon />,
    iconName: "warning-outline"
  }, {
    icon: <ThreeDotsIcon />,
    iconName: "three-dots"
  }, {
    icon: <ShareIcon />,
    iconName: "share"
  }, {
    icon: <PlayIcon />,
    iconName: "play"
  }, {
    icon: <FavouriteIcon />,
    iconName: "favourite"
  }, {
    icon: <DeleteIcon />,
    iconName: "delete"
  }, {
    icon: <DeleteIcon />,
    iconName: "delete1"
  }]]);

  return (
    <Box w="100%">
      <Text style={{ margin: 3, fontSize: 12 }}>Icon</Text>
      <View style={{ flex: 1 }}>
        {icons.map((icon, idx) => {
          return <HStack key={idx} flex={1} alignItems="center" justifyContent={"space-between"}>
            {icon.map((item, idx1) =>
              <Box key={`${idx}_${idx1}`} _text={{
                textAlign: "center"
              }} borderColor="primary.500" borderWidth={item.iconName == "favourite" ? 1 : 0} p={2}>
                {item.icon}
              </Box>)}
          </HStack>
        })}
      </View>
    </Box>
  );
};