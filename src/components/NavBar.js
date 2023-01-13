import React from 'react'

const NavBar = () => {
  return (
    <div >
        <nav class="bg-light bg-opacity-75 fixed-top navbar navbar-expand-lg ">
      <div class="container-fluid">
        <h4 class="navbar-brand" >KP</h4>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>                    
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li> 
          </ul>
          
        </div>
      </div>
    </nav> 
    </div>
  )
}

export default NavBar