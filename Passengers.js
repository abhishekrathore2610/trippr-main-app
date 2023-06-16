import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  
  import { AntDesign } from '@expo/vector-icons';
  // import { AntDesign } from '@expo/vector-icons';
  
  const Passengers = ({pass,setPass}) => {
    
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setPass(pass + 1)}>
          {/* <Text style={styles.plusfont}>+</Text> */}
          <AntDesign name="pluscircleo" size={20} color="black"  onPress={() => setPass(pass + 1)}/>
        </TouchableOpacity>
        <View style={styles.pass}>
          <Text style={styles.passtext}>{pass}</Text>
        </View>
        <TouchableOpacity onPress={() => setPass(pass - 1)}>
          {/* <Text style={styles.plusfont}>-</Text> */}
          <AntDesign name="minuscircleo" size={20} color="black"  onPress={() => setPass(pass - 1)}/>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Passengers;
  
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: "red",
      width: "30%",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 35,
      alignItems: "center",
      marginRight: 160
    },
    pass: {
      // backgroundColor: "yellow",
      height: 30,
      width:30,
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 1,
      borderRadius: 5
    },
    passtext: {
      fontSize: 20
    },
    plusfont: {
      fontSize: 30
    }
  });
  