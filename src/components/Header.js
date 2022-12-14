//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showAdd}) => {
    return (
        <header className='header' >
            <h1>{title}</h1>
            <Button 
                color={showAdd? "red": "green"} 
                text={showAdd ? "Close" : "Add"} 
                onClick={onAdd}/>
         </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker", 
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// syntax for embeded styling
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// }
// then call it in the desired tag with 
// style={headingStyle}

export default Header
