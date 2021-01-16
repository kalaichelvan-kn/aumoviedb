import React, { PureComponent } from 'react'
import { ActivityIndicator, View, Text } from 'react-native';
import { Wave } from 'react-native-spinkit';

export class Loader extends PureComponent {
    render() {
        const {isVisible} = this.props;
        console.log('loader'+isVisible);
        return (
            isVisible?<View style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:'50%'}}><ActivityIndicator size="large" color="#000" /></View>:null
        );
    }
}
