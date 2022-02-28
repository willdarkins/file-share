import React, { FC } from 'react'
import { IFile } from 'libraries/types'
import { sizeInMb } from 'libraries/sizeInMb'

const RenderFile:FC<{
    file: IFile,
}> = ({file: {name, sizeInBytes, format}}) => {
  return (
    <div className='items-center w-full p-4 my-2'>
        <img src={`/images/${format}.png`} alt='specific file' className='w-14 h-14' />
        <span className='mx-2'>{name}</span>
        <span className='ml-auto'>{sizeInMb(sizeInBytes)}</span>
    </div>
  )
}

export default RenderFile