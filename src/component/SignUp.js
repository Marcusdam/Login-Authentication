import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import { useState } from 'react';
import axios from 'axios'

const SignUp = () =>{
  const navigate = useNavigate()
  const [values, setvalues] = useState({
    name: '',
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
if(errors.name === '' && errors.email === '' && errors.password === ''){

  axios.post("http://localhost:8080/signup", values)
  .then(res => {
    // console.log(res.data)
    navigate('/')

  })
  .catch((err) => console.log(err))
  
}
}
  
  return (
    <React.Fragment>
        <section className='flex justify-center items-center bg-slate-500 h-screen'>
                    <div className='border-2 px-10 pt-8 shadow-lg shadow-gray-800 py-10 bg-white'>
                    <h1 className='text-2xl font-bold pb-4'>Sign Up</h1>
                    <form action='' onSubmit={handleSubmit}>
                   
                        <div className='flex flex-col w-72 space-y-1'>
                        <label className='font-bold'>User Name</label>
                        <input type='text' placeholder='Enter your name' className='border-2 p-2' name='name' onChange={handleInput}/>
                        {errors.name && <span className='text-red-500'>{errors.name}</span>}                  
                        <label className='font-bold'>Email</label>
                        <input type='text' placeholder='Enter your email' className='border-2 p-2' name='email' onChange={handleInput}/>
                        {errors.email && <span className='text-red-500'>{errors.email}</span>}                  
                        <label className='font-bold'>Password</label>
                        <input type='password' placeholder='Enter your password' className='border-2 p-2' name='password' onChange={handleInput}/> 
                        {errors.password && <span className='text-red-500'>{errors.password}</span>} 
                        </div>
                        <div className='mt-6 space-y-2'>
                        <button className='px-4 py-2 bg-green-800 hover:bg-green-700 text-white rounded w-full'>Sign Up</button>
                            <p>You agreed with our terms and policy</p>
                            <Link to='/'><button  className='px-4 py-2 mt-2 bg-gray-300 rounded w-full hover:bg-gray-200'>Login</button></Link>
                        </div>                           
                         </form> 

                        </div>      
                
            </section>
    </React.Fragment>
  )
}

export default SignUp
