import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import { CreateTripContext } from "../../context/createTripContext";

export default function SelectDate() {
    const navigation = useNavigation();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const router = useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTranseparent: true,
            headerTitle: 'Select Date'
        });
    }, []);

    const onDateChange = (date, type) => {
        console.log(date, type);
        if (type === 'START_DATE') {
            setStartDate(date);
        } else {
            setEndDate(moment(date));
        }
    };

    const onDateSelectionContinue = () => {
        if (!startDate || !endDate) {
            ToastAndroid.show("Select start date and end date", ToastAndroid.TOP);
            return;
        }
        const diffInDays = moment(endDate).diff(moment(startDate), 'days') + 1;
        setTripData({ ...tripData, startdate: startDate, enddate: endDate, totalNumofDays: diffInDays });
        console.log(diffInDays);
    };

    return (
        <View style={{ margin: 10 }}>
            <View>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'poppinsmedium' // Use Poppins Medium instead of bold
                }}>
                    Travel Dates
                </Text>
            </View>
            <View style={{ borderWidth: 2, borderRadius: 20, marginVertical: 20 }}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection={true}
                    minDate={new Date()}
                    maxRangeDuration={5}
                    selectedDayColor='black'
                    selectedDayTextColor='#fff'
                />
            </View>

            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 12,
                        backgroundColor: Colors.PRIMARY,
                        borderRadius: 99,
                        marginTop: '10',
                        width: '50%',
                        display: 'flex'
                    }}
                    onPress={() => {
                        onDateSelectionContinue();
                        router.push('create-trip/Budget-selector');
                    }}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: "center",
                        fontSize: 15,
                        fontFamily: 'poppins' // Use Poppins for button text
                    }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
