import { IFile } from 'libraries/types'
import React, { FC } from 'react'

const RenderFile:FC<{
    file: IFile,

}> = ({file: {name, sizeInBytes, format}}) => {
  return (
    <div>
        <img src={`/images/${format}`} alt='' />
        <span>{name}</span>
        <span>{sizeInBytes}</span>
    </div>
  )
}

export default RenderFile