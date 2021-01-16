import React, { PureComponent } from 'react'
import { View, Text } from 'react-native';

export class ErrorBox extends PureComponent {
    render() {
        const {isVisible} = this.props;
        console.log('loader'+isVisible);
        return (
            isVisible?<View 
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignContent:'center',
                    marginTop:'50%',
                    minWidth:'80%',
                    height:'5%',
                }}>
                <Text style={{fontSize:20, color:'red',fontWeight:'bold',alignSelf:'center'}}>Some Error Occured!!!</Text>
            </View>:null
        );
    }
}