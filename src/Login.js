
import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from "./Firebase";
import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
function Login() {
    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))

    }
    const register=e=>{
        e.preventDefault();
       auth.createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           console.log(auth);
           if(auth){
               history.push('/')
           }
       })
       .catch(error=>alert(error.message))
    }
    return (
        
          <div className="login">
              <Link to = '/'>
              <img className="login__image" src="http://pngimg.com/uploads/amazon/amazon_PNG28.png"/>
              </Link>
              <div className="login__container">
              <h1>Sign-in</h1>
                  <form>
                  
                  <h5>Email</h5>
                  <input type='text'value={email} onChange={
                      e=>setEmail(e.target.value)
                      }>
                  </input>
                  
                  <h5>Password</h5>
                  <input type='password' value={password} onChange={
                      e=>setPassword(e.target.value)
                      }>
                  </input>
                 
                  <button type='submit' onClick={signIn} className='login__signinButton'>Sign in</button>
                  <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                  </form>
                
                  
                  <button type="submit" onClick={register} className='login__registerButton'>Create New User</button>

              </div>
            
        
        
        </div>
     

 
 


    )
    
      
}

export default Login
