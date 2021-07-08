import React, { Component } from 'react'
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Container, Form, Item, Input, Button, Text, CheckBox} from 'native-base';
// import CheckBox from '@react-native-community/checkbox';

export default class DataInputScreen extends Component {
  constructor() {
    super()
    this.state = {
        chechBoxOne: false,
        chechBoxTwo: false,
        type: '',
        uid: '',
        category: '',
        value: '',
        date: new Date().toLocaleString(),
        descrpiton: ''

    }

}

AddRecord = () => {

  fetch('http://192.168.1.187:3000/expenses/saveexpenses', {
  method: 'POST',
  body: JSON.stringify({
                uid: this.state.uid,
                type: this.state.type,
                category: this.state.category,
                value: this.state.value,
                date: this.state.date,
                descrpiton: this.state.descrpiton
  }),
  headers: {
     Accept : 'application/json',
    'Content-type': 'application/json'
  },
})
.then((response) => response.json())
.then((json) => console.log(json));
}

chechBoxOnePress = () => {
  this.setState({
      chechBoxOne: true,
      chechBoxTwo: false,
      type: 'Income'
  })
}
chechBoxTwoPress = () => {
  this.setState({
      chechBoxOne: false,
      chechBoxTwo: true,
      type: 'Expence'
  })
}
  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior='position' style={styles.root} enabled={true}>
         <Image
                    source={require('../Assests/usercircle.png')}
                    style={styles.Imgsty}
                />
                 <Text style={styles.containerr1} > User ID</Text>

                 <Text style={styles.containerr2} > Add Record</Text>

                 <Item rounded style={styles.uidsty1}>
                    <Input type = "text" placeholder="Amount" value={this.state.value}
                            
                            name="value"
                            onChangeText={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}/>
                </Item>

                <Item rounded style={styles.uidsty2}>
                    <Input type = "text" placeholder="Description"  value={this.state.descrpiton}
                           
                            name="descrpiton"
                            onChangeText={(value) => {
                                this.setState({
                                    descrpiton: value
                                })
                            }}/>
                </Item>

                <Item rounded style={styles.uidsty3}>
                    <Input type = "text" placeholder="Category" 
                            value={this.state.category}
                            
                            name="category"
                            onChangeText={(value) => {
                                this.setState({
                                    category: value
                                })
                            }}/>
                </Item>

                <Text style={styles.containerr3} > Income </Text>

                <Text style={styles.containerr4} > Expence</Text>

                <CheckBox checked={this.state.chechBoxOne}
                            onPress={this.chechBoxOnePress}
                            style={styles.CheckBox1}

                        />

                <CheckBox checked={this.state.chechBoxTwo}
                            onPress={this.chechBoxTwoPress}
                            style={styles.CheckBox2}
                        />

                

                <Button block rounded info style={styles.logsty1}  onPress={() => {
                            this.AddRecord();
                        }}>
                    <Text style={styles.lotsty}>Add</Text>
                </Button>

                </KeyboardAvoidingView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  Imgsty:{
    width:60, 
    height:60,
    alignSelf: 'center',
    bottom:-20,
    left:130
},
containerr1:{
  color: '#287BFF',
  fontSize: 28,
  bottom:30,
  left:20,
  textAlign:'center',
  fontFamily:'Quicksand-SemiBold',
},
containerr2:{
  color: '#287BFF',
  fontSize: 35,
  bottom:5,
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
  bottom:-90
},
lotsty:{
  fontWeight: 'bold',
  fontSize: 15,
  fontFamily:'Quicksand-SemiBold',
  textAlign: 'center'
},
CheckBox1: {
  borderColor: '#287BFF',
  borderRadius: 100,
  left:70,
  top:80
},
CheckBox2: {
  borderColor: '#287BFF',
  borderRadius: 100,
  left:200,
  top:62
},
containerr3:{
  color: '#287BFF',
  fontSize: 18,
  bottom:-124,
  left:-50,
  textAlign:'center',
  fontFamily:'Quicksand-SemiBold',
},
containerr4:{
  color: '#287BFF',
  fontSize: 18,
  bottom:-101,
  left:80,
  textAlign:'center',
  fontFamily:'Quicksand-SemiBold',
},
root: {
  paddingBottom: 90
}
})
