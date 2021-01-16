import React, { PureComponent } from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, FlatList, ActivityIndicator, Button, Alert} from 'react-native';
import { MovieTitle, MovieImage } from '../../components/MovieDetailsComp';

class MDetails extends PureComponent {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        flex:1,
                        justifyContent:'center',
                        marginHorizontal:'7%',
                        marginVertical:20,
                        backgroundColor:'yellow'
                    }}>
                    <MovieImage MImageUrl={'https://image.tmdb.org/t/p/w500'+this.props.movieData.backdrop_path} />
                    <MovieTitle MTitle={this.props.movieData.original_title} />
                </View>
            </ScrollView>
        )
    };
}

export {MDetails};
