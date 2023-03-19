import { useState } from 'react';
import { Input, Keyboard, View, Icon, HStack } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns'
import { Pressable } from 'react-native';

export default function TimeInput() {
  const [timeValue, setTimeValue] = useState(new Date());
  const [isFocus, setIsFocus] = useState(false);

  const onChangeTime = function (e) {
    setTimeValue(new Date(e.nativeEvent.timestamp));
  }

  return (
    <Pressable onPress={() => { setIsFocus(true); }}>
      <HStack flex={1} style={{ alignItems: "center" }}>
        <Input flex={1} variant="underlined" size="sm" placeholder="Giờ"
          showSoftInputOnFocus={false}
          _light={{
            placeholderTextColor: "blueGray.700"
          }} _dark={{
            placeholderTextColor: "blueGray.100"
          }}
          value={format(timeValue, 'HH:mm')}
          isReadOnly
        />
        <Icon
          size="5"
          as={<MaterialCommunityIcons name={"clock"} />}
        />
        {isFocus && <DateTimePicker mode="time" value={timeValue} onChange={(e) => { onChangeTime(e); setIsFocus(false); }} />}
      </HStack>
    </Pressable>
  )
}