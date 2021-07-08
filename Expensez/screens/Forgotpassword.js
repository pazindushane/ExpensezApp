import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Form, Item, Input, Button, Text} from 'native-base';
import GlobalFont from 'react-native-global-font';


export default class Forgotpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
  }

  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state);
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

  render() {
    return (
        <Container>

            <Text style={styles.containerr}>Forgot Your Password ?</Text>

            <Image
                    source={require('../Assests/password.png')}
                    style={styles.Imgsty1}
                />

            <Form onSubmit = {this.submitHandler}>

            <Item rounded style={styles.uidsty}>
              <Input   placeholder="Email/User Id" value={this.state.name}
                          type = "text"
                          name = "name"
                          onChangeText={(value) => {
                              this.setState({
                                name: value
                              })
                          }} />
            </Item>

            <Button block rounded  style={styles.logsty} >
            <Text style={styles.lotsty}>Send Code</Text>
           </Button>

            </Form>

            <Image
                    source={require('../Assests/exbanner.png')}
                    style={styles.Imgsty2}
                />

        </Container>
    );
  }
}

const styles = StyleSheet.create({

    containerr:{
        color: '#287BFF',
        // fontWeight: 'bold',
        fontSize: 31,
        textAlign:'center',
        bottom: -50,
        fontFamily:'Quicksand-SemiBold'
    },
    uidsty:{
        width:250,
        alignSelf: 'center',
        bottom: -90,
        fontFamily:'Quicksand-SemiBold'
      },
      logsty:{
        width:170,
        height:55,
        alignSelf: 'center',
        textAlign: 'center',
        bottom: -120,
        fontFamily:'Quicksand-SemiBold',
        backgroundColor:'#287BFF',
      },
      lotsty:{
        // fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        fontFamily:'Quicksand-SemiBold'
      },
      Imgsty1:{
        width:200, 
        height:200,
        alignSelf: 'center',
        bottom: -60,
        fontFamily:'Quicksand-SemiBold'
    },
    Imgsty2:{
      width:150, 
      height:25,
      alignSelf: 'center',
      bottom: -200,
      fontFamily:'Quicksand-SemiBold'
  }
});
