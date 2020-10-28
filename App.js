import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator} from "react-navigation-drawer"
import {createAppContainer } from "react-navigation";
import { Button, View, Text } from 'react-native';


import CameraPage from './src/camera.page';
import GAL from './src/demo_gallery.js'
// import { SplashScreen } from 'expo';
import SplashScreen from "./src/Splash";

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
  
  const AppNavigator = createDrawerNavigator({
    Home: {
      screen: SplashScreen
    },
    About: {
      screen: CameraPage
    },
    gal:{
        screen: GAL
    },

  }, {
      initialRouteName: "Home",
      contentOptions: {
        activeTintColor: '#e91e63'
      }
    });
  
  const AppContainer = createAppContainer(AppNavigator);
  

  
// function testScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => navigation.navigate('Splash')}
//         />
//       </View>
//     );
// }

// const Stack = createStackNavigator();


// export default class App extends React.Component {
   
//     render() {
//         // const { navigation } = this.props;
//         // <Button title = "test" onClick = {() => navigation.navigate("SplashScreen")}></Button>
//         return (
//             <Button 
//                 title = "hello" 
//                  onClick= {() => this.props.navigation.navigate('CameraPage')}>
//             {/* onClick = {<Stack.Screen name = "Camera" component = {CameraPage}></Stack.Screen> }>  */}
//             </Button>


//             // <NavigationContainer>{
//             //     <Stack.Navigator initialRouteName="Splash">
//             //         <Stack.Screen name="Camera" component={CameraPage} />
//             //         <Stack.Screen name="Splash" component = {SplashScreen} /> 
                    
//             //     </Stack.Navigator>
//             //     //<CameraPage />
//             //     /* Rest of your app code */
//             // }</NavigationContainer>
            
//         );
//     };
// };