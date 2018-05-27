import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropsTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: '雨',
        subtitle: '傘忘れないで！',
        icon: 'weather-rainy'
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: '晴れ',
        subtitle: 'いい天気だよー',
        icon: 'weather-sunny'
    },
    ThunderStorm: {
        colors:["#00ECBC", "#007ADF"],
        title: '雷',
        subtitle: '木の下は危ないよ！',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: '曇り',
        subtitle: '洗濯乾かせぬ',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:["#7DE2FC", "#B9B625"],
        title: '雪',
        subtitle: '雪だるま作ろう',
        icon: 'weather-snow'
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: '霞',
        subtitle: '霞あってる？',
        icon: 'weather-pouring'
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: '霞',
        subtitle: '霞あってる？',
        icon: 'weather-hail'
    }
}

Weather = ({weatherName, temp}) => {
    console.log(weatherName);
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container} >
            <StatusBar hidden={true} />
            <View  style={styles.upper} >
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View  style={styles.lower} >
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}
export default Weather;

Weather.PropsTypes = {
    temp: PropsTypes.number.isRequired,
    weatherName: PropsTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
});