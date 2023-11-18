import React ,{useState} from 'react'
import './Reg.css'

function RegistrationForm() {
    const [formData, setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNo:''
    })
    const handleInputChange =(e)=>{
        const {name,value}=e.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData,"This is Registration Form");
    }
  return (
    <div className='form'>
        <div className='form-body'>
            <label>First Name</label>
            <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={(e)=>handleInputChange(e)}/>

            <label>Last Name</label>
            <input type='text' placeholder='First Name' name='lastName' value={formData.lastName} onChange={(e)=>handleInputChange(e)}/>

            <label>Email id</label>
            <input type='email' placeholder='Email id' name='email' value={formData.email} onChange={(e)=>handleInputChange(e)}/>

            <label>Password</label>
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={(e)=>handleInputChange(e)}/>

            <label>Number</label>
            <input type='number' placeholder='Phone No' name='phoneNo' value={formData.phoneNo} onChange={(e)=>handleInputChange(e)}/>

            <button onClick={(e)=>handleSubmit(e)} type='submit'>Register</button>
        </div>
    </div>
  )
}

export default RegistrationForm