import React from 'react';
import { View, Text} from 'react-native';

const MovieRelease = (props) => {
    let gdata = props.MRel;
    return (
        <View style={{flex:1,justifyContent:'center',alignContent:'center', marginTop:10, paddingHorizontal:5, paddingVertical:10, height:30}}>
            <Text style={{ fontSize:15 ,fontWeight:'300', paddingHorizontal:15, paddingVertical:10 , backgroundColor:'#FF5733',color:'white', borderRadius:8 }} >
                Release Date | {gdata} {'     '}
                RunTime | {props.MRun} mins</Text>
        </View>
    );
}
export {MovieRelease};