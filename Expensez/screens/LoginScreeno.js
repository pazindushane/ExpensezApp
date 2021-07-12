import React, { Component } from 'react';
import {  StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalFont from 'react-native-global-font';
import DashBoard from './DashBoard';
import SignupScreen from './SignupScreen';
import Forgotpassword from './Forgotpassword';
import ReportScreen from './ReportScreen';
import DataInputScreen from './DataInputScreen';

export default class LoginScreeno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      password: ''
    }
    this.getDatas()
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('uidd', this.state.uid)
      console.log('Store Data :' + value)
    } catch (e) {
      // saving error
    }
  }

  getDatas = async () => {
    try {
      const value = await AsyncStorage.getItem('uidd')
      if(value !== null) {
        console.log('getData :' + value)
        this.props.navigation.navigate('DataInputScreen', { uid: value })
      }else{

      }
    } catch(e) {
      
    }
  }

  getData= ()=> {
    fetch('http://192.168.1.187:3000/user/oneuser/'+ this.state.uid, { method: 'GET'})
    .then((response) => response.json())
    .then((json) => this.Passwordmatch(json.data.password))
    
   }


  Passwordmatch= (password)=> {
    if (this.state.password == password) {
      console.log("wadegoda")
      this.storeData()
      
      this.props.navigation.navigate('DataInputScreen', { uid: this.state.uid })
      this.clear();
    }else{
      console.log("not logged in");
      alert("Incorrect Password");
    }
  }



  

  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state);
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

Forgotpasswordd =()=> {
  this.props.navigation.navigate(Forgotpassword);
}

Sginup =()=> {
  this.props.navigation.navigate(SignupScreen)
}

clear = () =>{
  this.setState({
    uid: "",
    password: ""
  });
}

  

  render() {
    return (
      <Container>
        
        <Image
                    source={require('../Assests/exbanner.png')}
                    style={styles.Imgsty4}
                />
        <Text style={styles.containerr}>Welcome To</Text>
        <Form onSubmit = {this.submitHandler}>
        <Item rounded style={styles.uidsty1}>
              <Input type = "text" placeholder="UserId" value={this.state.uid}
                          
                          name = "uid"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                uid: value
                              })
                          }}
                          />
        </Item>
        <Item rounded style={styles.uidsty2}>
              <Input  type = "text" placeholder="Password" value={this.state.password}
                          secureTextEntry
                          name = "password"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}/>
        </Item>
        
        <Button transparent style={styles.forgsty} onPress={this.Forgotpasswordd}
        >
            <Text style={styles.forgstyt}>Forgot Password--</Text>
          </Button>
          <Button block rounded  style={styles.logsty} onPress={this.getData}
                        type = "submit">
            <Text style={styles.lotsty}>Login</Text>
          </Button>
          
          <Image
                    source={require('../Assests/facebook.png')}
                    style={styles.Imgsty1}
                />
          <Image
                    source={require('../Assests/instagram.png')}
                    style={styles.Imgsty2}
                />
          <Image
                    source={require('../Assests/twitter.png')}
                    style={styles.Imgsty3}
                />
         
          <Text style={styles.dontsty}>Don't have an account ?</Text>
          <Button block rounded bordered style={styles.signsty} onPress={this.Sginup}>
            <Text>SignUp</Text>
          </Button>
          
        </Form> 
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerr:{
    color: '#287BFF',
    fontSize: 35,
    textAlign:'center',
    fontFamily:'Quicksand-SemiBold',
    top: -35
},
Imgsty1:{
    
    alignSelf: 'center',
    top: 140,
    left: -110
},
Imgsty2:{

  alignSelf: 'center',
  top: 93
},
Imgsty3:{
  
  alignSelf: 'center',
  top: 45,
  left: 110
},
Imgsty4:{
  width:300, 
  height:50,
  alignSelf: 'center',
  top: 82
},
uidsty1:{
    width:250,
    alignSelf: 'center',
    fontFamily:'Quicksand-SemiBold',
    top: 80
},
uidsty2:{
  width:250,
  alignSelf: 'center',
  fontFamily:'Quicksand-SemiBold',
  top: 105
},
forgsty:{
    alignSelf: 'center',
    fontFamily:'Quicksand-SemiBold',
    left: 65,
    top:105
    
},
forgstyt:{
  color:'#287BFE',
  
  
},
logsty:{
    width:175,
    height:52,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily:'Quicksand-SemiBold',
    backgroundColor:'#287BFF',
    top: 105
},
lotsty:{
    // fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    fontFamily:'Quicksand-SemiBold'
},
ic1sty:{
    // marginLeft:10,
    top: 125, left: 40, right: 0
},
ic2sty:{
   top: 95, left: 170, right: 0
},
ic3sty:{
   top: 55, left: 300, right: 0
},
dontsty:{
    // fontWeight: 'bold',
    color:'#287BFE',
    fontSize: 18,
    textAlign: 'center',
    top: 80,
    left: 10,
    fontFamily:'Quicksand-SemiBold'
},
signsty:{
    width:120,
    top: 90,
    left: 105,
    alignSelf: 'center',
    fontFamily:'Quicksand-SemiBold'
},
linearGradient: {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
},

});
