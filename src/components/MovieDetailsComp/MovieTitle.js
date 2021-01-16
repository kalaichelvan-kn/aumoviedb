import React from 'react';
import { View, Text } from 'react-native';


const MovieTitle = (props) => {
    return (
        <View>
            <Text style={{fontSize:50, fontWeight:'500'}} > {props.MTitle} </Text>
        </View>
    );
}
export {MovieTitle};
