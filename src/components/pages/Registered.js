import React from 'react'
import {Link} from 'react-router-dom'

export default function Registered() {
    const registered = {
        marginTop:"200px",
        marginLeft:"100px"
      }
  return (
    <div className="container">
      <div className="row justify-content-center" style={registered}>
          <h3 className="fw-bolder quicksand mb-4">GRAZIE PER LA REGISTRAZIONE!</h3>
          <div className="mb-3">
             <Link  to="../login" className="btn waves-effect waves-dark rounded-pill fst-italic" type="submit" name="action">ACCEPT LA TUO ACCOUNT
                <i className="material-icons right">send</i>
             </Link>

         </div>
      </div>
    </div>
  )
}
