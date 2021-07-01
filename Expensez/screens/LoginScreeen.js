import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
// import { View, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';


export default class LoginScreeen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uid:'',
      name: '',
      email:'',
      password:''
    };
  }

//   getDate() {
//     return fetch('http://192.168.1.187:3000/user/oneuser/C001', {
//         method: 'GET',
//     }).then((response) => response.json()).then((user) => {
//         console.log(user)
//     })
// }

saveCustomer = () => {
  var data = new Headers();
  data.append('Accept', 'application/json')
  data.append('uid', this.state.uid)
  data.append('name', this.state.name)
  data.append('email', this.state.email)
  data.append('password', this.state.password)

  return fetch('http://192.168.1.187:3000/user/', {
      method: 'POST',
      headers: data
  }).then((response) => response.json()).then((resp) => {
      if (resp.affectedRows > 0) {
          Alert.alert('User Added')
      }
  }).catch((errr) => {
      console.log("Failed")
  })
}

getData(){
  fetch('http://192.168.1.187:3000/user/oneuser/C001',{ method: 'GET'})
.then((response) => response.json())
.then((json) => console.log(json))
}


  render() {
    return (
        // <View>
          // <LinearGradient colors={['#01D5C1', '#00C5C0', '#01B8BF']} style={styles.containerr}>

            <Container>
                    <Header />
                    <Content>
                      <Form>
                        <Item>
                          <Input placeholder="Useid" 
                          value={this.state.uid}
                          onChangeText={(value) => {
                              this.setState({
                                uid: value
                              })
                          }}
                          />
                        </Item>
                        <Item>
                          <Input placeholder="Username" 
                          value={this.state.name}
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }}
                          />
                        </Item>
                        <Item>
                          <Input placeholder="email" 
                          value={this.state.email}
                          onChangeText={(value) => {
                              this.setState({
                                email: value
                              })
                          }}
                          />
                        </Item>
                        <Item last>
                          <Input placeholder="Password" 
                          value={this.state.password}
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}
                          />
                        </Item>
                        <Button
                        onPress={this.getData}
                        >
                          <Text>SignUp</Text>
                       </Button>
                      </Form>
                    </Content>
                  </Container>

          // </LinearGradient>

        // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   containerr:{
//     flex: 1,
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5
// }
// });
