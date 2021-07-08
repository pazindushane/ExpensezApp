import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  LoginScreeen  from './screens/LoginScreeen';
import  LoginScreeno  from './screens/LoginScreeno';
import  SignupScreen  from './screens/SignupScreen';
import  DashBoard  from './screens/DashBoard';
import  Forgotpassword  from './screens/Forgotpassword';
import  Recoverpassword  from './screens/Recoverpassword';
import  ReportScreen  from './screens/ReportScreen';
import  DataInputScreen  from './screens/DataInputScreen';
import  RecordScreen  from './screens/RecordScreen';
import  AccountScreen  from './screens/AccountScreen';
// import  DataInputScreen  from './screens/DataInputScreen';



const Stack = createStackNavigator();



export default class App extends Component {
  
  
      
     
  
  render() {
        
    
    
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{headerShown: false}} name="LoginScreeno" component={LoginScreeno}  />
          <Stack.Screen options={{headerShown: false}} name="SignupScreen" component={SignupScreen} />
          <Stack.Screen options={{headerShown: false}} name="Forgotpassword" component={Forgotpassword} />
          <Stack.Screen options={{headerShown: false}} name="Recoverpassword" component={Recoverpassword} />
          <Stack.Screen options={{headerShown: false}} name="ReportScreen" component={ReportScreen} />
          <Stack.Screen options={{headerShown: false}} name="DataInputScreen" component={DataInputScreen} />
          <Stack.Screen options={{headerShown: false}} name="RecordScreen" component={RecordScreen} />
          <Stack.Screen options={{headerShown: false}} name="AccountScreen" component={AccountScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
