import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../validation/SignupValidation';



function Signup() {
   const [values,setValues] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
           setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    if(errors.name === "" && errors.email === "" && errors.password===""){
    
        axios.post('http://localhost:4000/signup', values)
        .then(res=>{
            navigate('/');
        })
        
        .catch(err => console.log(err))
    }
    
}

    return (

        <div className='d-flex vh-100 justify-content-center align-items-center'>
        <div className='bg-white p-3 rounder w-25'>
        <h2 className=''>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' name='name'
                className='form-control rounded-0' onChange={handleChange}/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
           
           <div className='mb-2'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' 
                className='form-control rounded-0' onChange={handleChange}/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
           </div>

           <div className='mb-4'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password' 
                className='form-control rounded-0' onChange={handleChange}></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
           </div>
           <button type="submit" className="btn btn-outline-success w-100">Sign Up</button>
           <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>            
        </form>
        </div>
        </div>
        
    )
}

export default Signup;
