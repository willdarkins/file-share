import React, { useState } from "react";
import DropZoneComp from "@components/DropZoneComp";
import RenderFile from "@components/RenderFile";

export default function Home() {
  const [file, setFile] = useState(null)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3x1 font-medium">Upload your files and easily share!</h1>
      <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl justify-center">
        <DropZoneComp setFile={setFile} />
        {file && (
          <RenderFile file={{
            format: file.type.split('/')[1],
            name: file.name,
            sizeInBytes: file.size
          }} />
        )}
        <button className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none cursor-pointer">
          Upload
        </button>
      </div>
    </div>
  );
}
