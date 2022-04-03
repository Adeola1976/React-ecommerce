import React, {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect (() => {
    // initialise material js.
    M.AutoInit();
})
  return (
    <div className="App">
       <button className="btn btn-success">my ecommerce app</button> 
    </div>
  );
}

export default App;
