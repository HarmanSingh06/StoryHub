import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ToastAndroid } from 'react-native';
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
        var title = this.state.title;
        var author = this.state.author;
        var story = this.state.story;

        if (title === '') {
            ToastAndroid.show("Title Required", ToastAndroid.SHORT)
        }
        else if (author === '') {
            ToastAndroid.show("Author required", ToastAndroid.SHORT)
        }
        else if (story === '') {
            ToastAndroid.show("Story required", ToastAndroid.SHORT)
        }
        else {
            db.collection('stories').add({
                "Title": this.state.title,
                "Author": this.state.author,
                "story": this.state.story
            });

            ToastAndroid.show("Your Story has been submitted", ToastAndroid.SHORT)
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
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
            </KeyboardAvoidingView>
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