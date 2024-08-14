import React, { useState,useEffect, useContext } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import {CreateTripContext} from "../../context/createTripContext"
import { useNavigation, useRouter } from 'expo-router'

export default function SearchPlace() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const {tripData,setTripData}=useContext(CreateTripContext);
const router=useRouter();
    const searchPlaces = async (text) => {
        setQuery(text);

        if (text.length > 2) {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(text)}`
                );
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error(error);
            }
        } else {
            setResults([]);
        }
    };
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions(
            {
                headerShown:true,
                headerTranseparent:true,
                headerTitle:'Search'
            }
        )


        
    })
    
    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Search"
                value={query}
                onChangeText={(text) => searchPlaces(text)}
                style={{
                    height: 60,
                    borderColor: 'black',
                    borderWidth: 2,
                    paddingLeft: 10,
                    marginBottom: 20,
                 borderRadius:25,
                 fontSize:18
                }}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item.place_id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            console.log(item);
                            setQuery(item.display_name);
                            setTripData({

                                location:item.display_name
                            })
                            router.push('/create-trip/create-traveller');
                            setResults([]);
                      
                        }}
                    >
                        <Text style={{ padding: 10 }}>{item.display_name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
