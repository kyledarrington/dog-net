import React from 'react'

class SubmissionThumb extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            imgSrc: undefined
        }
    }
    
    componentDidUpdate(newProps){
        if (!newProps.file){return}
        
        this.setState({loading:true}, () => {
            let reader = new FileReader()
            
            reader.onloadend = () => {
                this.setState({loading:false, imgSrc: reader.result})
            }
            reader.readAsDataURL(newProps.file)
        })
    }
    
    render(){
        if (!this.props.file){return null}
        else if (this.state.loading){
            return <div><p>loading...</p></div>
        }
        else{
            return <div id="submission-thumb-container"><img src={this.state.imgSrc} alt={this.props.file.name} /></div>
        }
    }
}
    
export default SubmissionThumb