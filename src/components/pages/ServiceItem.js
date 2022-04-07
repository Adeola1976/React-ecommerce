import React from 'react'
import PropTypes from 'prop-types'


function ServiceItem({serviceitem:{id,name,pic}}) {
const image = require(`../../assets/img/${pic}`);

//
  return (
     <div className="col-md-3 col-sm-6 col-xs-6 mb-5">
          <img src={image} className="img-responsive img-fluid rounded-3 mb-4"/> 
          <button className="btn waves-effect waves-light rounded-pill" type="submit" name="action">{name}
                   <i className="material-icons right">send</i>
          </button>

    </div>
  )
}

ServiceItem.propTypes = {
    serviceitem: PropTypes.object.isRequired,
}
export default ServiceItem
