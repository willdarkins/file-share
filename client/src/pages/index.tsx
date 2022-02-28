import React, { useState } from "react";
import DropZoneComp from "@components/DropZoneComp";
import RenderFile from "@components/RenderFile";
import axios from "axios";
import DownloadFile from "@components/DownloadFile";

export default function Home() {
  const [file, setFile] = useState(null)
  const [formId, setFormId] = useState(null)
  const [downloadPageLink, setDownloadPageLink] = useState(null)
  const [uploadState, setUploadState] = useState<'Uploading' | 'Upload Failed' | 'Uploaded' | 'Upload'>('Upload')

  const handleUpload = async () => {
    if (uploadState === 'Uploading') return;
    setUploadState('Uploading')
    const formdata = new FormData()
    formdata.append('myFile', file)
    try {
      const { data } = await axios({
        method: 'post',
        data: formdata,
        url: '/files/upload',
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      setDownloadPageLink(data.downloadPageLink)
      setFormId(data.id)
    } catch (error) {
      console.log(error.response.data);
      setUploadState('Upload Failed')
    }
  }

  const resetComponent = () => {
    setFile(null)
    setDownloadPageLink(null)
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3x1 font-medium">Upload your files and easily share!</h1>
      <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl justify-center">
        {!downloadPageLink && <DropZoneComp setFile={setFile} />}
        {file && (
          <RenderFile file={{
            format: file.type.split('/')[1],
            name: file.name,
            sizeInBytes: file.size
          }} />
        )}
        {
          !downloadPageLink && file &&
          <button onClick={handleUpload}
            className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none cursor-pointer">
            {uploadState}
          </button>
        }

        {
          downloadPageLink && (
            <div className="p-2 text-center">
              <DownloadFile downloadPageLink={downloadPageLink} />
              {/* Email Form */}
              <button className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none cursor-pointer"
              onClick={resetComponent}
              >Upload Another File</button>
            </div>
          )}
      </div>
    </div>
  );
}
