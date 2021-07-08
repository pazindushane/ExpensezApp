import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Row } from 'native-base';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import AccountScreen from './AccountScreen';
import DataInputScreen from './DataInputScreen';
import ReportScreen from './ReportScreen';
import RecordScreen from './RecordScreen';
import GlobalFont from 'react-native-global-font';

const Tab = createBottomTabNavigator();


export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

  render() {
    // const { uidd } = this.props.route.params;
    return (
        

      <Tab.Navigator     tabBarOptions={{
        
          showLabel: false,
          style: {
              backgroundColor: '#287BFF',
              height:65
          }
      }}>
          {/* <header>
            <text>{uidd}</text>
          </header> */}
          <Tab.Screen name="ReportScree" component={ReportScreen}   options={ 
                    {  
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                               
                                 <Icon type="FontAwesome" name="money" style={{ color: focused ? 'black' : 'white' }} />
                                <Text style={{ color: focused ? 'black' : 'white',fontSize:15, fontFamily:'Quicksand-SemiBold' }}>Report</Text>
                            </View>
                        ),
                    }
                } />
                <Tab.Screen name="DataInputScreen" component={DataInputScreen}  
                    options={
                        
                        {
                            
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.root}>
                                    {/* <i class="fas fa-file-invoice-dollar"></i> */}
                                     <Icon type="FontAwesome" name="pencil" style={{ color: focused ? 'black' : 'white' }} />
                                    <Text style={{ color: focused ? 'black' : 'white',fontSize:15, fontFamily:'Quicksand-SemiBold' }}>Input</Text>
                                </View>
                            )
                        }
                    } />
                <Tab.Screen name="RecordScreen" component={RecordScreen}  options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                                 <Icon type="FontAwesome" name="book" style={{ color: focused ? 'black' : 'white' }} />
                                <Text style={{ color: focused ? 'black' : 'white',fontSize:15, fontFamily:'Quicksand-SemiBold' }}>Records</Text>
                            </View>
                        ),
                    }
                } />
                
                <Tab.Screen name="AccountScreenw" component={AccountScreen}  options={
                    {
                        
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.root}>
                                 <Icon type="FontAwesome" name="user-circle" style={{ color: focused ? 'black' : 'white'}} />
                                <Text style={{ color: focused ? 'black' : 'white' ,fontSize:15, fontFamily:'Quicksand-SemiBold'}}>Profile</Text>
                            </View>
                        ),
                    }
                } />
                
            </Tab.Navigator>
        
        )
    }
}

const styles = StyleSheet.create({
    root:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    }
})
