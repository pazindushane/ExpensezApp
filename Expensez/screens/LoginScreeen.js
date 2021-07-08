import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LoginScreeen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  // const user_name = navigation.getParam('userName', 'NO-User');  
  // const other_param = navigation.getParam('otherParam', 'some default value');  
  // <Text style={styles.textStyle}>User Name: {JSON.stringify(user_name)}</Text>  
  //               <Text style={styles.textStyle}>Other Param: {JSON.stringify(other_param)}</Text>  

  render() {
    return (
      <View>
        <Text> LoginScreeen </Text>
      </View>
    );
  }
}
