import React, { FC, useState } from 'react'

const EmailForm:FC<{
id:string
}> = ({id}) => {
    const [ emailFrom, setEmailFrom ] = useState('');
    const [ emailTo, setEmailTo ] = useState('');
    const [ message, setMessage ] = useState(null);
  return (
    <div className='flex flex-col items-center justify-center w-full p-2 space-y-3'>
        <h3>Email Your File Directly to Friends!</h3>
        <form className='flex flex-col items-center justify-center w-full p-2 space-y-3'>
            <input className='p-1 text-white bg-gray-800 border-2 focus:outline-none' type="email" placeholder='Email From...' required onChange={e=>setEmailFrom(e.target.value)} value={emailFrom}/>
            <input className='p-1 text-white bg-gray-800 border-2 focus:outline-none' type="email" placeholder='Email To...' required onChange={e=>setEmailTo(e.target.value)} value={emailTo}/>
            <button type='submit' className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none cursor-pointer">Send</button>
        </form> 
    </div>
  )
}

export default EmailForm