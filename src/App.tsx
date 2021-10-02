import React from 'react';
import Bio from './components/Bio'
import Experience from './components/Experience';
import Skills from './components/Skills';


function App() {
  return (
  <div id="app" className="container-xl">


    <div className="page">
      <div className="container-fluid">
          <div className="home">
            <div className="row">
              <div className="col-xs-12 col-md-5 col-lg-4 bg-brand p-4">
                  <Bio></Bio>
              </div>
              <div className="col p-5">
                  <Experience></Experience>
                  <Skills></Skills>
              </div>
            </div>
          </div>
      </div>
      
    </div>
    
  </div>
  );
}

export default App;
