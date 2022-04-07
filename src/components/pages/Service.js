import React from 'react'
import ServiceItem from './ServiceItem'

export default function Service() {
    const data = [
        { 
            "id":1,
            "name":"washing machine",
            "pic":"wm.jpg"
        },
        { 
            "id":2,
            "name":"washing machine",
            "pic":"wm.jpg"
        },
        { 
            "id":3,
            "name":"washing machine",
            "pic":"wm.jpg"
        }

    ]
  return (
    <div className="container-fluid mt-5">
             <div  className="row d-flex justify-content-center text-center">
                   {data.length!==0  && data.map(value=><ServiceItem serviceitem={value} key={value.id} />)}
             </div>
    </div>
  )
}
