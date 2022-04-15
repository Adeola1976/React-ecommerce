import React,{useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../../App.css'
import Logo from '../../assets/img/icon.png'



const  Navbar  = ({icon}) =>  {

    
    const authLinks =
     <>
        <li><a><i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span></a></li>            
     </>

    const guestLinks =   
                      <> 
                        <Link to="./register" className="text-black text-decoration-none">Register</Link> 
                
                        <Link to="./register" className="text-black text-decoration-none">Login</Link>           
                      </>
                      
    return (
         
           <div className="navbar navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><img src={Logo}/></Link>
                    <div className="d-flex text-black text-decoration-none">
                    <Link to="./" className="text-black text-decoration-none active">HOME</Link>                
                    <Link to="./service" className="text-black text-decoration-none">SERVIZI</Link> 
                    <Link to="./about" className="text-black text-decoration-none active">CHI-SIAMO</Link> 
                    <Link to="./mepa" className="text-black text-decoration-none active">MEPA</Link>                
                    <Link to="./contact" className="text-black text-decoration-none">CONTATTI</Link> 
                    <Link to="./login" className="text-black text-decoration-none active">ACCREDI/REGISTRATI</Link>                
                    <i className="material-icons grey-text">favorite_border</i>
                    <i className="material-icons grey-text">shopping_cart</i>
                    </div>
                </div>  
        </div>
    )
}

Navbar.propTypes  = {
    icon:PropTypes.string.isRequired,
}


Navbar.defaultProps = {
    title:"Contact Keeper",
    icon:'assets/img/icon.png',
}

export default Navbar
