import React from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import { Link } from "react-router-dom";
import "./Styles.css";
    
const Example = () => {
  

  return(
      <>
        <div className="greeting">
          <h2 className="welcome_greeting">Welcome to Foodie</h2>
          <Formik
            initialValues={{ email: '',  password: '' }}
          >
              <Form>
                <Field className="field" type="email" name="email" placeholder="User name or Email" />    
                <Field className="field" name="password" placeholder="Password" />
                <Link className="forgot_password">Forgot Password?</Link>
                <button className="form-button">
                  <Link to="/" />Submit</button>
              </Form>
          </Formik>
        </div>
      </>
  )};

export default Example;


// {(values, actions) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }, 1000);
// }}