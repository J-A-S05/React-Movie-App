import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Navbar from './components/Navbar';





function App() {

  const [movies , setMovies] = useState([]);
  const [popularMovies , setPopularMovies] = useState([]);
  const [upcomingMovies , setUpcomingMovies] = useState([]);
  const [topRatedMovies , setTopRatedMovies] = useState([]);
  const [searchValue , setSearchValue] = useState("");
  // const [searchTitle , setSearchTitle] = useState("avengers")
  const [favourites , setFavourites] = useState([]);
  
  const getMovieRequest = async(searchValue) =>{
    const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=ccfc1b8509de8b240d1dcd36b6de44a4`
    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=ccfc1b8509de8b240d1dcd36b6de44a4&query=${searchValue}`
    const popular_url = `https://api.themoviedb.org/3/movie/popular?api_key=ccfc1b8509de8b240d1dcd36b6de44a4`
    const toprated_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=ccfc1b8509de8b240d1dcd36b6de44a4`
    const upcoming_url = `https://api.themoviedb.org/3/movie/upcoming?api_key=ccfc1b8509de8b240d1dcd36b6de44a4`
    
    const search_response = await fetch(search_url);
    const search_responseJSON = await search_response.json();

    const popular_response = await fetch(popular_url);
    const popular_responseJSON = await popular_response.json();

    const toprated_response = await fetch(toprated_url);
    const toprated_responseJSON = await toprated_response.json();

    const upcoming_response = await fetch(upcoming_url);
    const upcoming_responseJSON = await upcoming_response.json();
    console.log(search_responseJSON.results)
    // if(responseJSON.Search){

    //   setMovies(responseJSON.Search)
    // }

    setMovies(search_responseJSON.results);
    setPopularMovies(popular_responseJSON.results)
    setTopRatedMovies(toprated_responseJSON.results)

    setUpcomingMovies(upcoming_responseJSON.results)

  }

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('movie-app-favourites' , JSON.stringify(items))
  }

  const addFavouriteItem = (movie) =>{

    var present = false;
    for(var i = 0 ; i < favourites.length ; i++){
      if(movie === favourites[i]){
        present = true;
      }
    }
      if(present){
        const newFavList = [...favourites];
    setFavourites(newFavList);
    saveToLocalStorage(newFavList);
      }
      else{

        const newFavList = [...favourites , movie];
        setFavourites(newFavList);
        saveToLocalStorage(newFavList);
      }
  }

  const removeFavouriteItem = (item) =>{
    
    const favList = favourites.filter((movie , index) =>{
      return (item !== movie);
    })
    setFavourites(favList)
    saveToLocalStorage(favList);
  }

  useEffect(() =>{
    getMovieRequest(searchValue);
  } , [searchValue])

  useEffect(() =>{
    const favList = JSON.parse(localStorage.getItem('movie-app-favourites'));
    setFavourites(favList);
  } , [])

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center my-3">
        <Navbar searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      </div>
      <div className='container-fluid movie-app body-before' >

        <div className="row d-flex align-items-center my-2 snap">
        <MovieListHeading heading = "Movies" />
        <MovieList movies = {movies} favouritesComponent = {AddFavourites} handleFavouriteClick = {addFavouriteItem}/>
      </div>

      <div className="row d-flex align-items-center my-2 snap">
        <MovieListHeading heading = "Favourites"/>
        <MovieList movies = {favourites} favouritesComponent = {RemoveFavourites} handleFavouriteClick = {removeFavouriteItem}/>
      </div>

      

      <div className="row d-flex align-items-center my-2 snap" id='popular'>
        <MovieListHeading heading = "Popular"/>
        <MovieList movies = {popularMovies} favouritesComponent = {AddFavourites} handleFavouriteClick = {addFavouriteItem}/>
      </div>

      

      <div className="row d-flex align-items-center my-2 snap" id='upcoming'>
        <MovieListHeading heading = "Upcoming"/>
        <MovieList movies = {upcomingMovies} favouritesComponent = {AddFavourites} handleFavouriteClick = {addFavouriteItem}/>
      </div>

      

      <div className="row d-flex align-items-center my-2 snap" id='top-rated'>
        <MovieListHeading heading = "Top Rated"/>
        <MovieList movies = {topRatedMovies} favouritesComponent = {AddFavourites} handleFavouriteClick = {addFavouriteItem}/>
      </div>
      </div>

      

    </div>
  );
}

export default App;

// http://www.omdbapi.com/?s=${searchValue}&apikey=9ce3fd1a
