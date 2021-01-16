import React, { PureComponent } from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View, Text, StatusBar, FlatList, ActivityIndicator, Button, Image, Alert} from 'react-native';

export class MovieCard extends PureComponent {
    constructor(props){
        super(props);
        this.obj = this.props.movieData;
        // this.obj = { "adult":false,"backdrop_path":"/srYya1ZlI97Au4jUYAktDe3avyA.jpg","genre_ids":[14,28,12],"id":464052,"original_language":"en","original_title":"Wonder Woman 1984","overview":"Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.","popularity":3342.686,"poster_path":"/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg","release_date":"2020-12-16","title":"Wonder Woman 1984","video":false,"vote_average":7.2,"vote_count":2641};
        this.imgUrl = 'https://image.tmdb.org/t/p/w500'+this.obj.backdrop_path;
        // console.log(this.imgUrl+" "+this.imgUrl.toString());
        // Alert.alert(this.imgUrl);
    }

    onPress(id){
        // console.log(this.props.myNav.navigation('Details',{'Mid':id}));
        console.log('navigating:'+id.toString());
        this.props.myNav.push('Details',{'Mid':id})
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    flex:1,
                    backgroundColor:"#ECC650",
                    justifyContent:'flex-start',
                    alignItems:'center',
                    elevation:3,
                    borderRadius:5,
                    maxHeight:'76%',
                    width:220,
                    marginTop:'15%',
                    marginLeft:30,
                    }}
                onPress={()=>this.onPress(this.obj.id)}
            >
            <View>
                <Image 
                    source={{uri: this.imgUrl.toString()}}
                    style = {{ width: 200, height: '80%', borderRadius:5, justifyContent:'flex-start' }}>
                    </Image>
                <Text style={{color:'white', marginTop:5 ,margin:10, fontSize:25, maxWidth:'70%', fontWeight:'bold',alignSelf:'center'}}>{this.obj.original_title}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

// b43900ec5d26458b1d2607185deb50ba
// https://api.themoviedb.org/3/movie/upcoming?api_key=b43900ec5d26458b1d2607185deb50ba
// https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg