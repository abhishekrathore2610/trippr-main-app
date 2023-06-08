import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handlePostRequest = () => {
    setEmail('');
    setPassword('');


    
    const data = {
      email:email,

      password: password,
    };

    console.log(data);

    fetch(
      "https://trippr-dev-64zvm7t2wa-em.a.run.app/api/v1/auth/customer/login",
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
        if(responseData.statusCode=== 200){
          navigation.navigate('Home')
        } else{
          console.warn("Invalid email or password")
        }
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View>
          <Image
            source={require("../assets/login-logo-new.png")}
            resizeMode="center"
          />
        </View>
      </View>
      <View style={styles.second}>
        <TextInput
          style={styles.input1}
          placeholder="Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <View style={styles.password}>
          <TextInput
            style={styles.input2}
            placeholder="Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require("../assets/eye.png")}
              name={hidePassword ? "eye-off-outline" : "eye-outline"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.realtext}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.loginbtn} onPress={handlePostRequest}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.third}>
        <Image source={require("../assets/or-line.png")} />
        <View style={styles.logos}>
          <Image source={require("../assets/google1-logo.png")} />
          <Image source={require("../assets/facebook-logo.png")} />
          <Image source={require("../assets/twitter-logo.png")} />
          <Image source={require("../assets/apple-logo.png")} />
        </View>
        <View style={styles.belowpassword}>
          <Text style={styles.footertext}>Don't have an account?</Text>
          <View style={styles.signupbtncontainer}>
            <TouchableOpacity
              styles={styles.signupbtn}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.signuptext}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  google: {
    flexDirection: "row",
  },
  first: {
    flex: 0.4,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'red'
  },

  second: {
    // backgroundColor:'purple',
    // backgroundColor:'purple',
    width: "100%",
    height: "100%",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'aqua'
  },
  input1: {
    width: "90%",
    height: "15%",

    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "#A17FE0",
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "90%",
    height: "15%",
    borderRadius: 10,
    justifyContent: "space-between",
    borderColor: "#A17FE0",
    marginBottom: 8,
  },
  input2: {
    // width:'80%',
    // height:'40%',
    // borderColor:'gray',
    // borderWidth: 1,
    // paddingHorizontal: 10,
    // marginBottom:20,
    // backgroundColor:'red',
    width: "90%",
  },
  text: {
    // flexDirection:'start',
    // backgroundColor: "black",
    width: "100%",
    paddingHorizontal: 20,
  },
  realtext: {
    // fontFamily:'Manrope',
    color: "#A17FE0",
  },
  loginbtn: {
    backgroundColor: "#A17FE0",
    width: "65%",
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logintext: {
    color: "white",
  },
  belowpassword: {
    // backgroundColor:'green',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    height: "20%",
  },
  signupbtn: {
    color: "red",
    // marginTop: 15
  },
  signuptext: {
    color: "#0056FB",
    fontSize: 20,
  },
  third: {
    flex: 0.3,
    // backgroundColor:'green',
    // justifyContent:'center',
    alignItems: "center",
    // paddingTop: 0
  },
  logos: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor:'grey',
    width: "75%",
    margin: 15,
    display: "none",
  },
  signupbtncontainer: {
    // backgroundColor:'red',
    marginTop: 10,
    height: "70%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    textDecorationLine: "underline",
    fontSize: 20,
  },
});
