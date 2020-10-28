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


class demo_gallery extends Component {

  render() {
    
    
    return (
      <View style={styles.container}>
        <ImageBackground source= {require('./fake_gallery.jpg')} style={styles.image}>
          <Button
            title="Edit Note"
            onPress={() => this.props.navigation.navigate('Home')}>
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

export default demo_gallery;