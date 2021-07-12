import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text ,Content, Footer, FooterTab, Card, CardItem, Body} from 'native-base';



export default class ReportScreen extends Component {
  intervalID1;
  intervalID2;

  constructor(props) {
    super(props);
    this.state = {
    };
    // this.GetusersExc();
    // this.GetusersInc();
    const { uid } = this.props.route.params
    this.GetusersExc(uid)
    this.GetusersInc(uid)
    clearTimeout(this.intervalID1)
    clearTimeout(this.intervalID2)
    
  }
  

  // componentDidMount= ()=> {
  //   this.GetusersExc();
  //   this.GetusersInc();
  // }

  



GetusersExc= (uid) => {
  fetch('http://192.168.1.187:3000/expenses/sumexpenses/' + uid, { method: 'GET' })
      .then((response) => response.json())
      .then((json)=>this.setState({
        displayname1: (json[0].total)
      }),
      
      )
      this.intervalID1 = setTimeout(this.GetusersExc.bind(this), 5000)
      
}
// console.log(json[0].total)


GetusersInc= (uid) => {
 fetch('http://192.168.1.187:3000/expenses/incexpenses/'+ uid, { method: 'GET' })
  .then((response) => response.json())
  .then((json)=>this.setState({
    displayname2: (json[0].total)
    
    
  }),
 
  )
  this.intervalID2 = setTimeout(this.GetusersInc.bind(this), 5000)
}

// componentWillUnmount= ()=> {
//   /*
//     stop getData() from continuing to run even
//     after unmounting this component. Notice we are calling
//     'clearTimeout()` here rather than `clearInterval()` as
//     in the previous example.
//   */
//   clearTimeout(this.intervalID1);
//   clearTimeout(this.intervalID2);
// }

submitHandler = (e) =>{
  e.preventDefault()
  console.log(this.state);
}

  render() {
    
    const { uid } = this.props.route.params
    return (
      <Container>
        <Form onSubmit = {this.submitHandler}>
        <Icon name="receipt" style={styles.Icon2}/>
        <Text style={styles.containerr}> Reports </Text>
        <Text style={styles.containerr2}> User :{uid} </Text>
        
        
        <View style={styles.cardstyle1}>

              <Text style={styles.incomestyle1}>Income</Text>
              <Text style={styles.incomestyle2}>{this.state.displayname1} Lkr</Text>
              
        </View>

        <View style={styles.cardstyle2}>

              <Text style={styles.expensestyle1}>Expenses</Text>
              <Text style={styles.expensestyle2}>{this.state.displayname2} Lkr</Text>
              
        </View>
       
        
        {/* <Text>Bezier Line Chart</Text> */}
        <View>
 
       </View>
       </Form>
        <Content>

                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical  onPress={() => this.props.navigation.navigate('ReportScreen', { uid: uid })}>
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
  containerr:{
    color: '#287BFF',
    fontSize: 35,
    textAlign:'center',
    fontFamily:'Quicksand-SemiBold',
    top: 1
},
containerr2:{
  color: '#287BFF',
  fontSize: 25,
  textAlign:'center',
  fontFamily:'Quicksand-SemiBold',
  top: 20,
  right:10
},
cardstyle1:{
  borderRadius:20,
  backgroundColor: '#d6e6ff',
  borderColor:'#287BFF',
  width:300,
  height:100,
  alignSelf: 'center',
  top:60
},
incomestyle1:{
  color: '#2ecc71',
  fontSize:25,
  left:210
},
incomestyle2:{
  color: '#287BFF',
  fontSize:35,
  left:10,
  top:24
},
cardstyle2:{
  borderRadius:20,
  backgroundColor: '#d6e6ff',
  borderColor:'#287BFF',
  width:300,
  height:100,
  alignSelf: 'center',
  top:80
},
expensestyle1:{
  color: '#e74c3c',
  fontSize:25,
  left:190
},
expensestyle2:{
  color: '#287BFF',
  fontSize:35,
  left:10,
  top:24
},
chartstyle:{
  top: 125
},
Footer: {
        
  backgroundColor: '#287BFF',
},
Icon: {
  
  color: '#fff',
},
Icon2: {
  
  color: '#287BFF',
  top:40,
  left:83
}
});