import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyTripCard from '../../components/MyTrip/MyTripCard';
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../configs/fireBaseConfig";
import UserTripList from '../create-trip/UserTripList';
import { ActivityIndicator } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
const router=useRouter();
  const GetMyTrip = async () => {
    setLoading(true);
    setUserTrips([]);
    console.log("bdu gnn puluwn");
    const q = query(collection(db, "UserTrips"), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    const trips = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());});

    setUserTrips(trips);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      GetMyTrip();
    }
  }, [user]);

  return (


    
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: "auto",
    }}>
      {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY} />}

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: 35,
          fontWeight: 'bold'
        }}>My Trips</Text>
        <TouchableOpacity  onPress={()=>  router.push('/create-trip/search-place')}>
        <Ionicons name="add-circle" size={35} color="black" />
        </TouchableOpacity>
        
      </View>
<ScrollView showsVerticalScrollIndicator={false}>
{userTrips.length === 0 ?
        <MyTripCard /> :
        <UserTripList userTrip={userTrips} />
      }
</ScrollView>
    
    </View>
  );
};

export default MyTrip;
