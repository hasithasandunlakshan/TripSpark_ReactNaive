import { View, Text ,Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import {CreateTripContext} from "../../context/createTripContext"
import { AI_PROMPT  } from '../../constants/options'
import { chatSession } from '../../configs/AImodel'
import { useRouter } from 'expo-router'
import {auth,db} from "../../configs/fireBaseConfig"
import { doc, setDoc } from "firebase/firestore"; 
export default function generatetrip() {
const router=useRouter();
const user=auth.currentUser;
    const { tripData } = useContext(CreateTripContext);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        if (tripData) {
            GenerateTrip();
        }
      
    }, [tripData]);
    const  GenerateTrip=async()=>{
      setLoading(true);
        const FINAL_PROMT=AI_PROMPT.replace('{location}',tripData?.location)
        .replace(`{totalDay}`,tripData?.totalNumofData)
        .replace(`{totalNight}`,tripData?.totalNumofData-1)
        .replace(`{traveller}`,tripData?.travellerType?.people)
        .replace(`{budget}`,tripData?.budget)
console.log(FINAL_PROMT);

try{
    const result = await chatSession.sendMessage(FINAL_PROMT);
    console.log(result.response.text());
    const tripRes=JSON.parse(result.response.text());
    setLoading(false);
    const docId=(Date.now()).toString();
const result_=await setDoc(doc(db,"UserTrips",docId),{
  userEmail:user.email,
  tripPlan:tripRes,//AI
 tripData:JSON.stringify(tripData),//user selection


})

    console.log("Added to Database");
  
}
catch(error){
    console.error("muu hadann ba  :", error )
    setLoading(false);
}



  router.push('(tabs)/mytrip')



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
      
      style={{fontSize:30 ,fontFamily:'poppins'}}>Please Wait...</Text>

<Text 
      
      style={{fontSize:20 ,fontFamily:'poppinsmedium',textAlign:'center',marginTop:10}}>We are working to generate your dream trip.</Text>
      <Image source={require('../../assets/images/earth.gif')} style={{

        width:'100%',
        height:'60%'
      }}/>


<Text 
      
      style={{fontSize:15 ,fontFamily:'poppinsmedium',marginTop:10}}>Do not go back</Text>
    </View>
  )
}