import React from 'react'
import MovieCard from './MovieCard'


const MovieList = (props) => {

    const Favourites = props.favouritesComponent

    // const handleCardClick = () =>{
    //   console.log("card waas clicked")
    // }

  return (
    
    <div className=' d-flex justify-content-start m-1' >
      
      {props.movies.map((movie , index) =>
      
        <MovieCard movieObj = {movie} Favourites = {Favourites} handleFavouriteClick = {props.handleFavouriteClick}/>
      )}
    </div>
  )
}

export default MovieList
