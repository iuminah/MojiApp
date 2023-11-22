import React from 'react';
import {Alert, Button, SafeAreaView, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function ScreenOne() {
  const tailwind = useTailwind();

  const test = (): JSX.Element => {
    return <Text>ABC</Text>;
  };

  const onPress = () => {
    Alert.alert('Pressed');
  };

  return (
    <>
      <Text style={tailwind('text-blue-500')}>ScreenOne</Text>
      <Text style={tailwind('text-blue-500')}>ScreenOne</Text>
      <Text style={tailwind('text-blue-500')}>ScreenOne</Text>
      <Text style={tailwind('border border-blue-500')}>{test()}</Text>
      <Button onPress={() => onPress()} title="Press Me" />
    </>
  );
}

export default ScreenOne;
