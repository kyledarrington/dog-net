import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function items(props){
    var items = []
    for (var i = 0; i < props.options.length; i++){
        var option = props.options[i];
        items.push(<div key={i}><Link to={option.path}><span>{ option.label }</span></Link></div>)
    }
    return items
}

function NavBar (props){
    return(
        <nav id="header-nav">
            <div id="header-nav-items">
                { items(props) }
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    'options' : PropTypes.arrayOf(PropTypes.object)
}

export default NavBar