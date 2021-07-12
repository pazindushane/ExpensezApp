import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, FlatList, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, CardItem, Text, Left, Body, Right, Button, Title , Footer, FooterTab, Icon } from 'native-base';
import GlobalFont from 'react-native-global-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class RecordScreen extends Component {
  constructor(props) {
    super(props);

    this.scrollToTopAndRefresh = this.scrollToTopAndRefresh.bind(this);
    this.doRefresh = this.doRefresh.bind(this);

    this.state = {
      isLoading: true,
      refreshing: false,
    }
    const { uid } = this.props.route.params
    this.getData(uid)

    
  }

 

  scrollToTopAndRefresh() {
    this.flatlistref.scrollToOffset({ y: 0, animated: true });
    this.setState({ refreshing: true }, this.doRefresh);
  }

  doRefresh() {
    console.log('dsds')
    this.getData()
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  }

  getData(uid) {

    return fetch('http://192.168.1.187:3000/expenses/specexpenses/'+ uid)
      .then((response) => response.json())
      .then((responseJson) => { 

        this.setState({
          isLoading: false,
          dataSource: responseJson,

        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    let fontName = 'Quicksand-SemiBold'
    GlobalFont.applyGlobal(fontName)
}

  flatlistref = null;

  render() {
    const { uid } = this.props.route.params
    return (
      <Container>

              <View style={{ flex: 1 }}>

              <FlatList
                ref={(ref) => this.flatlistref = ref}
                style={styles.Fatlist}
                data={this.state.dataSource}
                renderItem={({ item }) =>
                  <View style={styles.Card}>

                    <Text style={styles.Date}>{item.date}</Text>
                    <Text style={styles.Value}>$ : {item.value}</Text>
                    <Text style={styles.Type}>Type : {item.type}</Text>
                    <Text style={styles.Category}>Transaction Category : {item.category}</Text>
                  </View>

                }
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.doRefresh}
                  />
                }
                keyExtractor={( item , index ) => index.toString()}
              />

                <Content>
                
                </Content>
                <Footer >
                    <FooterTab style={styles.Footer}>
                        <Button vertical  onPress={()=>this.props.navigation.navigate('ReportScreen',{uid:uid})}>
                            <Icon name="receipt"style={styles.Icon} />
                            {/* <FontAwesomeIcon icon="fa-solid fa-file-contract" /> */}
                            <Text style={styles.Icon}>Report</Text>
                        </Button>
                        <Button vertical onPress={()=>this.props.navigation.navigate('DataInputScreen',{uid:uid})}>
                            <Icon name="pencil" style={styles.Icon}/>
                            <Text style={styles.Icon}>Input</Text>
                        </Button>
                        <Button vertical  onPress={()=>this.props.navigation.navigate('RecordScreen',{uid:uid})}>
                            <Icon  name="list" style={styles.Icon} />
                            {/* <FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" /> */}
                            <Text style={styles.Icon}>Record</Text>
                        </Button>
                        <Button vertical onPress={()=>this.props.navigation.navigate('AccountScreen',{uid:uid})}>
                            <Icon name="man" style={styles.Icon}/>
                            <Text style={styles.Icon}>Account</Text>
                        </Button>
                    </FooterTab>
                </Footer>

              </View>

      </Container>
    );
  }
}


const styles = StyleSheet.create({

Fatlist: {
  marginTop: 13

},

Card: {
  backgroundColor: '#d6e6ff',
  marginLeft: 13,
  marginRight: 13,
  marginBottom: 8,
  padding: 13,
  borderRadius: 35,
  borderWidth: 1,
  borderColor: '#287BFF'

},

Date: {

  flexDirection: 'row',
  left: 225,
  color: '#2ecc71',
  fontFamily:'Quicksand-SemiBold'
},
Value: {
  fontSize: 35,
  color: '#287BFF',
  fontFamily:'Quicksand-SemiBold'

},
Type: {
  flexDirection: 'row',
  color: '#2f3542',
  fontFamily:'Quicksand-SemiBold'


},
Category: {
  flexDirection: 'column',
  color: '#2f3542',
  fontFamily:'Quicksand-SemiBold'


},
Descrpiton: {
  flexDirection: 'column',
  color: '#2f3542',
  fontFamily:'Quicksand-SemiBold'

},
Footer: {
        
  backgroundColor: '#287BFF',
},
Icon: {
  
  color: '#fff',
}
})
