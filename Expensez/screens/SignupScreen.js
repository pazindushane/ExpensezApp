import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Form, Item, Input, Button, Text} from 'native-base';
import GlobalFont from 'react-native-global-font';
import LoginScreeno from './LoginScreeno';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:'',
      name: '',
      email:'',
      password:''
    };
  }

  saveCustomer = () => {

    fetch('http://192.168.1.187:3000/user/saveuser', {
    method: 'POST',
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
    this.props.navigation.navigate(LoginScreeno),
    this.clear(),
    alert("Successfully Registered")
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

  LoginScreenoo =()=> {
    this.props.navigation.navigate(LoginScreeno);
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

  render() {
    return (
        <Container>

            <Text style={styles.containerr}>SignUp</Text>
            
            <Form onSubmit = {this.submitHandler}>

            <Item rounded style={styles.uidsty1}>
              <Input  placeholder="User Name" value={this.state.name}
                          type = "text"
                          name = "name"
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }} />
            </Item>
            <Item rounded style={styles.uidsty2}>
              <Input type = "text" placeholder="User Id" value={this.state.uid}
                          name = "uid"
                          onChangeText={(value) => {
                              this.setState({
                                uid: value
                              })
                          }}/>
            </Item>
            <Item rounded style={styles.uidsty3}>
              <Input type = "text" placeholder="Email" value={this.state.email}
                          name = "email"
                          onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }}/>
            </Item>
            <Item rounded style={styles.uidsty4}>
              <Input type = "password" placeholder="Password"  value={this.state.password}
                          name = "password"
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}/>
            </Item>
            <Button block rounded  style={styles.logsty}  onPress={this.saveCustomer}
                        type = "submit">
            <Text style={styles.lotsty}>SignUp</Text>
           </Button>
           <Text style={styles.dontsty}>Already have an account ?</Text>
           <Button block rounded bordered style={styles.signsty}
           onPress={this.LoginScreenoo}
           >
            <Text>Login</Text>
          </Button>

          <Image
                    source={require('../Assests/exbanner.png')}
                    style={styles.Imgsty2}
                />

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
    bottom: -20,
},
uidsty1:{
  width:250,
  alignSelf: 'center',
  bottom: -40,
  fontFamily:'Quicksand-SemiBold'
},
uidsty2:{
  width:250,
  alignSelf: 'center',
  bottom: -60,
  fontFamily:'Quicksand-SemiBold'
},
uidsty3:{
  width:250,
  alignSelf: 'center',
  bottom: -80,
  fontFamily:'Quicksand-SemiBold'
},
uidsty4:{
  width:250,
  alignSelf: 'center',
  bottom: -100,
  fontFamily:'Quicksand-SemiBold'
},
logsty:{
  width:170,
  height:55,
  alignSelf: 'center',
  textAlign: 'center',
  bottom: -141,
  backgroundColor:'#287BFF',
  fontFamily:'Quicksand-SemiBold'
},
lotsty:{
  // fontWeight: 'bold',
  fontSize: 22,
  textAlign: 'center',
  fontFamily:'Quicksand-SemiBold'
},
dontsty:{
  // fontWeight: 'bold',
  fontSize: 16,
  textAlign: 'center',
  bottom: -170,
  fontFamily:'Quicksand-SemiBold',
  color: '#287BFF'
},
signsty:{
  width:120,
  bottom: -190,
  alignSelf: 'center',
  fontFamily:'Quicksand-SemiBold'
},
Imgsty2:{
  width:85, 
  height:23,
  alignSelf: 'center',
  bottom: -205
}
});
