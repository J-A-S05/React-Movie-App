
import React , {useState} from 'react'


const AddFavourites = (props) => {
  const [show, setShow]=useState(false);

  const handleShow=()=>{
    setShow(true);
  }
  const handleClose=()=>{
    setShow(false);
  }
  return (
    <div className='d-flex align-items-center justify-content-start'>

      <button type='button' className='btn btn-link position-absolute top-0 end-0'data-bs-toggle="modal" data-bs-target="#exampleModal">
          
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
  </button>
    
  <button className='btn btn-link position-absolute top-0 end-1' onClick={() =>props.handleFavouriteClick(props.movieObj)}>
          
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
</svg>
      </button>

      <ul style={{listStyle : "none" , fontSize : "16px"}}>
        <li>
          <h5>{props.movieObj.title}</h5>
          <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> : {props.movieObj.vote_average}</h5>
        </li>
        <li>
          {props.movieObj.overview.substr(0,100) + "..."}
        </li>
        
      </ul>
    </div>
  )
}

export default AddFavourites
