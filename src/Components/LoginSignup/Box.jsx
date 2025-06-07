import React, { useLayoutEffect, useRef} from 'react'
import './Box.css'

export const  Box = ({action, name, email, password}) => {

    const layoutEffectRef = useRef(null);
    
    useLayoutEffect(() => {
        const bg = action === "Login" ? "rgba(0, 123, 255, 0.47)" : "rgba(255, 230, 0, 0.69)";
        const color = action === "Login" ? "rgb(255, 201, 39)" : "rgb(0, 123, 255)"  ;
        layoutEffectRef.current.style.background = bg;
        layoutEffectRef.current.style.color = color;        
    }, [action])

  return (
    <div className='textBox' ref={layoutEffectRef}>
        <h2>Thông tin vừa nhập</h2>
            {action==="Login" ? 
            
            <div className='row'>
                <label>Email: {email}</label>
                <label>Password: {password}</label>
            </div>
            :
            <div className='row'>

                <label>Username: {name}</label>
                <label>Email: {email}</label>
                <label>Password: {password}</label>
            </div>
            }
    </div>
  )
}
