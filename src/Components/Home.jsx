import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
 
function Home() {
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"", 
  });


  const getUserData = (event) => {
   let name =event.target.name;
   let value =event.target.value;

    setUser(user =>({...user, [name]: value}));
  };

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, password} = user;



   const res = await fetch("https://reactsignuppage-default-rtdb.firebaseio.com/reactsignuppage.json",
  {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name,
      email,
      password, 
    }),
  }
);

if(res){
  setUser({
  name:"",
  email:"",
  password:"", 
});

alert("Data Stored Successfully"); 

}

  };

  return <>
  
    <div className='w-full h-screen bg-zinc-900 flex justify-center items-center'>
    <div className=' flex justify-center items-center h-[96] w-[20vw] bg-zinc-200 rounded-2xl'>
     <form action="" method='POST' >
      <div className='flex justify-center items-center mt-4'>
        <h1 className='text-3xl uppercase text-red-500 font-extrabold'>Sign Up</h1>
      </div>
      <div className='mt-3'>
        <h1 className='text-lg font-bold'>User Name :</h1>
      </div>
      <div className=''>
        <input className='w-full h-10 px-4 rounded-md outline-none' type="text" name='name'  placeholder='Enter Your Name' value={user.name} onChange={getUserData}/>
      </div>
      <div className='mt-2'>
        <h1 className='text-lg font-bold'>Email :</h1>
      </div>
      <div>
        <input className='w-full h-10 px-4 rounded-md outline-none' type="email" name='email' autoComplete='off' required placeholder='Email' value={user.email} onChange={getUserData}/>
      </div>
      <div className='mt-2'>
        <h1 className='text-lg font-bold'>Password :</h1>
      </div>
      <div>
        <input className='w-full h-10 px-4 rounded-md outline-none' type="password" name='password' placeholder='Password' value={user.password} onChange={getUserData} required/>
      </div>
      <div className='flex justify-center items-center mt-2'>
        <button className='bg-red-500 mt-4 px-4 py-1.5 text-white rounded-lg font-bold text-lg border-r-2' onClick={postData} >Sign Up</button>
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
        <h1 className='text-sm font-semibold '>Already have an Account?</h1>
      
      <div className='text-sm font-semibold px-2 mb-2'>
        <button className='uppercase text-md font-bold text-red-500 hover:text-red-700 duration-300'><Link to={"/Two"}>Sign In</Link></button>
      </div>
      </div>
     </form>
    </div>
    </div>
  </>
  
}

export default Home