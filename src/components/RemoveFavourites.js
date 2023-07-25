import React from 'react'

const RemoveFavourites = (props) => {
  return (
    <div  className='d-flex align-item-center justify-content-center'>
        <button className='btn position-absolute top-0 end-0' onClick={() =>props.handleFavouriteClick(props.movieObj)}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
          </button> 
        <ul  style={{listStyle : "none" , fontSize : "16px"}}>
        <li >
          <h5>{props.movieObj.title}</h5>
          <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> : {props.movieObj.vote_average}</h5>
        </li>
        <li >
          {props.movieObj.overview.substr(0,100) + "..."}
        </li>
      </ul>
        
    </div>
  )
}

export default RemoveFavourites
