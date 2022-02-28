import RenderFile from '@components/RenderFile'
import axios from 'axios'
import { IFile } from 'libraries/types'
import { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'

const index: NextPage<{
    file: IFile
}> = ({ file: { format, name, sizeInBytes, id } }) => {
    return (
        <div>
            {!id ?
                <span>
                    File does not exist. Check URL.
                </span> : <>
                
                <img src='/images/file-download.png' alt='download' />
                <h1>Your file is ready for download</h1>
                <RenderFile file={{format,name,sizeInBytes}} />
                <button>Download</button>
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
        const { data } = await axios.get(`http://localhost:8000/files/${id}`)
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