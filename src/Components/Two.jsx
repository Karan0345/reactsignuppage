import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Two() {
 
  return (
  
    
    <div>
    
    <div className='w-full h-screen bg-zinc-900 flex justify-center items-center max-md:h-screen max-md:w-full'>
    <div className=' flex justify-center items-center h-[96] w-[20vw] max-md:w-72 max-md:h-auto bg-zinc-200 rounded-2xl'>
     <form action="" method='POST' >
      <div className='flex justify-center items-center mt-4'>
        <h1 className='text-3xl font-extrabold text-red-500  uppercase '>Sign In</h1>
      </div>
      <div className='mt-4'>
        <h1 className='text-lg font-bold'>Email :</h1>
      </div>
      <div>
        <input className='w-full h-10 px-4 rounded-md outline-none' type="email" name='email' autoComplete='off' placeholder='Email' />
      </div>
      <div className='mt-2'>
        <h1 className='text-lg font-bold'>Password :</h1>
      </div>
      <div>
        <input className='w-full h-10 px-4 rounded-md outline-none' type="password" name='password' placeholder='Password'/>
      </div>
      <div className='flex justify-center items-center mt-2'>
        <button className='bg-red-500 mt-4 px-4 py-1.5 text-white rounded-lg font-bold text-lg border-r-2' >Sign In</button>
      </div>
      <div className='mt-2'>
        <h1 className='flex justify-center items-center font-semibold uppercase text-xl'>Or</h1>
        <div className='flex justify-around text-3xl mt-2'>
        <FaFacebookSquare />
        <FcGoogle />
        <FaGithub />
        </div>
      </div>
      <div className='flex -ml-4 mt-3 mb-4'>
        <h1 className='text-sm font-semibold '>If don't have an Account ?</h1>
      
      <div className='text-sm font-semibold px-2 mb-2'>
        <button className='uppercase text-md font-bold text-red-500 hover:text-red-700 duration-300'><Link to={"/"}>Sign Up</Link></button>
      </div>
      </div>
     </form>
    </div>
    </div> 

   
    </div>

  )
}

export default Two