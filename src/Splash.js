import React, { Component } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native';
import { ImageBackground} from "react-native";
import CameraPage from './camera.page';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    flexDirection: "column"
  },  
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});


class Splash extends Component {

  render() {
    
    
    return (
      <View style={styles.container}>
        <ImageBackground source= {require('./fake_note.jpg')} style={styles.image}>
          <Button
            title="Go to Camera"
            onPress={() => this.props.navigation.navigate('About')}>
          </Button>

          <Button
            title="Go to Gallery"
            onPress={() => this.props.navigation.navigate('gal')}>
          </Button>
        </ImageBackground>
      </View>
      // <Button
      //   title="Go to About"
      //   onPress={() => this.props.navigation.navigate('About')}>

        
      // </Button>

      //<Stack.Screen name="Camera" component={CameraPage} />
        
    );
  }
}

export default Splash;