import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export default function Footer() {
  return ( 
        <div className="container-12">
            <div className="row justify-content-center text-center text-white footer">       
              <div className="col-md-3 col-sm-12 mt-5 mb-5">          
                  <h6 className="quicksand mt-5">MCS PROGETTO IGIENE</h6>
                  <p>di Amore Floreana</p>
                  <p>Via Palmina Martinelli 8,</p>
                  <p>97100, Ragusa(RG), Sicilia, Italia.</p>
                  <p className="mb-5">Partia I.V.A. 01745080885</p>
               </div>   
               <div className="col-md-3  col-sm-12 mt-5 mb-5">            
                 <p className="mt-5"><Link to="./service" className="text-white text-decoration-none">Termini e Condizioni</Link></p> 
                 <p><Link to="./about" className="text-white text-decoration-none active">Reso Prodotti</Link></p>
                 <p><Link to="./service" className="text-white text-decoration-none">Privacy Policy</Link></p> 
                 <p className="mb-5"><Link to="./about" className="text-white text-decoration-none active">Cookie Policy</Link></p> 
               </div>   
               <div className="col-md-3  col-sm-12 mt-5 mb-5">           
                <p  className="mt-5"><Link to="./register" className="text-white text-decoration-none">Spedizione</Link></p>
                <p><Link to="./register" className="text-white text-decoration-none active">FAQ</Link></p>
                <p  className="mb-5"><Link to="./register" className="text-white text-decoration-none active">Contatti</Link></p>
               </div>               
             </div> {/*----end of row*/}



             <div className="row justify-content-center text-center text-black"> 
                 <div className="col-md-2 col-xs-2"></div>
                 <div className="col-md-2 col-xs-4 col-sm-3 mt-5 mb-5">
                    <button className="btn waves-effect waves-light rounded-pill mt-5 mb-5" type="submit" name="action">you say
                    <i className="material-icons right">send</i>
                    </button>
                 </div>
                  <div className="col-md-2 col-xs-4 col-sm-3 mt-5 mb-5">
                    <button className="btn waves-effect waves-light rounded-pill mt-5 mb-5" type="submit" name="action">Whatsapp
                    <i className="material-icons right">send</i>
                    </button>
                 </div>
                 <div className="col-md-2 col-xs-4 col-sm-3 mt-5 mb-5">
                    <button className="btn waves-effect waves-light rounded-pill mt-5 mb-5" type="submit" name="action">Facebook
                    <i className="material-icons right">send</i>
                    </button>
                 </div>
                 <div className="col-md-2 col-xs-4 col-sm-3 mt-5 mb-5">
                    <button className="btn waves-effect waves-light rounded-pill mt-5 mb-5" type="submit" name="action">Instagram
                    <i className="material-icons right">send</i>
                    </button>
                 </div>
                 <div className="col-md-2 col-xs-2"></div>
             </div>
             
        </div>

  )
}
