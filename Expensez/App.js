import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {NativeModules} from 'react-native';
import  LoginScreeen  from './screens/LoginScreeen';
import  SignupScreen  from './screens/SignupScreen';

// import { LogBox } from 'react-native';

// LogBox.ignoreLogs([
//     'Require cycle:'
// ])

// import { YellowBox } from 'react-native'

// YellowBox.ignoreWarnings([
//   'Require cycle:'
// ])

const Stack = createStackNavigator();

// const reactnativepopupdialog = NativeModules.react-native-popup-dialog;

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown: false}} name="LoginScreeen" component={LoginScreeen}  />
          <Stack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
