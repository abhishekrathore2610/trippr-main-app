import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const AutoComplete = ({
  pickupValue,
  setPickupValue,
  dropValue,
  setDropValue,
  
  pickupSuggestions,
  dropSuggestions,
  setPickupSuggestons,
  setDropSuggestions,
  

  
  
  pickupDisplayList,
  setPickupDisplayList,
  dropDisplayList,
  setDropDisplayList
}) => {
  // const [inputValue, setInputValue] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  // const [displaylist, setDisplaylist] = useState(false);

  // const handleDisplay = () => {
  //   setDisplaylist(!displaylist)
  // }

  const handlePickupInputChange = async (text) => {
    setPickupValue(text);
    setPickupDisplayList(true);
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${pickupValue}&key=AIzaSyCUv7yJhnaMgU11mS-zDn9kCf9BklvsMsw`
      );

      if (response.data.status === "OK") {
        setPickupSuggestons(response.data);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }
  const handleDropInputChange = async (text) => {
    setDropValue(text);
    setDropDisplayList(true);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${dropValue}&key=AIzaSyCUv7yJhnaMgU11mS-zDn9kCf9BklvsMsw`
      );

      if (response.data.status === "OK") {
        setDropSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
   

    // console.log("predictions", suggestions);

    const renderPickupSuggestion = ({ item }) => (
      console.log("hello", item),
      (
        <TouchableOpacity
          onPress={() => {
            setPickupSuggestons([]);
            setPickupDisplayList(false);
            setPickupValue(item.description);
          }}
        >
          <Text style={{ padding: 10 }}>{item.description}</Text>
        </TouchableOpacity>
      )
    );

    const renderDropSuggestion = ({ item }) => (
      console.log("hello", item),
      (
        <TouchableOpacity
          onPress={() => {
            setDropSuggestions([]);
            setDropDisplayList(false);
            setDropValue(item.description);
          }}
        >
          <Text style={{ padding: 10 }}>{item.description}</Text>
        </TouchableOpacity>
      )
    );

    return (
      <View style={styles.container}>
        <View style={styles.pickupcont}>
          <TextInput
            placeholder="Enter pickup location"
            value={pickupValue}
            onChangeText={handlePickupInputChange}
          />

          <FlatList
            data={pickupSuggestions.predictions}
            renderItem={renderPickupSuggestion}
            keyExtractor={(item) => item}
            style={[styles.list, { display: pickupDisplayList ? "flex" : "none" }]}
          />
        </View>
        <View style={styles.dropcont}>
          <TextInput
            placeholder="Enter Drop Location"
            value={dropValue}
            onChangeText={handleDropInputChange}
          />

          <FlatList
            data={dropSuggestions.predictions}
            renderItem={renderDropSuggestion}
            keyExtractor={(item) => item}
            style={[styles.list, { display: dropDisplayList ? "flex" : "none" }]}
          />
        </View>
      </View>
    );
  
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    zIndex: 3,
    // backgroundColor: "red",
    height: 120,
    gap: 15
  },
  list: {
    // opacity:1,
    backgroundColor: "silver",
    width: "90%",
    height: 170,
    bottom: 35,
    position: "absolute",
    borderRadius: 10,
    borderWidth: 1,

    // zIndex:4
  },
  pickupcont:
  {
    borderWidth: 1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    borderRadius: 10
  },
  dropcont: {
    borderWidth: 1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    borderRadius: 10
  }

});

export default AutoComplete;
