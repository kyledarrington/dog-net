import React from 'react'
import SubmissionThumb from './submissionthumb'
import './style.scss'

class SubmissionForm extends React.Component{
    constructor(props){
        super(props)
        this.state={image: undefined}
    }
    render(){
        return (
            <div id="submission-form-container">
                <div id="submission-form-frame">
                    <form>
                        <div><textarea rows="4" id="submission-text" name="submission-text" placeholder="Tell us about your dog!"></textarea></div>
                        <div id="submission-img-container">
                            <div id="img-input-container">
                                <label htmlFor="image" id="img-input-wrapper">
                                    Choose File
                                    <input id="submission-img" name="image" type="file" onChange={(event) => {
                                             this.setState({image: event.currentTarget.files[0]})
                                         }}/>
                                 </label>
                            </div>
                            <SubmissionThumb file={this.state.image} />
                         </div>
                         <div id="post-submit-button-container">
                             <button id="post-submit-button" type="submit">Submit</button>
                         </div>
                    </form>
                </div>
               
            </div>
        )
    }
}

export default SubmissionForm
