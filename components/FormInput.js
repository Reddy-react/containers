import {React, useState} from 'react'
//import "./src/App.css"
import "./forminput.css"
import {Icon} from "react-icons-kit"
import {eye} from 'react-icons-kit/ionicons/eye'


const FormInput = (props) => {
  const [focused,setFocused]=useState(false)
  const {label, onChange, errorMessage,  id, ...inputProps}=props;

  const handleFocus=(e)=>{
    setFocused(true)
  }
  return (
   
    <div className="formInput">
 
        <label >{label}</label>
        
        <input {...inputProps} onChange={onChange} onBlur={handleFocus}  
        onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}/>
           
            <div></div>
         
        <span>{errorMessage}</span>
        
    </div>
  )
}

export default FormInput