

const MovieCard = (props) => {

    const Favourites = props.Favourites
    // console.log(props.movieObj)
  return (
    
     <div className='image-container m-3'>
          

          <img src = {`http://image.tmdb.org/t/p/w500${props.movieObj.poster_path}`}  alt="" />
          
          
          <div className='overlay d-flex align-items-center'>
             <Favourites movieObj = {props.movieObj}  handleFavouriteClick = {props.handleFavouriteClick} />
          </div>

</div> 
      
    
  )
}

export default MovieCard


