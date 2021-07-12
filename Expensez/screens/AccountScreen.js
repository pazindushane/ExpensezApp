import React, { Component } from 'react';
import {  StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text ,Content, Footer, FooterTab} from 'native-base';
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
    this.getData()
    const { uid } = this.props.route.params
    this.GetusersName(uid)
  }

  getData = async () => {
    try {
        const value = await AsyncStorage.getItem('uidd')
        if (value !== null) {
            console.log('0' + value)
            this.setState({ uid: value })
            // this.getUser
        }
    } catch (e) {
        // error reading value
    }
}

GetusersName= (uid) => {
  fetch('http://192.168.1.187:3000/user/oneuser/' + uid, { method: 'GET' })
      .then((response) => response.json())
      .then((json)=>this.setState({
        displaynames: (json.data.name)
      }))
      
}

// GetusersData = () => {
//   fetch('http://192.168.1.187:3000/user/oneuser/' + this.state.uid)
//   .then((response) => response.json())
//   .then((json) => console.log(json),
//   Getuse(json.data.name));
// }

// Getuse = (name) =>{
//   // console.log(name);
//   // this.setState(({this.state.name }): 'My Changed Text')
//   this.setState.name(name)
// }

  updateCustomer = () => {

    fetch('http://192.168.1.187:3000/user/updateuser/'+ this.state.uid, {
    method: 'PUT',
    body: JSON.stringify({
      // uid: this.state.uid ,
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
    this.clear(),
    alert("Successfully Added")
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

submitHandler = (e) =>{
  e.preventDefault()
  console.log(this.state);
}


  render() {
    const { uid } = this.props.route.params
    return (
        <Container>
                 <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
                <Image
                    source={require('../Assests/usercircle.png')}
                    style={styles.Imgsty}
                />
               <Form onSubmit = {this.submitHandler}>
                <Text style={styles.containerr} value={this.setState.uid} name = "uid"> {uid}</Text>
                <Text style={styles.containerr2}>{this.state.displaynames} </Text>
                {/* <Text style={styles.containerr} value={this.state.name} name = "uid"> {name}</Text> */}
               

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
                </KeyboardAvoidingView>

                <Content>

                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical  onPress={() => this.props.navigation.navigate('ReportScreen',{uid:uid})}>
                            <Icon name="receipt" style={styles.Icon}/>
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('DataInputScreen', { uid: uid })}>
                            <Icon name="pencil" style={styles.Icon} />
                            <Text style={styles.Icon}>Input</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('RecordScreen', { uid: uid })}>
                            <Icon  name="list" style={styles.Icon} />
                            <Text style={styles.Icon}>Record</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('AccountScreen', { uid: uid })}>
                            <Icon name="man"  style={styles.Icon}/>
                            <Text style={styles.Icon}>Account</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                
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
        fontSize: 30,
        bottom:-35,
        alignSelf:'center',
        textAlign:'center',
        fontFamily:'Quicksand-SemiBold',
    },
    containerr2:{
      color: '#287BFF',
      // fontWeight: 'bold',
      fontSize: 20,
      bottom:-35,
      textAlign:'center',
      alignSelf:'center',
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
    },
    Footer: {
            
      backgroundColor: '#287BFF',
    },
    Icon: {
      
      color: '#fff',
    },
    root: {
      paddingBottom: 150
    }
});