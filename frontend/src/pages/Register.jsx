// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function Register() {


  const navigate = useNavigate()

  const [formDate, setFormDate] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
   setFormDate({ ...formDate, [e.target.id]: e.target.value.trim() });
  }

  

  const handleSubmit = async (e) => {
   e.preventDefault();

   if(!formDate.fullname || !formDate.email || !formDate.password){
    return setErrorMessage('er ikke gyldig');
   }

   try {
    setErrorMessage(null)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formDate)
    })

    const data = await res.json();

    if(data.success === false){
     return setErrorMessage(data.message)
    }

    if(res.ok) {
      navigate("/login")
    }
   } 
   catch (error) {
    console.log(error)
   }
  }

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
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>Navn</label>
                    <input type='text' placeholder='' id='fullname' className='w-[170%] p-2 rounded-[15px] outline  border-2 border-gray-500 text-white bg-black' onChange={handleChange}/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>E-post</label>
                    <input type='email' placeholder='' id='email' className='w-[170%] p-2 rounded-[15px] outline  border-2 border-gray-500 text-white bg-black' onChange={handleChange}/>
                </div>

                <div className='flex flex-col space-y-2'>
                    <label className='text-xl text-white'>Password</label>
                    <input type='password' placeholder='******' id='password' className='w-[170%] p-2 rounded-[15px] outline border-gray-200 text-white bg-black' onChange={handleChange}/>
                </div>

                <button type='submit' className='w-[170%] p-2 rounded-[15px] outline  text-[#191919] bg-gray-100 font-medium hover:bg-gray-300 ease-in-out duration-75'>Opprett Konto</button>
            </form>

            {
            errorMessage && (
              <h3 className='mt-5 bg-red-300 rounded p-2 w-[170%]'>{errorMessage}</h3>
          
        )
      }
        </div>
      </div>
    </div>
  )
}

export default Register