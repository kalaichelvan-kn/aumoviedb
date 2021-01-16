import React, { PureComponent } from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import { MovieCard } from '../../components/MovieCard';
import { PageHeader } from '../../components/PageHeader';
import { MovieApi } from '../../services/movieapi';
import { Loader } from '../../components/Loader';
import { ErrorBox } from '../../components/ErrorBox';

export class Popular extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            'isLoading' : true,
            'isValid':true,
            'sampledata' :[],
        };
        this.pagetitle = 'Popular';
        this.movieapi = new MovieApi();   
    }

    componentDidMount(){
        this.movieapi.getPopular().then((res)=>{
            if(res.isValid){
                this.setState({
                    'sampledata':res.results,
                    'isValid':true,
                    'isLoading':false
                });
            }else{
                this.setState({
                    'isValid':false,
                    'isLoading':false
                });
            }
        });
    }

    render() {
        return (
            <SafeAreaView>
                <PageHeader subPage={this.pagetitle} />
                <Loader isVisible={this.state.isLoading} />
                <ErrorBox isVisible={!this.state.isValid} />
                <FlatList
                    data={this.state.sampledata} 
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={ ({item,index}) => ( <MovieCard movieData={item} myNav={this.props.navigation} /> )} 
                />
            </SafeAreaView>
        );
    }
}