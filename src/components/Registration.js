import Calendar from "react-calendar";
import React from "react";
import { Field, reduxForm } from 'redux-form';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import { getValues } from '../actions/index'
import history from '../history';
  
function renderError({ error, touched }) {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
}


const renderInput = () => ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const InputName = renderInput();
const InputEmail = renderInput();
const InputMessage = renderInput();

const Registration = (props) => {
  //const [date, onChange] = useState(new Date());
  

 

  function onSubmit(formValues) {
   const errors =  validate(formValues);
   console.log(errors);
    if(Object.keys(errors).length === 0){
      props.getValues(formValues);
      history.push('/second');
    }
  }

 const { handleSubmit } = props;

  return (
    <div id = "contacts">
       <form id="form_input" onSubmit={handleSubmit(onSubmit)} className="ui form error">
       <label htmlFor="name">
          Name <span>*</span>
        </label>
        <Field
        component = {InputName}
        name = "name"
        />
          <label htmlFor="email">
          E-mail<span>*</span>
        </label>
        <Field 
        component = {InputEmail}
        name = "email"
        />
        <label htmlFor="date">
          Date 
        </label>{" "}
        <br />
        <Field  
        component = {Calendar}
        name = "date"
        />
        <label htmlFor="message">Message</label> <br />
        <Field
        component = {InputMessage}
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
  form: 'registration',
  validate
})(Registration)

export default connect(
  null,
  { getValues }
) (formWrapped) 