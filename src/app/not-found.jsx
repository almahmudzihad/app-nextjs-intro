import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
           
            <h1 className='text-3xl font-bold'>404 Not Found</h1>
            <br></br>
            <Link href="/" className='btn'>Go Home</Link>
            
        </div>
    )
}

export default NotFound
