import { StyleSheet, Text, View, Image,TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

const EnjoyTrip = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.uppercontainer}>
        
        <TouchableOpacity onPress={() => props.navi.navigate('Login')} style={styles.arrowbtn}>
        <EvilIcons name="arrow-right" size={40} color="black" />
        </TouchableOpacity>
            <Image source={require('../assets/enjoy-trip-new.png')} style={styles.image1} />
        </View>
        <View style={styles.lowercontainer}>
            <Image source ={require('../assets/backgroung-one.png')} resizeMode='cover' style={styles.image2}/>
            <View style={styles.buttoncontainer}>
            
                </View>
            
            <Text style={styles.text1}>Enjoy your Trip</Text>
            <Text style={styles.text2}>Discover new places and share with your friends and travel together</Text>

        </View>
      
    </View>
  )
}

export default EnjoyTrip

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        width: '100%',
        height:'100%',
        position:'relative'
        

    },
    uppercontainer: {
        flex: 0.5,
        alignItems:'center',
        justifyContent:'center',
    },
    lowercontainer: {
        flex: 0.5,
        justifyContent:'flex-end',
        width:'100%',
        alignContent:'center',
        position:'relative',
        
        
        
        
        

    },

    
    image2 : {
        width: '100%',
        position:'absolute',
        bottom:0,
    },
    text1 : {
        position:'absolute',
        bottom:"33%",
        textAlign:'center',
        width:'100%',
        fontSize:25,
        // fontFamily:'Montserrat',
        color:'#5158D5',
        fontWeight:"400",
        // letterSpacing:'.5'

    }, text2: {
        position:'absolute',
        bottom:'14%',
        textAlign:'center',
        width: '100%',
        color:'#9747FF',
        bottom: '20%',
        // fontFamily:'Montserrat',
        // letterSpacing:'.7'
    }, image1: {
        width:'95%',
        height:'55%'
    },btn1 : {
        position:'absolute',
        right: 0,
        top: 0,
        backgroundColor:'red',
        zIndex:1

    }, btntext: {
        color:'black'
    },buttoncontainer : {
        position:'absolute',
        right: 0,
        bottom:'33%'
    },
    arrowbtn: {
        // backgroundColor:'blue',
        
        width: '100%',
        // justifyContent:'flex-end',
        alignItems:'flex-end',
        color:'blue',
        
    }

    

    



    
})