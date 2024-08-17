import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from "../../context/createTripContext";

export default function SelectBudget() {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '🛩️ Select Budget',
    });
  }, []);

  const handleBudgetSelection = (budget) => {
    setSelectedBudget(budget);
  };

  const onBudgetSelectionContinue = () => {
    setTripData({ ...tripData, budget: selectedBudget });
    router.push('/create-trip/review-trip');
  };

  return (
    <View style={{ margin: 20 }}>
      <View>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: Colors.PRIMARY, marginBottom: 20 }}>
          💰 Select Your Budget
        </Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        {[
          { type: 'Cheap', emoji: '💸' },
          { type: 'Moderate', emoji: '💵' },
          { type: 'Luxury', emoji: '💎' }
        ].map(({ type, emoji }) => (
          <TouchableOpacity
            key={type}
            style={{
              padding: 20,
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor:
                selectedBudget === type ? Colors.PRIMARY : '#f9f9f9',
              borderWidth: 2,
              borderColor: selectedBudget === type ? Colors.SECONDARY : '#ddd',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={() => handleBudgetSelection(type)}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: selectedBudget === type ? Colors.WHITE : '#333',
              }}
            >
              {emoji} {type}
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
            padding: 15,
            backgroundColor: selectedBudget ? Colors.PRIMARY : '#ccc',
            borderRadius: 25,
            marginTop: 30,
            width: '60%',
          }}
          onPress={onBudgetSelectionContinue}
          disabled={!selectedBudget} 
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Continue ➡️
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
