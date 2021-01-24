import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
            <Header backgroundColor = "black" centerComponent = {{text:"Read",style:{fontSize:30,color:"white"}}}></Header>
            <Text style = {{marginTop:250,textAlign:"center"}}>This is Read Screen</Text>
            </View>
        );
    }
}