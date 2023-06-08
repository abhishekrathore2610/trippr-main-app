import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,Alert
} from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  

  const handlePostRequest = () => {
    if(!name){
       Alert.alert('Invalid Name', 'Please enter a valid Name.')
       return;
    } 

    if (!email || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!mobileNumber || mobileNumber.length !== 10){
      Alert.alert('Invalid Phone Number', 'Please enter a valid Phone Number.');
    }

    if(!password){
      Alert.alert('Invalid Passward', 'Please enter a valid Password')
      return;
   } 
    const data = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
    };

    fetch(
      "https://trippr-dev-64zvm7t2wa-em.a.run.app/api/v1/auth/customer/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response data here
        console.log(responseData);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });

      navigation.navigate('Home')
  };

  // const [inputText5, setInputText5] = useState("");
  // const handleInput5 = (e) => {
  //   setInputText5(e);
  // };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.first}>
        <Image
          source={require("../assets/signup-logo-new.png")}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <View style={styles.second}>
        <View style={styles.usernamecontainer}>
          <FontAwesome5 name="user-alt" size={24} color="black" />
          <TextInput
            style={styles.inpu}
            placeholder="Full Name"
            value={name}
            onChangeText={(e) => setName(e)}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.usernamecontainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
          <TextInput
            style={styles.inpu}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={styles.usernamecontainer3}>
          <View style={styles.uppercontainer}>
            <MaterialIcons name="lock-outline" size={24} color="black" />
            <TextInput
              style={styles.inpu}
              placeholder="Password"
              value={password}
              onChangeText={(e) => setPassword(e)}
              returnKeyType="done"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <View style={styles.lowercontainer}>
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.usernamecontainer}>
          <FontAwesome name="phone" size={24} color="black" />
          <TextInput
            style={styles.inpu}
            placeholder="Phone Number"
            value={mobileNumber}
            onChangeText={(e) => setMobileNumber(e)}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        {/* <TextInput
          style={styles.input1}
          placeholder="Phone Number"
          value={inputText5}
          onChangeText={handleInput5}
        /> */}
        <TouchableOpacity style={styles.loginbtn} onPress={handlePostRequest}>
          <Text style={styles.signuptext}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertext}>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // justifyContent:'center',
    // alignItems:'center'
  },
  first: {
    flex: 0.5,
    // backgroundColor:'red',
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // width:'100%'
  },
  second: {
    flex: 0.4,
    // backgroundColor:'aqua',
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  // input1: {
  //   width: "90%",
  //   height: "10%",

  //   borderColor: "gray",
  //   borderWidth: 1,
  //   paddingHorizontal: 10,
  //   // marginBottom: 20,
  //   borderRadius: 10,
  //   borderColor: "#A17FE0",
  // },
  loginbtn: {
    backgroundColor: "#A17FE0",
    width: "65%",
    height: "13%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  footer: {
    // backgroundColor:'green',
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 0.1,
    // paddingTop: 20,
    marginTop:5
  },
  logintext: {
    color: "#A17FE0",
    fontSize: 20,
  },
  signuptext: {
    color: "white",
  },
  usernamecontainer: {
    width: "90%",
    height: "15%",

    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#A17FE0",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  usernamecontainer3: {
    width: "90%",
    height: "13%",

    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#A17FE0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // gap: 15,
  },
  uppercontainer: {
    flexDirection: "row",
    gap: 15,
  },
  footertext: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
  inpu: {
    width: "82%",
    // backgroundColor:'red',
    fontSize: 18,
  },
});
