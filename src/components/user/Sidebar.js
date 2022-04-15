import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export default function Sidebar() {
  
  return (   
        <div className="sidebar"> 
              <h4 className="d-flex fw-bolder quicksand mb-5"  style={{textDecoration: "underline"}}>
                              LIL MIO ACCOUNT
              </h4>     
              <ul>   
                  <li><Link to="../register" className="text-black text-decoration-none fs-5 mb-5">Dashboard</Link></li>
                  <li><Link to="../register" className="text-black text-decoration-none fs-5 mb-5">Ordini</Link></li>
                  <li>Lista dei  desideri</li>
                  <li>Dati di spedizione</li>
                  <li>Dati di fatturazione e dettagli account</li>
                  <li>Metodo di Pagamento</li>
                  <li>Log out</li>    
              </ul>
       </div>
       
  )
}
