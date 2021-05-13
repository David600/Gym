import { useContext, useState } from "react";
import Calendar from "react-calendar";
import React from "react";
import MyContext from "../context";
import validator from 'validator'

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const { state, setState } = useContext(MyContext);
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState( "Email can't be empty!");
  const [nameDirty, setNameDirty] = useState (false);
  const [nameError, setNameError] = useState( "Name can't be empty!");

  const data = [name, email, date, time, message];

  function onSubmit(e) {
    e.preventDefault();
    //here sould be sending data to server
  }

  function changeState() {
    setState({ ...state, data });
    //adding data to state
  }

  function onHandleClick() {
    changeState();
    alert("no backend available");
    //moving on second page
  }

  function  blurHandler(e) {
    switch(e.target.name){
      case 'name': 
      setNameDirty(true)
      break
      case 'email': 
      setEmailDirty(true)
      break
    }
  }
  function emailHandler(e) {
    setEmail(e.target.value)
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
    
  }

  return (
    <div id="contacts">
      <center>
        <h3>Registration</h3>
      </center>
      <form id="form_input" onSubmit={onSubmit}>
        <label htmlFor="name">
          Name <span>*</span>
        </label>{" "}
        <br />
        {(nameDirty && nameError) && <div style = {{color: "red"}}>{nameError}</div>}
        <input
          value={name}
          onBlur = {(e) =>  blurHandler(e)}
          onInput={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
        />{" "}
        <br />
        <label htmlFor="email">
          E-mail<span>*</span>
        </label>{" "}
        <br />
        {(emailDirty && emailError) && <div style = {{color: "red"}}>{emailError}</div>}
        <input
          type="email"
          value={email}
          onBlur = {(e) =>  blurHandler(e)}
          onInput= {(e) => emailHandler(e)}

          placeholder="Enter your E-mail"
          name="email"
          id="email"
        />{" "}
        <br />
        <label htmlFor="date">
          Date <span>*</span>
        </label>{" "}
        <br />
        
        <Calendar onChange={onChange} date={date} />
        <br />
        <label htmlFor="time">
          Time <span>*</span>
        </label>{" "}
        <br />
        <input
          type="time"
          placeholder="Enter time"
          name="time"
          id="time"
          value={time}
          onInput={(e) => setTime(e.target.value)}
        />
        <br />
        <label htmlFor="message">Message</label> <br />
        <textarea
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          name="message"
          id="message"
        ></textarea>{" "}
        <br />
        <button id="btn" type="submit" onClick={() => onHandleClick()}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default Registration;
