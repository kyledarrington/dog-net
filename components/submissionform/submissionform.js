import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import SubmissionThumb from './submissionthumb'
import './style.scss'

class SubmissionForm extends React.Component{
    renderForm({values, setFieldValue}){
         return (
            <Form>
                <Field component="textarea" rows="4" id="submission-text" name="submission-text"></Field>
                <ErrorMessage name="submission-text" component="div" />
                <div id="submission-img-container">
                    <div id="img-input-container">
                        <label for="image" id="img-input-wrapper">
                            Choose File
                            <input id="submission-img" name="image" type="file" onChange={(event) => {
                                     setFieldValue("image", event.currentTarget.files[0])
                                 }}/>
                         </label>
                    </div>
                    <SubmissionThumb file={values.image} />
                 </div>
            </Form>
        )
    }
    render(){
        return (
            <div id="submission-form-container">
                <Formik render={this.renderForm} />
            </div>
        )
    }
}

export default SubmissionForm
