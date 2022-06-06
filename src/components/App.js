import React, { useState } from 'react'
import '../styles/App.css';


const App = () => {

  const handleSubmit = (e)=>{
  
  }

   return (
    <div id="main">
      <h1>Link Tree</h1>
     <div class="container">
          {
            
             <a class="link"
               target="_blank"
               key={index}
               href='http://www.linkdin.com' >
                     Linkdin
              </a>
            }
        <div>
           <h1>Create New Link </h1>
           <input id='link-name' placeholder='link name' />
           <input id='href-link' placeholder='link'/> 
           <button id='submit-btn' onClick={handleSubmit}>Create Link </button>
        </div>
    </div>
    </div>
  )
}; 


export default App;
