/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import ScreenOne from './src/ScreenOne';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#ffb0bd',
  };

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar backgroundColor={'#ffb0bd'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={{backgroundColor: '#FFF' || '#000'}}>
            <ScreenOne />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
