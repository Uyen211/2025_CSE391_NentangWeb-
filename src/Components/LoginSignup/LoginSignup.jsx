import React, { useLayoutEffect, useRef, useState} from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/message.png'
import password_icon from '../Assets/locked.png'
import { Box } from './Box';


export const LoginSignup = () => {

  //Luu thong tin ve giao dien hien tai
  const [action, setAction] = useState("Sign Up");
  
  //Cap nhat du lieu thoi gian thuc
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //focus
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  useLayoutEffect(() => {
    if(action === "Login"){
      
      setEmail("");
      setPassword("");

      emailRef.current.focus();
    }
    else{
      
      setName("");
      setEmail("");
      setPassword("");

      nameRef.current.focus();
    }
  }, [action])

  return (
    <div className="container1">

      <div className ='container' >

        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">

          {action === "Login" ? <div></div> :
          <div className="input">
            <img src={user_icon} alt="" />
            <input 
              type="text" 
              placeholder="Name"
              ref={nameRef}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          }

          <div className="input">
            <img src={email_icon} alt="" />
            <input 
              type="email" 
              placeholder="Email Id"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

        </div>
        {action === "Sign Up" ? <div></div> : 
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>      
        }
        <div className="submit-container">
          <div className={action==="Login"? "submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"? "submit gray":"submit"} onClick={() => {setAction("Login")}} >Login</div>
        </div>

      </div>

      <Box
        action = {action}
        name = {name}
        email = {email}
        password={password}
        
      />
    </div>
  )
}
