import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class ReadScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            story: ''
        }
    }
    submitStory = async () => {
        db.collection('stories').add({
            "Title": this.state.title,
            "Author": this.state.author,
            "story": this.state.story
        });
    }
    render() {
        return (
            <View>
                <Header
                    backgroundColor="black"
                    centerComponent={{
                        text: "Write",
                        style: styles.header
                    }}>

                </Header>

                <TextInput placeholder="Title" style={styles.input} onChangeText={(text) => {
                    this.setState({ title: text })
                }} />
                <TextInput placeholder="Author" style={styles.input} onChangeText={(text) => {
                    this.setState({ author: text })
                }} />
                <TextInput placeholder="Write Your Story Here" multiline={true} style={styles.input} onChangeText={(text) => {
                    this.setState({ story: text })
                }} />

                <TouchableOpacity onPress={() => {
                    this.submitStory();
                }}><Text style={styles.button}>Submit</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: "white"
    },
    input: {
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 50,
        paddingBottom: 10,
        paddingTop: 10,
        margin: 10,
        paddingLeft: 10
    },
    button: {
        backgroundColor: "#f5b587",
        textAlign: "center",
        marginTop: 20,
        marginRight: 80,
        marginLeft: 80,
        padding: 15,
        borderRadius: 50,
        fontSize: 20
    }
})