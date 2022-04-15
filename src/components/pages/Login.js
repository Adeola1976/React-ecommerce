import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  const login = {
    marginTop:"100px",
    marginLeft:"100px"
  }
  const reg = {
    marginLeft:"50px"
  }
  return (
    <div className="container">
      <div className="row mr-5" style={login}>
        <div className="col-md-5 col-sm-12 col-xs-12 mb-5">
            <h3 className="fw-bolder quicksand"  style={{textDecoration: "underline"}}>
                    ACCREDI
            </h3>  
             
            <form>
              <div className="col-10">
                  <div className="input-field">
                    <input placeholder="Email" id="first_name" type="text" className="validate"/>
                  </div>

                  <div className="input-field mb-5">
                    <input placeholder="Password" id="first_name" type="password" className="validate"/>
                  </div>

                  <div className="mb-3">
                    <Link to="../dashboard" className="btn waves-effect waves-dark rounded-pill btn-block  btn-dark" type="submit" name="action">Login</Link>
                  </div>

                  <div className="">
                    <button className="btn waves-effect waves-dark rounded-pill btn-block btn-light" type="submit" name="action">Reset Password</button>
                  </div>

                  <div className="input-field">   
                    <p>     
                      <label>       
                        <input type='checkbox' className='filled-in'  checked={true} name='attention' value="value" onChange={true} /> 
                        <span>Need Attention</span>
                    </label>
                    </p>  
                 </div>
               </div>
            </form> 
         </div>{/** end of column */}

         <div className="col-md-2">
         </div>
         <div className="col-md-5 col-sm-12 col-xs-12">
            <h3 className="fw-bolder quicksand mb-5" style={reg}>
                    NON HAI UN ACCOUNT?
            </h3>  
             
             <div className="col-5  m-auto">
                <Link to="../register" className="btn waves-effect waves-light rounded-pill text-black mb-5  btn-xs" type="submit" name="action">Registration
                        <i className="material-icons right">send</i>
                </Link>       
            </div>
              
            <div className="mr-3">
              <p className="text-start mb-4">
                        To God be the glory great tins he has done so let him in the place hail his name to God be the glory, father
                        to God be the glory great tins he has done so let him in the place hail his name to God be the glory, father
                        to God be the glory great tins he has done so let him in the place hail his name to God be the glory,
              </p>  

              <p className="text-start">
                        To God be the glory great tins he has done so let him in the place hail his name to God be the glory, father
              </p>
            </div>

         </div> 
      </div>{/*end of row*/}   
    </div>
  )
} 
