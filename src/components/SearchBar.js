import React from 'react'

const SearchBar = (props) => {
  // const handleClick = (event) =>{
  //   props.setSearchTitle(event.target.value);
  //   props.setSearchValue("");
  // }
  return (
    <div className='col col-sm-4'>
        <form action="">
      <input className='form-control' type="text" name="" id="" placeholder='type to search' value={props.searchValue} onChange={(event) =>{props.setSearchValue(event.target.value)}}/>
      {/* <button className='btn btn-primary' onClick={handleClick}>Search</button> */}
        </form>
    </div>
  )
}

export default SearchBar
