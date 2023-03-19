import { useState } from 'react';
import { Input, Keyboard, View, Icon, HStack } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns'
import { Pressable } from 'react-native';

export default function DateInput() {
  const [dateValue, setDateValue] = useState(new Date());
  const [isFocus, setIsFocus] = useState(false);

  const onChangeDate = function (e) {
    setDateValue(new Date(e.nativeEvent.timestamp));
  }

  return (
    <Pressable flex={1} onPress={() => { setIsFocus(true); }}>
      <HStack flex={1} style={{ alignItems: "center" }}>
        <Input flex={1} variant="underlined" size="sm" placeholder="Ngày"
          showSoftInputOnFocus={false}
          _light={{
            placeholderTextColor: "blueGray.700"
          }} _dark={{
            placeholderTextColor: "blueGray.100"
          }}
          value={format(dateValue, 'dd/MM/yyyy')}
          isReadOnly
        />
        <Icon
          size="5"
          as={<MaterialCommunityIcons name={"calendar"} />}
        />
        {isFocus && <DateTimePicker mode="date" value={dateValue} onChange={(e) => { onChangeDate(e); setIsFocus(false); }} />}
      </HStack>
    </Pressable>
  )
}