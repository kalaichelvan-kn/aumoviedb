import React from 'react';
import { View, Text } from 'react-native';

function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const MovieBudget = (props) => {
    return (
        <View style={{marginTop:15}}>
            <Text style={{fontSize:19, paddingHorizontal:8, paddingVertical:6 ,fontWeight:'300', backgroundColor:'#58D68D', borderRadius:8}} >
                Budget | {currencyFormat(props.MBud)}</Text>
            {/* <Text style={{fontSize:19, marginTop:12,paddingHorizontal:8, paddingVertical:6 ,fontWeight:'300', backgroundColor:'#58D68D', borderRadius:8}} >
                Revenue | {currencyFormat(props.MRev)}</Text> */}
        </View>
    );
}
export {MovieBudget};
