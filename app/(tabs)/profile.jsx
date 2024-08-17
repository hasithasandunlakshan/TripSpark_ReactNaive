import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { auth } from '../../configs/fireBaseConfig';
import { useRouter } from 'expo-router';
import { deleteUser, signOut } from "firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [totalTrips, setTotalTrips] = useState(0); // Dummy data, replace with actual data
  const [completedTrips, setCompletedTrips] = useState(0); // Dummy data, replace with actual data
  const router = useRouter();

  const signOutUser = () => {
    signOut(auth).then(() => {
      console.log("Logged out");
      router.push('first-page');
    }).catch((error) => {
      console.error("Error signing out:", error.message);
    });
  };

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  const handleDeleteUser = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteUser(user).then(() => {
              console.log("User Deleted");
              router.push('/auth/sign-in');
            }).catch((error) => {
              console.error("Error deleting user:", error.message);
            });
          }
        }
      ]
    );
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No user is logged in</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/sign-in')}>
          <Text style={styles.buttonText}>Sign in please</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View   style={{borderWidth:0,borderRadius:10,alignItems:'center',marginTop:10}}>
      <Image style={styles.profileImage} source={user.photoURL ? { uri: user.photoURL } : require("../../assets/images/profile.png")} />
      <Text style={styles.title}>{user.displayName || 'Add Your name'}</Text>

      </View>
      <View style={styles.formField}>
        <Text style={styles.formLabel}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={user.displayName || 'Add Your name'}
          editable={false}
        />
      </View>

      <View style={styles.formField}>
        <Text style={styles.formLabel}>Email:</Text>
        <TextInput
          style={styles.input}
          value={user.email}
          editable={false}
        />
      </View>

      <View style={styles.tripInfo}>
        <View style={styles.tripCard}>
          <Text style={styles.tripNumber}>{totalTrips}</Text>
          <Text style={styles.tripLabel}>Upcoming Trips</Text>
        </View>
        <View style={styles.tripCard}>
          <Text style={styles.tripNumber}>{completedTrips}</Text>
          <Text style={styles.tripLabel}>Completed Trips</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/userprofile/updateProfile')}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={signOutUser}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDeleteUser}>
        <Text style={[styles.buttonText, styles.deleteButtonText]}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    objectFit: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginHorizontal:10
  },
  formField: {
    width: '100%',
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  tripInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  tripCard: {
    alignItems: 'center',
  },
  tripNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  tripLabel: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 7,
    width: '70%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#FFA726',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButtonText: {
    fontWeight: 'bold',
  },
});
