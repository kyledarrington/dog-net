import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class SubmissionForm extends React.Component{
    renderForm({errors, status, touched, isSubmitting}){
         return (
            <Form>
                <Field component="textarea" name="text"></Field>
                <ErrorMessage name="name" component="div" />
            </Form>
        )
    }
    render(){
        return (
            <Formik render={this.renderForm} />
        )
    }
}

export default SubmissionForm
