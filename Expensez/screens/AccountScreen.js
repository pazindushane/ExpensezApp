import React, { Component } from 'react';
import {  StyleSheet, Image } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text} from 'native-base';
import GlobalFont from 'react-native-global-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreeno from './LoginScreeno';

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uid:'',
        name: '',
        email:'',
        password:''
    };
  }

  updateCustomer = () => {

    fetch('http://192.168.1.187:3000/user/updateuser' + this.state.uid, {
    method: 'PUT',
    body: JSON.stringify({
      uid: this.state.uid ,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }),
    headers: {
       Accept : 'application/json',
      'Content-type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json),
    this.clear()
    );
  }

  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state);
  }

  clear = () =>{
    this.setState({
      uid: "",
      name: "",
      email: "",
      password: ""
    });
  }

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('uidd')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  LogoutScreenoo =()=> {
    this.props.navigation.navigate(LoginScreeno);
    this.removeValue()
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

  render() {
    return (
        <Container>

                <Image
                    source={require('../Assests/usercircle.png')}
                    style={styles.Imgsty}
                />

                <Text style={styles.containerr} > User ID</Text>

                <Form>

                <Item rounded style={styles.uidsty1}>
                    <Input type = "text" placeholder="User Name" value={this.state.name}
                          name = "name"
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }}/>
                </Item>

                <Item rounded style={styles.uidsty2}>
                    <Input type = "text" placeholder="Email" value={this.state.email}
                          name = "email"
                          onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }} />
                </Item>

                <Item rounded style={styles.uidsty3}>
                    <Input type = "text" placeholder="Password" value={this.state.password}
                          name = "password"
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}/>
                </Item>

                <Button block rounded info style={styles.logsty1} onPress={this.updateCustomer}
                        type = "submit">
                    <Text style={styles.lotsty}>Edit</Text>
                </Button>

                <Button block rounded danger style={styles.logsty2} onPress={this.LogoutScreenoo}
                        type = "submit">
                    <Text style={styles.lotsty}>Logout</Text>
                </Button>

                </Form>

        </Container>
    );
  }
}


const styles = StyleSheet.create({

    Imgsty:{
        width:100, 
        height:100,
        alignSelf: 'center',
        bottom:-30
    },
    containerr:{
        color: '#287BFF',
        // fontWeight: 'bold',
        fontSize: 35,
        bottom:-35,
        textAlign:'center',
        fontFamily:'Quicksand-SemiBold',
    },
    uidsty1:{
        width:250,
        alignSelf: 'center',
        fontFamily:'Quicksand-SemiBold',
        bottom:-45
    },
    uidsty2:{
        width:250,
        alignSelf: 'center',
        fontFamily:'Quicksand-SemiBold',
        bottom:-65
    },
    uidsty3:{
        width:250,
        alignSelf: 'center',
        fontFamily:'Quicksand-SemiBold',
        bottom:-85
    },
    logsty1:{
        width:180,
        height:45,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily:'Quicksand-SemiBold',
        bottom:-100
    },
    logsty2:{
        width:180,
        height:45,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily:'Quicksand-SemiBold',
        bottom:-120
    },
    lotsty:{
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily:'Quicksand-SemiBold',
        textAlign: 'center'
    }
});