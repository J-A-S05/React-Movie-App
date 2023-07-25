import React from 'react'
import SearchBar from './SearchBar'
const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand link-danger" href="#"><h3>Eddie's Movie DataBase</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#details">
  Popular
</button>
        </li> */}
        <li class="nav-item">
          <a class="nav-link  link-danger" href="#popular">Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  link-danger" href="#upcoming">Upcoming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  link-danger" href="#top-rated">Top Rated</a>
        </li>
        </ul>
        <SearchBar searchValue = {props.searchValue} setSearchValue = {props.setSearchValue}/>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
