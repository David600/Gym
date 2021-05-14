import React from "react";
import { connect } from 'react-redux';
import { formValues } from "redux-form";

const RegistrationDone = (props) => {
  return (
    <div className="registration">
      <h2 id="reg-successful"> Registration was successful!</h2>
      <div>
        Hello, {props.name}, we will send information on your email:{props.email}!
      </div> 
    </div>
  );
}


const mapStateToProps = (state) =>{
  return {
    name: state.registration.formValues.name,
    email: state.registration.formValues.email
  }
}
export default connect (mapStateToProps)(RegistrationDone);
