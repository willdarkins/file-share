import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DropZoneComp = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
  },
    [],
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false
  })

  return (
    <div className='p-4'>
      <div {...getRootProps()} className='h-80 w-full rounded-md cursor-pointer focus:outline-none' >
        <input {...getInputProps()} />
        <div>
          <img src='/images/folder.png' alt='foler' className='h-16 w-16'  />
          <p>Drag and drop your prefered files</p>
        </div>
        
      </div>

    </div>
  )
}

export default DropZoneComp