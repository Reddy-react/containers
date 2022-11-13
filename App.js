import {React,useState} from 'react'
import "./App.css"
import FormInput from './components/FormInput';
import Nav from './componentsSpotify/Nav';

const App = () => {
    const[username,setUsername]=useState("")
    const[values,  setValues]=useState({
      username:"",
      email:"",
      birthday:"",
      password:"",
      confirmPassword:""

    });

    const inputs=[
      {
        id:1,
        name:"username",
        type:"text",
        palceholder:"Username",
        errorMessage:"username should be 3-16 characters",
        label:"Username",
        required:true,
        pattern:"[A-Za-z0-9]{3,16}$"
      },
      {
        id:2,
        name:"email",
        type:"email",
        palceholder:"Email",
        errorMessage:"It should be valid email address",
        label:"Email",
        required:true
      },
      {
        id:3,
        name:"birthday",
        type:"date",
        palceholder:"Birthday",
        label:"Birthday"
      },
      {
        id:4,
        name:"password",
        type:"password",
        palceholder:"Password",
        errorMessage:"password should be 10 characters with 1 letter, 1 number , 1 special character",
        label:"Password",
        pattern:`^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$`,
        required:true
      },
      {
        id:5,
        name:"confirmPassword",
        type:"password",
        palceholder:"Confirm Password",
        errorMessage:"Password doesn't match",
        label:"Confirm Password",
        pattern:values.password,
        required:true,
        
      

      }
    ]
    
    

    const handleSubmit =(e) =>{
        e.preventDefault();
        // console.log(usernameRef)
        // const data = new  FormData(e.target)
        // console.log(data)
    };

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    console.log(values)
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
         {inputs.map((input)=>(
          <FormInput  key={input.id} {...input} value={values[input.name]} onChange={onChange} required /> 
     
           ))}
          <button >Submit</button> 
     </form> 
      {/* <Nav/> */}

    </div>
   )
};

export default App