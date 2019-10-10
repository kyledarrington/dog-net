import React from 'react'
import './style.scss'

class NavBar extends React.Component{
    items(){
        const optionArray = ['Home', 'Profile', 'Explore', 'My Account']
        var items = []
        for (var i = 0; i < optionArray.length; i++){
            var option = optionArray[i];
            items.push(<div key={i}><span>{ option }</span></div>)
        }
        return items
    }
    render(){
      return (
        <nav id="header-nav">
            <div id="header-nav-items">
                { this.items() }
            </div>
        </nav>
      )
  }
}

export default NavBar
