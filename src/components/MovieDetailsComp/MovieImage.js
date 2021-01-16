import React from 'react'
import { View, Image } from 'react-native'

function MovieImage(props){
    return (<View style={{ width:'100%', height:200, borderRadius:6, elevation:1, }}>
        <Image source={{uri:props.Mval}} 
        style = {{ width: '100%', height: '100%', borderRadius:5, justifyContent:'flex-start' }}
        />
    </View> );
}
export {MovieImage};
