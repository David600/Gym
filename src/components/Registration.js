import {  useContext, useState } from 'react';
import Calendar from 'react-calendar'
import React from 'react';
import  MyContext from '../context';

function  Registration () {
    
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [date, onChange] = useState(new Date());   
    const [time, setTime] = useState('');
    const [message, setMessage] = useState ('');
    const {state, setState} = useContext(MyContext);
    
    const data =  [name, email, date, time, message];

   function onSubmit (e) {
     e.preventDefault();
     console.log(state);
     }

     function changeState () {
       setState({...state, data})
     }

     function onHandleClick () {
      changeState();
      window.location.assign('http://localhost:3000/second/');
       
     }
   
    return( 
      
      <div id="contacts">
       <center>
        <h3>Registration</h3>
       </center>
         <form id="form_input"  onSubmit = {onSubmit}>
         <label htmlFor="name">Name <span>*</span></label> <br/>
         <input 
         value = {name}
         onInput={ e => setName(e.target.value)} 
         type="text" 
         placeholder="Enter your name" 
         name="name" 
         id="name"/> <br/>

         <label htmlFor="email">E-mail<span>*</span></label> <br/>
         <input type="text"
         value = {email}
         onInput = { e => setEmail(e.target.value) }
         placeholder="Enter your E-mail" 
         name="email" 
         id="email"/> <br/>


        <label htmlFor="date">Date <span>*</span></label> <br/>
        <Calendar
        onChange={onChange}
        date={date}
        />
        <br/>

        <label htmlFor="time">Time <span>*</span></label> <br/>
        <input type="time" 
        placeholder="Enter time" 
        name="time" 
        id = "time"
        value = {time}
        onInput = {e => setTime(e.target.value)}
        /> 
        
        <br/>

         <label htmlFor="message">Message</label> <br/>
         <textarea 
         value = {message}
         onInput = {e => setMessage(e.target.value)}
         placeholder="Enter your message" 
         name="message" 
         id="message" ></textarea> <br/>




         <button id="btn" type = "submit" onClick = { () => onHandleClick() }
        
        
        > Submit </button>

         </form>
        
     </div>
    
        )
    }
  

export default  Registration ;
