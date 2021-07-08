import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Form, Item, Input, Button, Icon, Text ,Content, Footer, FooterTab} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


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
    const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };
    const { uid } = this.props.route.params
    return (
      <Container>
        <Text style={styles.containerr}> ReportScreen </Text>
        <Text style={styles.containerr2}> User : {uid}</Text>
        {/* <Text>Bezier Line Chart</Text> */}
        <View style={styles.chartstyle}>
  <LineChart 
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundGradientFrom: "#287BFF",
  backgroundGradientFromOpacity: "#287BFF",
  backgroundGradientTo: "#287BFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>
       
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
},chartstyle:{
  top: 125
},
Footer: {
        
  backgroundColor: '#287BFF',
},
Icon: {
  
  color: '#fff',
}
});