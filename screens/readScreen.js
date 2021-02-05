import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class ReadScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            allStories: [],
            lastVisibleTransaction: null
        }
    }
    update = (search) => {
        this.setState({ search: search })
    }

    componentDidMount = async () => {
        var query = await db.collection('stories').limit(10).get();
        query.docs.map((doc) => {
            this.setState({
                allStories: [...this.state.allStories, doc.data()],
                lastVisibleTransaction: doc
            })
        })
    }

    fetchMoreStories = async () => {
        var query = await db.collection('stories').startAfter(this.state.lastVisibleTransaction).limit(5).get();
        query.docs.map((doc) => {
            this.setState({
                allStories: [...this.state.allStories, doc.data()],
                lastVisibleTransaction: doc
            })
        })
        console.log("Hello")
    }
    searchStories = async (text) => {
        var query = await db.collection("stories").where('Title', "==", text).get();
        query.docs.map((doc) => {
            this.setState({ allStories: [...this.state.allStories, doc.data()] })
        })
    }



    render() {
        return (
            <View>
                <Header backgroundColor="black" centerComponent={{ text: "Read Stories", style: { fontSize: 30, color: "white" } }}></Header>
                <SearchBar onChangeText={(text) => { this.update(text) }} value={this.state.search} />
                <TouchableOpacity onPress={() => {
                    this.searchStories(this.state.search)
                }} style={styles.searchBar}><Text>Search</Text></TouchableOpacity>
                <FlatList
                    data={this.state.allStories}
                    renderItem={({ item }) => (
                        <View style={{ borderBottomWidth: 2 }}>
                            <Text>{"Title:" + item.Title}</Text>
                            <Text>{"Author:" + item.Author}</Text>
                            <Text>{"Story:" + item.story}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.fetchMoreStories()}
                    onEndReachedThreshold={0} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        borderWidth: 0.5,
        alignItems: 'center',
        backgroundColor: 'grey',

    }
})