import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <EvilIcons name="navicon" size={30} color="black" />
          <Text style={styles.hometext}>Home</Text>
        </View>
        <View style={styles.right}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Feather name="search" size={24} color="black" />
        </View>
      </View>

      <View style={styles.textcontainer}>
        <Text style={styles.maintext}>
          Discover the Best Car Rentals and Homestays in India
        </Text>
      </View>
      <View style={styles.mainimage}>
        <Image
          source={require("../assets/background-img-home.png")}
          resizeMode="contain"
          style={styles.bigimage}
        />
        <Image
          source={require("../assets/discover.png")}
          style={styles.image1}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/tc-applied.png")}
          style={styles.image2}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/special-offer-new.png")}
          style={styles.image3}
          resizeMode="contain"
        />
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.btntext}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.btntext}>Buses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.btntext}>Homestays</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taxitab}>
        <View style={styles.cont1}>
          <Image source={require("../assets/plane-takeoff.png")} />
          <Text>Airport Cabs</Text>
        </View>
        <View style={styles.cont1}>
          <Image source={require("../assets/car-local.png")} />
          <Text>Local</Text>
        </View>
        <View style={styles.cont1}>
          <Image source={require("../assets/car-outstation.png")} />
          <Text>Outstation</Text>
        </View>
      </View>
      <View style={styles.switchcontainer}>
        <Text style={styles.switchtext}>Travel to airport</Text>
        <Switch
          trackColor={{ false: "black", true: "black" }}
          // thumbColor={isEnabled ? 'white' : 'green'}
          ios_backgroundColor="lightblue"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.switchtext}>Travel from Airport</Text>
      </View>
      <View style={styles.pickdropbox}>
        <View style={styles.pick}>
          <Image
            source={require("../assets/gps-new.png")}
            size={10}
            resizeMode="center"
            style={styles.gps}
          />
          <TextInput
            placeholder="Pickup Location"
            style={styles.pickinput}
            onChangeText={(e) => setPickup(e)}
            value={pickup}
          ></TextInput>
        </View>
        <View style={styles.drop}>
          <Image
            source={require("../assets/gps-new.png")}
            size={10}
            resizeMode="center"
            style={styles.gps}
          />
          <TextInput
            placeholder="Drop Location"
            style={styles.pickinput}
            onChangeText={(e) => setDrop(e)}
            value={drop}
          ></TextInput>
        </View>
        <Image
          source={require("../assets/switch1.png")}
          style={styles.switchimage}
          resizeMode="center"
        />
      </View>
      <View style={styles.datetime}>
        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    padding: 10,
    gap: 10,
  },
  navbar: {
    width: "100%",
    backgroundColor: "green",
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },

  left: {
    flexDirection: "row",
    gap: 20,
  },
  right: {
    flexDirection: "row",
    gap: 20,
  },
  hometext: {
    fontSize: 20,
  },
  textcontainer: {
    backgroundColor: "aqua",
    height: "14%",
    width: "70%",
  },
  maintext: {
    color: "red",
    fontSize: 30,
  },
  mainimage: {
    backgroundColor: "blue",
    width: "100%",
    height: "25%",
    //  justifyContent:'center',
    alignItems: "center",
  },

  bigimage: {
    width: "80%",
    height: "80%",
    position: "relative",
  },
  image1: {
    position: "absolute",
    width: "55%",
    position: "absolute",
    right: 0,
    bottom: 150,
  },
  image2: {
    position: "absolute",
    width: "35%",
    bottom: 65,
    left: 35,
  },
  image3: {
    position: "absolute",
    width: "60%",
    top: 5,
    left: 102,
  },
  btncontainer: {
    // backgroundColor:'purple',
    width: "100%",
    flexDirection: "row",
    // alignItems:'center',
    height: "5%",
    justifyContent: "space-evenly",
  },
  button1: {
    backgroundColor: "grey",
    width: "25%",
    height: "70%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    // marginTop: 20,
  },
  btntext: {
    color: "white",
  },
  taxitab: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "10%",
    alignItems: "center",
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    // shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cont1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderColor: "black",
    // borderWidth: 1,
    padding: 5,
    height: "80%",
    width: "27%",
    borderRadius: 20,
  },

  switchcontainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "7%",
  },
  switchtext: {
    fontSize: 17,
  },
  pick: {
    flexDirection: "row",
    borderWidth: 1,
    // backgroundColor:'aqua',
    alignItems: "center",
    justifyContent: "start",
    height: "30%",
    width: "100%",
    // justifyContent:'start',
    position: "relative",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "black",
  },
  gps: {
    // backgroundColor:'black',
    width: "10%",
    height: "100%",
  },
  pickinput: {
    // backgroundColor:'purple',
    width: "80%",
    height: "100%",
    color: "black",
  },
  drop: {
    flexDirection: "row",
    borderWidth: 1,
    // backgroundColor:'aqua',
    alignItems: "center",
    justifyContent: "start",
    height: "30%",
    width: "100%",
    // justifyContent:'start',
    position: "relative",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "black",
  },

  pickdropbox: {
    // backgroundColor: "purple",
    justifyContent: "center",
    height: "15%",
    flexDirection: "column",
    gap: 15,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  switchimage: {
    position: "absolute",
  },
});
