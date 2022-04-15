import React from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
  const reg = {
    marginTop:"100px",
    marginLeft:"100px"
  }
  return (
    <div className="container">
      <div className="row mr-5" style={reg}>
        <div className="col-md-5 col-sm-12 col-xs-12 mb-5">
            <h3 className="fw-bolder quicksand"  style={{textDecoration: "underline"}}>
                    REGISTRATI
            </h3>  
             
           <form>     
             <div className="col-10">
                <div className="input-field">
                  <input placeholder="Name" id="name" type="text" className="validate"/>
                </div>

                <div className="input-field">
                  <input placeholder="Surname" id="surname" type="text" className="validate"/>
                </div>

                <div className="input-field">
                  <input placeholder="Email" id="email" type="text" className="validate"/>
                </div>

                <div className="input-field">
                  <input placeholder="Password" id="password" type="password" className="validate"/>
                </div>

                <div className="input-field mb-5">
                  <input placeholder="Confirm Password" id="password" type="password" className="validate"/>
                </div>

                <div className="input-field mb-3">   
                      <p>     
                        <label>       
                          <input type='checkbox' className='filled-in'  checked={true} name='attention' value="value" onChange={true} /> 
                          <span>Accept Privacy</span>
                      </label>
                      </p>  
                </div>

                <div class="mb-3">
                  <Link to="../registered" className="btn waves-effect waves-dark rounded-pill btn-block  btn-dark mb-3" type="submit" name="action">Registation</Link>
                  <button className="btn waves-effect waves-dark rounded-pill btn-block btn-light" type="submit" name="action">Reset Password</button>
                </div>
               </div>
            </form> 
         </div>{/** end of column */}
      </div>{/*end of row*/}   
    </div>
  )
}
