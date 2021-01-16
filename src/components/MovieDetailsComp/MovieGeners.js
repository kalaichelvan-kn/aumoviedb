import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MovieGeners = (props) => {
    let gdata = props.MGeners;
    return (
        <View style={{marginTop:15}}>
            <Text style={{fontSize:19, paddingHorizontal:8, paddingVertical:6 ,fontWeight:'200', backgroundColor:'#F4D03F', maxWidth:110, borderRadius:8}} >Geners</Text>
                <FlatList
                    data={gdata} 
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={ ({item,index}) => ( <Text style={{ fontSize:17, padding:5, fontWeight:'200'}}>{' '+item.name} </Text> )} 
                />
        </View>
    );
}
export {MovieGeners};
