//import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (

        // <input type ="submit" value = {text} backgroundColor= {color} className="btn"/>
        <button  style={{backgroundColor:color}} className='btn'>
            {text}
         </button>
    )
}

Button.defaultProps = {
    color: "black"
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
