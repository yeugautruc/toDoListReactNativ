import React from "react"
import { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image, Alert } from 'react-native'
import { useNavigation } from '../ultils'
import * as Location from 'expo-location'

const screenWidth = Dimensions.get('screen').width

export const LandingScreen = () => {

    const { navigate } = useNavigation()

    const [errorMsg, setErrMsg] = useState("")
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>()
    const [displayAddress, setDisplayAddress] = useState("Waiting for your current location")

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrMsg('Permission to access location is not granted')
            }
            let location: any = await Location.getCurrentPositionAsync({});
            const { coords } = location
            if (coords) {
                const { latitude, longitude } = coords;
                let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude })

                for (let item of addressResponse) {
                    setAddress(item)
                    let currentAddress = `${item.street},${item.postalCode},${item.country}`
                    setDisplayAddress(currentAddress)

                    if (currentAddress.length > 0) {
                        setTimeout(() => {
                            navigate('homeStack')
                        }, 2000)
                    }
                    return;
                }
            } else {
                // notify location is wrong
            }
        })();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.navigation} />

            <View style={styles.body}>
                <Image source={require('../images/location_icon.png')} style={styles.location_icon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>
                        Your Address
                    </Text>
                </View>

                <Text style={styles.addressText}>
                    {displayAddress}
                </Text>
            </View>

            <View style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242,1.0)'
    },
    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    location_icon: {
        width: 80,
        height: 80
    },
    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
    addressTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#7D7D7D'
    },
    addressText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4F4F4F'
    }

})