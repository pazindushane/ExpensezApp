import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text ,Content, Footer, FooterTab} from 'native-base';


export default class ReportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  passNICToAnotherScreen(pass) {
    console.log(pass+" - pass data");
}

  render() {
    const { uid } = this.props.route.params
    return (
      <Container>
        <Text style={styles.containerr}> ReportScreen </Text>
        <Text style={styles.containerr2}> User : {uid}</Text>
       
        <Content>

                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical  onPress={() => this.props.navigation.navigate('ReportScreen'),this.passNICToAnotherScreen(uid)}>
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
    top: 30
},
containerr2:{
  color: '#287BFF',
  fontSize: 25,
  textAlign:'center',
  fontFamily:'Quicksand-SemiBold',
  top: 35
},
Footer: {
        
  backgroundColor: '#287BFF',
},
Icon: {
  
  color: '#fff',
}
});