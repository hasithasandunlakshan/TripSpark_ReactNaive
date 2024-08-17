import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import Hotels from '../../components/Trip_Details/Hotels';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import Places from '../../components/Trip_Details/places';
export default function UserTripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });


    setTripDetails(JSON.parse(trip));
    const tripdata=JSON.parse(JSON.parse(trip).tripData);
    console.log("hiiiiiiiiii");
 console.log(tripData);
    setTripData(tripdata);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          source={require('../../assets/images/travelDetails.jpg')}
          style={{
            width: '100%',
            height: 340,
            objectFit: 'cover',
          }}
        />
      </View>

      <ScrollView
        style={{
          marginTop: -15,
          padding: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
          }}
        >
          {tripDetails.tripPlan?.["Main Location Address"]}
        </Text>
  
        <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between', fontWeight: 'bold',
            fontSize: 20,}}>
       
       <Text style={{ fontWeight: '500',
            fontSize: 15,
            }}>{moment(tripData?.startdate).format('DD MMM')} </Text>
       <Text style={{ fontWeight: '500',
            fontSize: 15,
          }}> {moment(tripData?.enddate).format('DD MMM')}</Text>
     </View>
        
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          🏨 Hotel Recommendations
        </Text>

        <ScrollView
          horizontal
          style={{ paddingBottom: 2 }}
          showsHorizontalScrollIndicator={false}
        >

          {tripDetails.tripPlan?.["Hotel options"].map((hotels, index) => (
           <TouchableOpacity>

<Hotels hotels={hotels} key={index} />

           </TouchableOpacity>
            
            
          ))}
        </ScrollView>
        <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          📍 Places to visit
        </Text>


        {tripDetails.tripPlan?.["Places to visit nearby"].map((place, index) => (
            <TouchableOpacity key={index}>
              <Places place={place}/>
            </TouchableOpacity>
          ))}

        </View>

       
      </ScrollView>
    </View>
  );
}
