import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Image src='/images/Eclipse.svg' width={200} height={200} alt='' />
    </div>
  )
}

export default loading