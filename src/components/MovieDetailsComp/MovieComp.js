import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const MovieComp = (props) => {
    let sgdata = props.MComp;
    let gdata = sgdata.filter(item => item.logo_path!=null);
    return (
        <View style={{marginTop:12}}>
            <Text style={{fontSize:17, padding:5 ,fontWeight:'200', backgroundColor:'#3498DB',color:'white', width:'32%', borderRadius:8}} >Productions</Text>
                <FlatList
                    data={gdata}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={ ({item,index}) => (
                        <Image source={{uri:props.burl+item.logo_path}} style={{ borderColor:'black', borderWidth:1,marginVertical:7, marginEnd:10, width:65, height:65, borderRadius:30}} /> 
                    )} 
                />
        </View>
    );
}
export {MovieComp};