import React, { PureComponent } from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, FlatList, ActivityIndicator, Button, Alert} from 'react-native';
import { PageHeader } from '../../components/PageHeader';
import { MovieApi } from '../../services/movieapi';
import { Loader } from '../../components/Loader';
import { ErrorBox } from '../../components/ErrorBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    MovieImage, MovieTitle, MovieDesc, 
    MovieGeners, MovieComp, MovieRelease,
    MovieBudget,
 } from '../../components/MovieDetailsComp';

export class MovieDetails extends PureComponent {
    constructor(props){
        super(props);
        this.Mid = this.props.route.params.Mid;
        console.log(this.Mid);
        // this.Mid = myNavigation.getParam('Mid', 464052); 
        this.state = {
            'movieId':this.Mid,
            'isLoading' : true,
            'isValid':false,
            'movieData':{},
            'imgurl':'https://image.tmdb.org/t/p/w500',
        };
        this.pagetitle = 'Movie';
        this.movieapi = new MovieApi();        
    }

    componentDidMount(){
        this.movieapi.getMovieDetails(this.Mid).then((res)=>{
            if(res.isValid){
                this.setState({
                    'movieData': res,
                    'mtitle':res.original_title,
                    'mimg':'https://image.tmdb.org/t/p/w500'+res.backdrop_path,
                },()=>{
                    this.checkdetails();
                    this.setState({'isValid':true,'isLoading':false})
                });
            }else{
                this.setState({
                    'isValid':false,
                    'isLoading':false
                });
            }
        });
    }

    checkdetails(){
        console.log("check: ",this.state.mtitle,this.state.mimg);
    }

    render() {
        return (
            <SafeAreaView>
                <PageHeader subPage={this.pagetitle}/>

                <Loader isVisible={this.state.isLoading} />
                { this.state.isValid ?
                    <ScrollView>
                    <View
                        style={{
                            flex:1,
                            justifyContent:'center',
                            marginHorizontal:'7%',
                            marginVertical:20,
                            paddingBottom:100,
                        }}>
                        <MovieImage Mval={this.state.mimg} />
                        <MovieTitle MTitle={this.state.mtitle} MRate={this.state.movieData.popularity.toString()}/>
                        <MovieDesc MDesc={this.state.movieData.overview} />
                        <MovieRelease MRel={this.state.movieData.release_date} MRun={this.state.movieData.runtime.toString()} />
                        <MovieGeners  MGeners={this.state.movieData.genres} />
                        <MovieBudget MBud={this.state.movieData.budget} MRev={this.state.movieData.revenue} />
                        <MovieComp MComp={this.state.movieData.production_companies} burl={this.state.imgurl} />
                    </View>
                    </ScrollView>: ( !this.state.isLoading ? <ErrorBox isVisible={!this.state.isValid} />:null)
                }
            </SafeAreaView>
        );
    }
}