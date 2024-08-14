import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyTripCard from '../../components/MyTrip/MyTripCard';
const mytrip = () => {
    const [userTrips,setUserTrips]=useState([]);

  return (
    <View style={{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.WHITE,
        height:"100%",
    }}>


        <View style={{display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }}>
        <Text style={{

            fontSize:35,
            fontWeight:'bold'
        }}>My Trips</Text>
        <Ionicons name="add-circle" size={35} color="black" />

        </View>
        {userTrips.length==0?
        <MyTripCard/>:null}
     
    </View>
  )
}

export default mytrip;