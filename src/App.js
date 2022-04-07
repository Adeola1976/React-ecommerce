import React, {useEffect} from 'react';
import './App.css';
import Errorboundary from './components/utility/Errorboundary'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Service from './components/pages/Service'
import About from './components/pages/About'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  useEffect (() => {
    // initialise material js.
    M.AutoInit();
})
  return (
             <Errorboundary>
              
                   <div style={{backgroundColor:"#e9ecef"}}>
                   <Router>
                      <Navbar/>
                      <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/service" element={<Service/>} />
                        <Route path="/about" element={<About/>} />
                      </Routes>
                      <Footer/> 
                    </Router>
                   </div>
             </Errorboundary>

  );
}

export default App;
