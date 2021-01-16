import React, { PureComponent } from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, FlatList, ActivityIndicator, Button, Alert} from 'react-native';

export class PageHeader extends PureComponent {
    constructor(props){
        super(props);
        this.subPageTitle = this.props.subPage;
    }
    render() {
        return (
            <View>
                <Text style={{fontSize:35 ,fontWeight:"bold", marginLeft:30, marginTop:20}}>MovieDb
                    <Text style={{fontSize:30 ,fontWeight:'normal',}}> { this.subPageTitle }</Text>
                </Text>
            </View>
        );
    }
}