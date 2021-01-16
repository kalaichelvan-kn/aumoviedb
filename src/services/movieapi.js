export class MovieApi{
    constructor(){
        this.apiKey = '?api_key=b43900ec5d26458b1d2607185deb50ba';
        this.pageNo = '&page=1';
        this.baseUrl = 'https://api.themoviedb.org/3/';
        this.types = {
            "Popular" : 'popular',
            "TopRated" : 'top_rated',
            "Upcoming" : 'upcoming',
            "Movie" : 'movie/'
        }        
    }

    async getArticlesFromApi(fetchUrl){
        console.log(fetchUrl);
        try{
            let response = await fetch(fetchUrl);
            let json = await response.json();
            return json = {...json, 'isValid':true};
        }catch(error){
            console.log(error);
            return {'isValid':false};
        }
    }

    async getPopular(){
        return await this.getArticlesFromApi(this.baseUrl+this.types.Movie+this.types.Popular+this.apiKey+this.pageNo);
    }
    async getUpcoming(){
        return await this.getArticlesFromApi(this.baseUrl+this.types.Movie+this.types.Upcoming+this.apiKey+this.pageNo);
    }
    async getTopRated(){
        return await this.getArticlesFromApi(this.baseUrl+this.types.Movie+this.types.TopRated+this.apiKey+this.pageNo);
    }
    async getMovieDetails(mid){
        return await this.getArticlesFromApi(this.baseUrl+this.types.Movie+mid.toString()+this.apiKey);
    }

}