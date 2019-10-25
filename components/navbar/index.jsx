import React from 'react'
import './style.scss'
import NavBar from './navbar';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class NavBarContainer extends React.Component{
    render(){
        console.log(this.props)
        const options = [
            {label : 'Home', path : '/'}, 
            {label : 'Profile', path: '/profile/' + this.props.user.id}, 
            {label : 'Explore', path: '/'}, 
            {label : 'My Account', path:  '/'}
        ]
        return (
            <NavBar options={options} />
        )
    }
}

NavBarContainer.propTypes = {
    user : PropTypes.object
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(NavBarContainer)
