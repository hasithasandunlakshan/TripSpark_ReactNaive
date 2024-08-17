import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {SelectTravelList} from '../../constants/options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from "../../context/createTripContext"
import { ScrollView } from 'react-native'
export default function createtraveller() {
  const router =useRouter();
  const navigation=useNavigation();
  const [selectedTraveller,setSelectedTraveller]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext);
    useEffect(()=>{
        navigation.setOptions(
            {
                headerShown:true,
                headerTranseparent:true,
                headerTitle:''
            }
        )


        
    })
    useEffect(()=>{
      setTripData({...tripData,travellerType:selectedTraveller})
    },[selectedTraveller])
  
  return (
    <ScrollView
    style={{
      padding:25,
      height:'100%',

      backgroundColor:'#fff'
    }}


     
     
     >
      <View>
      <Text
      
      style={{
        fontSize:35,
        fontWeight:'bold',

        
      }}>Who's Travelling</Text>
 <Text
      
      style={{
        fontSize:30,
        fontWeight:'500',
        marginTop:5,
        marginBottom:20
        
      }}>Choose your Travellers</Text>
<FlatList

data={SelectTravelList}
renderItem={({item,index})=>(
<TouchableOpacity
onPress={()=>setSelectedTraveller(item)}
style={{marginVertical:5}}
>
<OptionCard option={item} selectedTraveller={selectedTraveller}/>
</TouchableOpacity>


)}
>
  


</FlatList>


      </View> 

      <TouchableOpacity  style={{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'0'

  }}
        
        
        onPress={()=>router.push('/create-trip/Select-Date')}
        >


        <Text style={{color:Colors.WHITE,textAlign:"center",
            fontSize:20,
            fontWeight:'800'
          
        }}>Continue</Text>
        </TouchableOpacity >
    </ScrollView>
  )
}