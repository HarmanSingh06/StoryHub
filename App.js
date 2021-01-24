import * as React from 'react';
import { Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import writeScreen from './screens/writeScreen';
import readScreen from './screens/readScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigation = createBottomTabNavigator({
  Write: { screen: writeScreen },
  Read: { screen: readScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName == "Write") {
          return (
            <Image style={{ height: 40, width: 40, marginBottom: 10 }} source={require("./read.png")} />
          )
        }
        else if(routeName == "Read"){
          return(
            <Image style = {{height:40,width:40, marginBottom:10}}source = {require("./write.png")}/>
          )
        }
      }
    })
  })
const AppContainer = createAppContainer(TabNavigation);