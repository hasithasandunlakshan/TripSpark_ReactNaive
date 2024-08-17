import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { updateProfile as firebaseUpdateProfile } from "firebase/auth";
import { auth } from '../../configs/fireBaseConfig';
import { useRouter } from 'expo-router';

export default function UpdateUserProfile() {
    const [displayName, setDisplayName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [nic, setNic] = useState('');
    const [passport, setPassport] = useState('');
    const router = useRouter();

    const handleUpdateProfile = () => {
        if (auth.currentUser) {
            firebaseUpdateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: profilePic
            }).then(() => {
                console.log("Profile updated successfully!");
                // Optionally update the local state with the new values
                setDisplayName(auth.currentUser.displayName);
                setProfilePic(auth.currentUser.photoURL);
                console.log(auth.currentUser);
                // Optionally navigate back after updating
                router.back();
            }).catch((error) => {
                console.error("Error updating profile:", error);
            });
        } else {
            console.error("No user is currently signed in.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Update Profile</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter Display Name"
                value={displayName}
                onChangeText={setDisplayName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Profile Picture URL"
                value={profilePic}
                onChangeText={setProfilePic}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Country"
                value={country}
                onChangeText={setCountry}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter NIC"
                value={nic}
                onChangeText={setNic}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Passport Number"
                value={passport}
                onChangeText={setPassport}
            />
            
            <Button 
                title="Update Profile" 
                onPress={handleUpdateProfile} 
                color="#000" // Black color for the button
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        height:'100%',
        padding: 20,
        backgroundColor: '#fff', // White background
    },
    heading: {
        fontSize: 20,
        fontWeight:'800',
        marginBottom: 20,
        color: '#000', // Black color for the heading
    },
    input: {
        borderWidth: 1,
        borderColor: '#000', // Black border
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        color: '#000', // Black text color
    }
});
