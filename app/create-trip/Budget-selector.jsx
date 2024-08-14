import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from "../../context/createTripContext"
export default function SelectBudget() {
  const router=useRouter();
  const navigation = useNavigation();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const {tripData,setTripData}=useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTranseparent: true,
      headerTitle: 'Select Budget',
    });
  }, []);

  const handleBudgetSelection = (budget) => {
    console.log(budget)
    setSelectedBudget(budget);
  };

  const onBudgetSelectionContinue = () => {
    console.log(`Selected Budget: ${selectedBudget}`);
    setTripData({...tripData,budget:selectedBudget})
    // Add navigation or any other functionality here
  };

  return (
    <View style={{ margin: 10 }}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: '800' }}>
          Select Your Budget
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        {['Cheap', 'Moderate', 'Luxury'].map((budget) => (
          <TouchableOpacity
            key={budget}
            style={{
              padding: 15,
              marginVertical: 10,
              borderRadius: 10,
              backgroundColor:
                selectedBudget === budget ? Colors.PRIMARY : '#f0f0f0',
              borderWidth: 2,
              borderColor: selectedBudget === budget ? Colors.SECONDARY : '#ccc',
              alignItems: 'center',
            }}
            onPress={() => handleBudgetSelection(budget)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: selectedBudget === budget ? Colors.WHITE : '#000',
              }}
            >
              {budget}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            marginTop: 20,
            width: '50%',
          }}
          onPress={()=>{onBudgetSelectionContinue();
            router.push('/create-trip/review-trip');
          }}
          disabled={!selectedBudget} // Disable button if no budget is selected
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '800',
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
