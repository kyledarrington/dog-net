import React from 'react'
import './style.scss'

class NavBar extends React.Component{
    items(){
        const optionArray = ['Home', 'Profile', 'Explore', 'My Account']
        var items = []
        for (var i = 0; i < optionArray.length; i++){
            var option = optionArray[i];
            items.push(<li key={i}>{ option }</li>)
        }
        return items
    }
    render(){
      return (
        <nav id="header-nav">
            <ul id="header-nav-items">
                { this.items() }
            </ul>
        </nav>
      )
  }
}

export default NavBar
