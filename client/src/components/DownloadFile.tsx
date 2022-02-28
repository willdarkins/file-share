import React from 'react'

const DownloadFile = ({downloadPageLink}) => {
  return (
    <div className='p-1'>
        <h1 className='my-2 text-lg font-medium'>
            Here is the DownloadFile page for now... There will be more coming...
        </h1>
        <div className='flex flex-row space-x-3'>
            <span className='break-all'>{downloadPageLink}</span>
            <img src='/images/copy.png'
            alt='copy icon'
            className='w-8 h-8 object-contain cursor-pointer'
            onClick={() => navigator.clipboard.writeText(downloadPageLink)} />
        </div>
    </div>
  )
}

export default DownloadFile