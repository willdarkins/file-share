import React, { FC } from 'react'

const EmailForm:FC<{
id:string
}> = ({id}) => {
  return (
    <div>
        <h3>Email Your File Directly to Friends!</h3>
        <form className=''>
            <input className='' type="text" />
            <input className='' type="text" />
            <button className=''></button>
        </form>
    </div>
  )
}

export default EmailForm