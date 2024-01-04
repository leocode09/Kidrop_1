import * as Animatable from 'react-native-animatable';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, PanResponder } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps';
import * as Permissions from 'expo-location';
import { BlurView } from '@react-native-community/blur';

import styles from './Styles/style';
import mapDarkStyle from './Components/mapDarkStyle';

// import MapViewDirections from 'react-native-maps-directions';



const markers = [
  {
    latitude: -1.691017,
    longitude: 29.263311,
  },
  {
    latitude: -1.690600,
    longitude: 29.256509,
  },
  {
    latitude: -1.695123,
    longitude: 29.258775,
  },
  {
    latitude: -1.699871,
    longitude: 29.260879,
  },
  {
    latitude: -1.697456,
    longitude: 29.249966,
  },
  {
    latitude: -1.687770,
    longitude: 29.247838,
  },
  {
    latitude: -1.682345,
    longitude: 29.250112,
  },
  {
    latitude: -1.675411,
    longitude: 29.252822,
  },
  {
    latitude: -1.674567,
    longitude: 29.255199,
  },
];

const requestLocationPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    console.log('Location permission denied');
  } else {
    console.log('Location permission granted');
  }
};


requestLocationPermission();

const MyMapComponent = () => {
  
  const [isKidsViewVisible, setIsKidsViewVisible] = useState(false);
  const kidsViewRef = useRef(null);

  const handleSwipeUp = () => {
    if (!isKidsViewVisible) {
      kidsViewRef.current.slideInUp(1000); // Slide up with animation duration of 1000 milliseconds
    } else {
      kidsViewRef.current.slideOutDown(1000); // Slide down with animation duration of 1000 milliseconds
    }
    setIsKidsViewVisible(!isKidsViewVisible);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy < -50) {
        // If the user swipes up by a significant amount (adjust as needed)
        handleSwipeUp();
      } else if (gestureState.dy > 30000) {
        // If the user swipes down by a significant amount (adjust as needed)
        handleSwipeUp();
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          customMapStyle={mapDarkStyle}
          // initialRegion={{
          //   latitude: 0.78825,
          //   longitude: 0.4324,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
        >
          {markers.map((point, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude, 
              }}
              pinColor="black"
              title="Kidrop" 
              description={`number: ${index}`}
            />
          ))}
          
          {markers.map((point, index) => (
            <Circle
              key={index}
              center={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              radius={500} 
              strokeWidth={1}
              strokeColor="rgba(0, 0, 0, 0)"
              fillColor="rgba(255, 0, 0, 0.2)"
            />
          ))}

          
          {/* <MapViewDirections
            origin={markers[0]}
            destination={markers[markers.length - 1]}
            waypoints={markers.slice(1, -1)}
            apikey={YOUR_API_KEY}
            strokeWidth={2}
            strokeColor="blue"
          /> */}

          <Polyline
            coordinates={markers}
            strokeWidth={2}
            strokeColor="red"
          />
        </MapView>

      </View>
        <Animatable.View
          ref={kidsViewRef}
          style={styles.kids}
          {...panResponder.panHandlers}
        >
        <View style={styles.kids}>
            <View style={styles.handle}></View>
            <View style={styles.list}>
            <ScrollView>
              <View style={styles.item}>
                  <Image style={styles.img} source={require('./assets/images/kid0.png')} />
                  <View style={styles.text}>
                      <Text style={styles.names}>Emily Grace Sophia</Text>
                      <Text style={styles.number}>+250798579079</Text>
                  </View>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>-12m</Text>
                    </View>
              </View>
            </ScrollView>
            </View>
        </View>
        </Animatable.View>
    </View>
  );
};

export default MyMapComponent;
