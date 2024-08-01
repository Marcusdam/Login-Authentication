import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate()
    const [values, setvalues] = useState({
        email: '',
        password: ''
})
 
const handleInput = (e) =>{
    setvalues(prev => ({...prev, [e.target.name]: [e.target.value]}))

}

const [errors, setErrors] = useState([])

const handleSubmit = (e)  =>{
    e.preventDefault()
    setErrors(Validation(values));
    if(errors.email === '' && errors.password === ''){

        const res = axios.post("http://localhost:8080/login", values)
        .then(res =>{
            if(res.data === "success"){
            navigate('/home')
        }else{
            alert("No record found")
        }
        })       
        .catch(err => console.log(err))
    }
}
    return (
        <React.Fragment>
            <section className='flex justify-center items-center bg-slate-500 h-screen '>
                    <div className='border-2 px-8 pt-8 shadow-lg shadow-gray-800 bg-white py-8' >
                    <h1 className='text-2xl font-bold pb-4'>Sign In</h1>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-72 space-y-2'>
                        <label className='font-bold'>Email</label>
                        <input type='text' placeholder='Enter your email' className='border-2 p-2'name='email'  onChange={handleInput}/>               
                        {errors.email && <span className='text-red-500'>{errors.email}</span>}
                        <label className='font-bold'>Password</label>
                        <input type='password' placeholder='Enter your password' className='border-2 p-2' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-red-500'>{errors.password}</span>}      

                        </div>
                        <div className='mt-4'>
                            <button className='px-4 py-2  bg-green-800  hover:bg-green-700 text-white rounded w-full'>Login</button>
                            <p className='mt-2'>You agreed with our terms and policy </p>
                            {/* <input type='checkbox' className='inline'/> */}
                            <Link to='signup'><button className='px-4 py-2 mt-2 bg-gray-300  hover:bg-gray-200 rounded w-full'>Sign Up</button></Link>

                        </div>
                          
                            
                         </form> 

                        </div>      
                
            </section>

        </React.Fragment>
    )
}

export default Login
