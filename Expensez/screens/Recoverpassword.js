import React, { Component } from 'react';
import {  StyleSheet, Image } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text} from 'native-base';
import GlobalFont from 'react-native-global-font';

export default class Recoverpassword extends Component {
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
    return (
        <Container>

            <Text style={styles.containerr}>Recover Your Password</Text>
            <Image
                    source={require('../Assests/recover.png')}
                    style={styles.Imgsty1}
                />

            <Form>

            <Item rounded style={styles.uidsty1}>
              <Input type = "text" placeholder="UserId/Email" />
            </Item>
            <Item rounded style={styles.uidsty2}>
                <Input type = "text" placeholder="New Password" />
            </Item>
            <Item rounded style={styles.uidsty3}>
                <Input type = "text" placeholder="Retype Password" />
            </Item>

            <Button block rounded success style={styles.logsty}>
               <Text style={styles.lotsty}>Recover</Text>
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
      // fontWeight: 'bold',
      fontSize: 32,
      textAlign:'center',
      // fontFamily:'notoserif'
      fontFamily:'Quicksand-SemiBold',
      bottom:-20
  },
  Imgsty1:{
    width:200, 
    height:200,
    alignSelf: 'center',
    bottom: -40,
    fontFamily:'Quicksand-SemiBold'
  },
  uidsty1:{
    width:250,
    alignSelf: 'center',
    bottom:-50
},
uidsty2:{
  width:250,
  alignSelf: 'center',
  bottom:-62
},
uidsty3:{
  width:250,
  alignSelf: 'center',
  bottom:-75
},
logsty:{
    width:150,
    height:55,
    alignSelf: 'center',
    textAlign: 'center',
    bottom:-100,
    backgroundColor:'#287BFF'
},
lotsty:{
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
},
Imgsty2:{
  width:85, 
  height:23,
  alignSelf: 'center',
  bottom: -125,
  fontFamily:'Quicksand-SemiBold'
}
});