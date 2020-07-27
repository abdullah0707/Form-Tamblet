import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Prompt} from "react-router-dom"; //Define properties on Tag

export default function UsersForm(props){
    // Function Error Message View of Inbut
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.number().required(),
        username: Yup.string().required(),
        website: Yup.string().required()
    });

    // Form Edit Date
    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props=>{
            return <Form>
                <Prompt when={props.dirty} message={'sure?'} />

                <label>Name : </label>
                <Field name="name" />
                <ErrorMessage name="name" /><br/>

                <label>Email : </label>
                <Field name="email" />
                <ErrorMessage name="email" /><br/>

                <label>Phone : </label>
                <Field name="phone" />
                <ErrorMessage name="phone" /><br/>

                <label>Username : </label>
                <Field name="username" />
                <ErrorMessage name="username" /><br/>

                <label>Website : </label>
                <Field name="website" />
                <ErrorMessage name="website" /><br/>

                <button type="submit">Send</button>
            </Form>
        }}
    />

}

