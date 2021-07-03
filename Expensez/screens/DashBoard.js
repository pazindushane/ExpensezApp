import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const Tab = createBottomTabNavigator();


export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
          showLabel: false,
          style: {
              backgroundColor: '#16DB65',
              height:60
          }
      }}>
          <Tab.Screen name="ExpensesScren" component={ExpensesScren}
              options={
                  {
                      tabBarIcon: ({ focused }) => (
                          <View >
                               <Icon type="FontAwesome" name="exchange" />
                              <Text style={{ color: focused ? 'black' : 'white' }}>Expenses</Text>
                          </View>
                      )
                  }
              } />
          <Tab.Screen name="ReportScreen" component={ReportScreen} options={
              {
                  tabBarIcon: ({ focused }) => (
                      <View>
                           <Icon type="FontAwesome" name="home" />
                          <Text style={{ color: focused ? 'black' : 'white' }}>Income</Text>
                      </View>
                  ),
              }
          } />
          <Tab.Screen name="DataInputScreen" component={DataInputScreen} options={
              {
                  tabBarIcon: ({ focused }) => (
                      <View>
                           <Icon type="FontAwesome" name="align-center" />
                          <Text style={{ color: focused ? 'black' : 'white' }}>Report</Text>
                      </View>
                  ),
              }
          } />
          <Tab.Screen name="AccountScreenw" component={AccountScreen} options={
              {
                  tabBarIcon: ({ focused }) => (
                      <View>
                           <Icon type="FontAwesome" name="user" />
                          <Text style={{ color: focused ? 'black' : 'white' }}>Account</Text>
                      </View>
                  ),
              }
          } />
          
      </Tab.Navigator>
  </NavigationContainer>
    );
  }
}
