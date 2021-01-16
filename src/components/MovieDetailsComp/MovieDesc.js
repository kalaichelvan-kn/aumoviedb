import React, { Component } from 'react';
import { View, Text } from 'react-native';

const MovieDesc = (props) => {
    return (
        <View>
            <Text style={{fontSize:15, padding:5 ,fontWeight:'200'}} >
                {props.MDesc}
            </Text>
        </View>
    );
}
export {MovieDesc};
