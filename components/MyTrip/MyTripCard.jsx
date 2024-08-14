import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function MyTripCard() {
    const router=useRouter();
  return (
    
    <View style={{


        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',

    }}>
        <FontAwesome6 name="location-dot" size={24} color="black" />
      <Text 
      style={{fontSize:25,marginTop:10 ,fontWeight:'900'}}>No Trips Planned Yet</Text>

<Text 
      style={{fontSize:20,marginTop:20,textAlign:'center',color:'gray'}}>Looks like its time to plan a new travel experiemce! Get started below</Text>
      <TouchableOpacity 
      onPress={()=>  router.push('/create-trip/search-place')}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,
        marginTop:50




      }}>

        <Text
        style={{color:Colors.WHITE,fontWeight:'700',fontSize:17}}
        
        >Start a new Trip</Text>


        
      </TouchableOpacity>
    </View>
  )
}