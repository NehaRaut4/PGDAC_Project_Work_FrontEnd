
import React from 'react'
import PropTypes from 'prop-types'

const Helmet = (props) => {
    document.title = 'Rent & Store Here -' + props.title;
  return <div className='w-100'>{props.children}</div>;
  
};

export default Helmet