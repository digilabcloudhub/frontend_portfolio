import React from 'react'
import html5 from './images/HTML5_Logo_128.png'
import css3 from './images/CSS3_logo_and_wordmark.svg.png'
import jscript from './images/128px-JavaScript-logo.png'
import reacti from './images/img_react.jpg'
import github from './images/GitHub_Logo1.png'


const Section = () => {
  return (
    
          <div class="container-fluid text-center" >
    <div class="row">
      <section id="home">
        <div class="container-fluid">
          <div class="row">
              <div class="col-md-12 col-lg-12 text-black">
                  <h1 >Krishnapriya</h1>
                  <div className='col-lg-5 offset-lg-4'>
                    <h4 className='text-white'>I'm a Front End Developer with experience in buiding responsive websites.</h4>
                    </div>
              </div>
          </div>
      
        </div>
      </section>
     
      <section id="about">
        
          <div className="row ">
             
                  <h2 class="text-center">About</h2>
                  <div class="row ">
                    <div class="col-md-2 offset-md-1">
                      <img src={html5} alt="HTML5 logo"/>
                       <h4>HTML5</h4>
                    </div>
                    <div class="col-md-2">
                         <img src={css3} height={130} alt="CSS3 Logo"/>
                      <h4>CSS3</h4></div>
                    <div class="col-md-2">
                    <img src={jscript} alt="Javascript Logo"/>
                       <h4>Javascript</h4>
                    </div>
                    <div class="col-md-2">
                    <img src={reacti} alt="React Logo"/>
                       <h4>React</h4>
                    </div>
                    <div className='col-md-2'>
                        <img src={github} alt="GitHub Logo"/>
                    </div>
          </div>
          </div>
      
        
      </section>
     

     
      <section id="projects">
        <div class="container-fluid">
          <div class="row ">     
                  <h1 className="text-white">Projects</h1>
                  
                

                    <div class="col-3 offset-lg-1">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Notes App</h5>
                          <p class="card-text">Create, Delete Notes using ReactJS</p>
                          <a href="https://digilabcloudhub.github.io/react-notes/" rel="noopener noreferrer" target="_blank"class="btn btn-primary">GitHub link </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">ToDo App</h5>
                          <p class="card-text">Create, Delete Notes using ReactJS</p>
                          <a href="https://digilabcloudhub.github.io/react-todo-app/" rel="noopener noreferrer" target="_blank" class="btn btn-primary">GitHub link </a>
                        </div>
                      </div>
                    </div>
                  
                   
                  <div class="col-3">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Tic Tac  App</h5>
                        <p class="card-text">Create, Delete Notes using ReactJS</p>
                        <a href="https://digilabcloudhub.github.io/react-tic-tac-toe/" rel="noopener noreferrer" target="_blank" class="btn btn-primary">GitHub link </a>
                      </div>
                    </div>
                  </div>
                 
                  
               
                
              
          </div>
      
        </div>
      </section>
      

      <section id="contact">
        <div class="container-fluid">
          <div class="row ">
              <div class="col-md-12 col-lg-12">
                  <h2 class="text-center">Contact</h2>
                  You can connect with me on linked in 
                  <a href="https://www.linkedin.com/in/krishna-priya-b7a598260/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              </div>
          </div>
      
        </div>
      </section>
    </div>

    
  </div>
    

    
  )
}

export default Section