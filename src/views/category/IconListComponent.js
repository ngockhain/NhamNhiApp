import React, { useState } from "react";
import {
  Box, Text, HStack, Icon, IconButton, ScrollView
} from "native-base";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconListComponent(props = {}) {

  const iconlist = [
    [{name:'car'}, {name:'airplane'}, {name:'bank'}, {name:'coffee'}, {name:'train'}]
    , [{name:'basket'}, {name:'arm-flex'}, {name:'baby-carriage'}, {name:'badminton'}, {name:'cart'}]
    , [{name:'cat'}, {name:'gamepad-variant'}, {name:'hamburger'}, {name:'island'}, {name:'moped'}]
    , [{name:'movie'}, {name:'piggy-bank'}, {name:'home-account'}, {name:'teddy-bear'}, {name:'human-male-male'}]
    , [{name:'fuel'}, {name:'book-account'}, {name:'book-open'}, {name:'book-variant-multiple'}, {name:'hospital-box'}]
  ];

  const { name, setValue, defaultValue } = props;
  const [selectedIcon, setSelectedIcon] = useState(defaultValue??'car');

  return (
    <Box w="100%" maxHeight={250}>
      <Text style={{ margin: 3, fontSize: 12, fontWeight: 'bold' }}>Icon</Text>
      <ScrollView style={{ flex: 1, padding: 3 }}>
        {iconlist.map((icon, idx) => {
          return <HStack key={idx} flex={1} alignItems="center" justifyContent={"space-between"}>
            {icon.map((item, idx1) =>
              <Box key={`${idx}_${idx1}`} _text={{
                textAlign: "center"
              }} borderColor="warmGray.600" borderWidth={item.name == selectedIcon ? 3 : 0} p={1}>
                <IconButton
                  size={"xs"} _pressed={{bg:''}} _hover={{bg:''}}
                  onPressOut={() => { setSelectedIcon(item.name); setValue(name, item.name); }}
                  icon={
                    <Icon
                    color={"warmGray.500"}
                    size="8"
                    as={<MaterialCommunityIcons name={item.name} />}
                  />
                  }
                />
                
              </Box>)}
          </HStack>
        })}
      </ScrollView>
    </Box>
  );
};