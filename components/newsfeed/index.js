import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Newsfeed from './newsfeed.js'
import './style.scss'

class NewsfeedContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount(){
        console.log('mounted');
        if (!this.props.user.token) return
        let queriedPosts = (await axios.get('http://localhost:8081/feed?page=1&token=' + user.token)).data;
        if (queriedPosts){
            this.setState({posts: queriedPosts})
        }
    }
    render(){
        return <Newsfeed posts={this.state.posts} />
    }
}
    
const mapStateToProps = state => ({
    user: state.user
})    
export default connect(mapStateToProps)(NewsfeedContainer)
