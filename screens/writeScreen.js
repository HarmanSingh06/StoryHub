import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadScreen extends React.Component {
    render() {
        return (
            <View>
                <Header backgroundColor="black" centerComponent={{ text: "Write", style: { fontSize: 30, color: "white" } }}></Header>
                <TextInput placeholder="Title" style={{ borderWidth: 2, borderColor: "grey", borderRadius: 50, paddingBottom: 10, paddingTop: 10, margin: 10, paddingLeft: 10 }} />
                <TextInput placeholder="Author" style={{ borderWidth: 2, borderColor: "grey", borderRadius: 50, paddingBottom: 10, paddingTop: 10, margin: 10, paddingLeft: 10 }} />
                <TextInput placeholder="Write Your Story Here" multiline={true} style={{ borderWidth: 2, borderColor: "grey", borderRadius: 50, paddingBottom: 50, paddingTop: 50, margin: 10, paddingLeft: 90 }} />
                <TouchableOpacity><Text style = {{backgroundColor:"#f5b587", textAlign:"center",marginTop:20, marginRight:80, marginLeft:80,padding:15,borderRadius:50,fontSize:20}}>Submit</Text></TouchableOpacity>
            </View>
        );
    }
}