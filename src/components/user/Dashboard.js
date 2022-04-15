import React from 'react'
import Sidebar from './Sidebar'
import '../../App.css'

export default function Dashboard() {

  return (
    <div className="container">
       <div className="row">
         <div className="col-md-3 col-sm-5 col-xs-5">
            <Sidebar/>
         </div>
          
         <div className="col-md-1 col-sm-1 col-xs-1">
         </div>
         <div className="col-md-7 col-sm-6 col-xs-6 mt-5">
           <div class="row">
              <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}

                <div className="col-md-1 col-sm-1 col-xs-1"> </div>

                <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}

                <div className="col-md-1 col-sm-1 col-xs-1"> </div>

                <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}
          </div>
           
          <div class="row">
              <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}

                <div className="col-md-1 col-sm-1 col-xs-1"> </div>

                <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}

                <div className="col-md-1 col-sm-1 col-xs-1"> </div>

                <div className="col-md-3 col-sm-3 col-xs-5">
                  <div class="card-panel h4 box rounded-3">
                    <span class="black-text text-center">I am </span>
                  </div>
                </div>{/*----end of column 3*/}
          </div>


         </div>
         
       </div>
    </div>
  
  )
}
