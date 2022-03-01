import React from 'react'
import RenderFile from '@components/RenderFile'
import axios from 'axios'
import { IFile } from 'libraries/types'
import { GetServerSidePropsContext, NextPage } from 'next'
import fileDownload from 'js-file-download'

const index: NextPage<{
    file: IFile
}> = ({ file: { format, name, sizeInBytes, id } }) => {

const handleDownload = async() => {
    const { data } = await axios.get(`/download/${id}`, {
        responseType: 'blob',
    });
    fileDownload(data, name)
}

    return (
        <div className='flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96'>
            {!id ?
                <span>
                    File does not exist. Check URL.
                </span> : <>
                <img src='/images/file-download.png' alt='download' className='w-16 h-16 '/>
                <h1 className='text-xl '>Your file is ready for download</h1>
                <div><RenderFile file={{format,name,sizeInBytes}} /></div>
                <button onClick={handleDownload} className='w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none cursor-pointer'>Download</button>
                </>
        }
        </div>
    )
}

export default index

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query
    let file;
    try {
        const { data } = await axios.get(`${process.env.API_BASE_ENDPOINT}download/${id}`)
        file = data
    } catch (error) {
        console.log(error.response.data);
        file = {}
    }
    return {
        props: {
            file
        }
    }
}