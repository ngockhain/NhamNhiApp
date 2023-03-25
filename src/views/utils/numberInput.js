import { useState, useEffect } from 'react';
import { Input, Keyboard, View, Icon, HStack } from 'native-base';
import { formatNumber } from '../../utils';

export default function NumberInput(props) {

  const [numberValue, setNumberValue] = useState("");
  
  const onChange = function (text) {
    setNumberValue(text);
  }

  const { defaultValue, name, setValue } = props;

  useEffect(() => {
    if(defaultValue) {
      setNumberValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    if(setValue) {
      setValue(name, numberValue);
    }
  }, [numberValue]);

  return (
    <Input flex={1} variant="underlined" size="sm" placeholder="Số tiền"
      _light={{
        placeholderTextColor: "blueGray.700"
      }} _dark={{
        placeholderTextColor: "blueGray.100"
      }}
      keyboardType='numeric'
      onChange={({ nativeEvent: { eventCount, target, text} }) => onChange(text)}
      value={formatNumber(numberValue)}
      // maxLength={10}  //setting limit of input
    />
  )
}