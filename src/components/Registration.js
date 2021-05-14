import { useState } from "react";
import Calendar from "react-calendar";
import React from "react";
import { Field, formValues, reduxForm } from 'redux-form';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';

  const Registration = (props) => {
  const [date, onChange] = useState(new Date());
  

 

  function onSubmit(formValues) {
   const errors =  validate(formValues);
   console.log(errors);
    if(Object.keys(errors).length === 0){
       alert("no backend available");
    }
    console.log(formValues);
 //here sould be sending data to server
  }

  function renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  const { handleSubmit } = props;

 const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <div id = "contacts">
       <form id="form_input" onSubmit={handleSubmit(onSubmit)} className="ui form error">
       <label htmlFor="name">
          Name <span>*</span>
        </label>
        <Field
        component = {renderInput}
        name = "name"
        />
          <label htmlFor="email">
          E-mail<span>*</span>
        </label>
        <Field 
        component = {renderInput}
        name = "email"
        />
        <label htmlFor="date">
          Date <span>*</span>
        </label>{" "}
        <br />
        <Field  
        component = {Calendar}
        name = "date"
        />
        <label htmlFor="message">Message</label> <br />
        <Field
        component = {renderInput}
        name = "message"
        />
        
        <button className="ui button primary">
          Submit
        </button>
      </form>
    </div>
  );
}
const validate = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'You must enter a name ';
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email';
  }

  return errors;
};

 const formWrapped = reduxForm({
  // a unique name for the form
  form: 'registration',
  validate
})(Registration)

export default connect(
  null,
  { Registration }
) (formWrapped)