import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
// import { View, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

import { Container, Header, Content, Form, Item, Input, Button, Text, Body } from 'native-base';


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
  .then((json) => console.log(json));
  // var data = new Body();
  // data.append('Accept', 'application/json')
  // data.append('uid', this.state.uid)
  // data.append('name', this.state.name)
  // data.append('email', this.state.email)
  // data.append('password', this.state.password)

  // return fetch('http://192.168.1.187:3000/user', {
  //     method: 'POST',
  //     body: data
  // }).then((response) => response.json()).then((resp) => {
  //     if (resp.affectedRows > 0) {
  //         Alert.alert('User Added')
  //     }
  // }).catch((errr) => {
  //     console.log("Failed")
  // })
}



getData(){
  fetch('http://192.168.1.187:3000/user/allusers',{ method: 'GET'})
.then((response) => response.json())
.then((json) => console.log(json))
}


submitHandler = (e) =>{
  e.preventDefault()
  console.log(this.state);
}


  render() {
    return (
        // <View>
          // <LinearGradient colors={['#01D5C1', '#00C5C0', '#01B8BF']} style={styles.containerr}>

            <Container>
                    <Header />
                    <Content>
                      <Form onSubmit = {this.submitHandler}>
                        <Item>
                          <Input placeholder="Useid" 
                          value={this.state.uid}
                          type = "text"
                          name = "uid"
                          // onChange = {this.changeHandler}
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
                          type = "text"
                          name = "name"
                          // onChange = {this.changeHandler}
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
                          type = "text"
                          name = "email"
                          // onChange = {this.changeHandler}
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
                          type = "text"
                          name = "password"
                          // onChange = {this.changeHandler}
                          onChangeText={(value) => {
                              this.setState({
                                password: value
                              })
                          }}
                          />
                        </Item>
                        <Button
                        onPress={this.saveCustomer}
                        type = "submit"
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
