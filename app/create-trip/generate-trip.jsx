import { View, Text ,Image} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from "../../context/createTripContext"
import { AI_PROMPT  } from '../../constants/options'
import { chatSession } from '../../configs/AImodel'
export default function generatetrip() {

    const { tripData } = useContext(CreateTripContext);
    useEffect(()=>{
        if (tripData) {
            GenerateTrip();
        }
      
    }, [tripData]);
    const  GenerateTrip=async()=>{
        const FINAL_PROMT=AI_PROMPT.replace('{location}',tripData?.location)
        .replace(`{totalDay}`,tripData?.totalNumofData)
        .replace(`{totalNight}`,tripData?.totalNumofData-1)
        .replace(`{traveller}`,tripData?.travellerType?.people)
        .replace(`{budget}`,tripData?.budget)
console.log(FINAL_PROMT);

try{
    const result = await chatSession.sendMessage(FINAL_PROMT);
    console.log(result.response.text());
    console.log("hi")
}
catch(error){
    console.error("muu hadann ba  :", error )

}


    }
  return (
    <View style={
        {
            padding:25,
            height:'100%',
            backgroundColor:Colors.WHITE,
            paddingTop:75,
            alignItems:'center'

        }
    }>
      <Text 
      
      style={{fontSize:30 ,fontWeight:'bold'}}>Please Wait...</Text>

<Text 
      
      style={{fontSize:20 ,fontWeight:'500',textAlign:'center',marginTop:10}}>We are working to generate your dream trip.</Text>
      <Image source={require('../../assets/images/earth.gif')} style={{

        width:'100%',
        height:'60%'
      }}/>
    </View>
  )
}