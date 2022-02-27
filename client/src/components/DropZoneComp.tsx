import React, { Dispatch, FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DropZoneComp:FC<{setFile:Dispatch<any>}> = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  },
    [],
  )
  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/jpeg, image/png, audio/mpeg'
  })

  return (
    <div className='p-4 w-full'>
      <div {...getRootProps()} className='h-80 w-full rounded-md cursor-pointer focus:outline-none' > 
        <input {...getInputProps()} />
        <div className={
          'flex flex-col items-center justify-center border-2 border-dashed border-yellow-300 rounded-xl h-full space-y-3 '
          + (isDragReject === true ? 'border-red-600' : '')
          + (isDragAccept === true ? 'border-green-500' : '')
          }>
          <img src='/images/folder.png' alt='foler' className='h-16 w-16' />
          {
            isDragReject ? (<p>This application only accpets images and audio 😥</p>) :
              (
                <>
                  <p>Drag and drop your prefered files</p>
                  <p className='mt-2 text-base text-gray-300'>jpeg, png and mp3 files only</p>
                </>
              )}
        </div>
      </div>

    </div>
  )
}

export default DropZoneComp