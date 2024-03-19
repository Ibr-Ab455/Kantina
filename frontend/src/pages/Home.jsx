// eslint-disable-next-line no-unused-vars
import React from 'react'
import { signOut } from '../redux/api/userSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home() {

 const dispatch = useDispatch();
 const navigate = useNavigate();

//  const { currentUser } = useSelector( state =>  state.user);

 const handleSignout = async () => {
  try {
  const res = await fetch('/api/user/signout', {
    method: 'POST',
  });
  const data = await res.json();

  if(!res.ok){
   console.log(data.message);
  }else {
    dispatch(signOut());
    navigate('/register')
  }
  
} catch (error) {
   console.log(error.message)
  }
 }


  return (
    <div className='w-full'>
      <div className='bg-[#191919] text-white flex justify-between h-20 p-2'>
        <h1 className='text-xl pl-10'>Kantina</h1>
       <ul className='flex space-x-4 mr-10'>
        <li  className='cursor-pointer'>Home</li>
        <li  className='cursor-pointer'>Om Oss</li>
        <li  className='cursor-pointer'>Meny</li>
        <li  className='cursor-pointer'>Kontakt</li>
       </ul>
       <div>
        <span className='cursor-pointer' onClick={handleSignout}>log out</span>
       </div>
       <div className='mr-8'>
       <FaRegUserCircle className='text-2xl'/>
       <h2></h2>
       </div>
      </div>
      {/*  */}
      <div>

      </div>
    </div>
  )
}

export default Home