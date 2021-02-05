import * as React from 'react';
import {TextInput,Text,View,TouchableOpacity,ToastAndroid,StyleSheet} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {email:'',password:''}
    }

    userLogin= async(email,password) =>{
        if(!email && password){
            ToastAndroid.show("Enter Email and Password",ToastAndroid.SHORT)
        }
        else{
            try{
                const response = firebase.auth().signInWithEmailAndPassword(email,password);
                if(response){
                    this.props.navigation.navigate("Read")
                }
            }
            catch(error){
                console.log(error)
            }
        }
    }
    render(){
        return(
            <View>
            <Text style = {{ textAlign: 'center', fontSize: 30 }}>Story Hub</Text>
            
            <TextInput style = {styles.loginBox}
            placeholder = "abc@example.com" 
            onChangeText = {(text)=>{
                this.setState({email:text})
            }}/>
            
            <TextInput style = {styles.loginBox}
            placeholder = "Enter Password" 
            secureTextEntry = {true}
            onChangeText = {(text)=>{
                this.setState({password:text})
            }}/>
            
            <TouchableOpacity style = {{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7,marginLeft:135}}onPress = {()=>{
                this.userLogin(this.state.email,this.state.password)
            }}><Text style = {{textAlign:'center'}}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
      width: 300,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      margin: 10,
      paddingLeft: 10,
      marginLeft:50
    },
  });