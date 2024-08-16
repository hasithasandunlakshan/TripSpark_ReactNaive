import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import Hotels from '../../components/Trip_Details/Hotels';

export default function UserTripDetails() 
{

    const navigation=useNavigation();
    const {trip}=useLocalSearchParams();
const [tripDetails,setTripDetails]=useState([]);
    useEffect(()=>{
        navigation.setOptions(
            {
                headerShown:true,
                headerTransparent:true,
                headerTitle:''
            }
        )


// console.log("hiiiiiiiiiiiiiiiiiii");
// console.log(trip);
setTripDetails(JSON.parse(trip));
        
    },[])

    
  return (
    <View>
        <View>
        <Image
                    source={require('../../assets/images/travelDetails.jpg')}
                    style={{
                        width: '100%',
                        height: 340,
                        borderRadius: 0,
                        objectFit: 'cover',
                    }}
                />
        </View>


                <ScrollView
                
                style={{
                       marginTop:-15,
                   padding:25,
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    borderRadius:25,
              
                    backgroundColor:'#fff'
                    }}
                >
                <Text    style={{
                       
                       fontWeight:'bold',
                       fontSize:25,
                       borderTopLeftRadius:20,
                       borderTopRightRadius:20,
                       }}>   
         {tripDetails.tripPlan?.["Main Location Address"]}
         </Text>
       
         {/* {tripDetails.tripPlan?.["Hotel options"][0].Description} */}
         <Hotels   hotels={tripDetails.tripPlan?.["Hotel options"][0]}/>
         <Hotels   hotels={tripDetails.tripPlan?.["Hotel options"][0]}/>
        

                </ScrollView>
      
    </View>
  )
}