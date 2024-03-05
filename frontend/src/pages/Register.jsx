// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'


function Register() {


  return (
    <div className='min-h-screen pt-20 bg-[#191919]'>
      <div className='flex flex-col  w-[90%] justify-between items-center'>
        {/*  */}
        <div className='mb-10 ml-10'>
          <h1 className='text-2xl text-white font-bold'>Opprett konto</h1>
          <h3 className='pl-4 text-white'>Eller gå til
          <Link to="/login">
          <span className='underline pl-1'>logg inn.</span>
          </Link>
          </h3>
        </div>
        {/*  */}
        <div>
            <form className='space-y-6'>
                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>Navn</label>
                    <input type='text' placeholder='' id='navn' className='w-[170%] p-2 rounded-[15px] outline  border-2 border-gray-500 text-white bg-black'/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>E-post</label>
                    <input type='text' placeholder='' id='navn' className='w-[170%] p-2 rounded-[15px] outline  border-2 border-gray-500 text-white bg-black'/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>Password</label>
                    <input type='text' placeholder='' id='navn' className='w-[170%] p-2 rounded-[15px] outline border-gray-200 text-white bg-black'/>
                </div>

                <button type='submit' className='w-[170%] p-2 rounded-[15px] outline  text-[#191919] bg-gray-100 font-medium hover:bg-gray-300 ease-in-out duration-75'>Opprett Konto</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register