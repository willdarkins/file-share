import React from 'react'
import { useDropzone } from 'react-dropzone'

const DropZoneComp = () => {

  const { getRootProps, getInputProps } = useDropzone({})

  return (
    <div>

      <div {...getRootProps()} className='h-80 w-full' >
        <input {...getInputProps()} />
        <p>Drag and drop your prefered files</p>
      </div>

    </div>
  )
}

export default DropZoneComp