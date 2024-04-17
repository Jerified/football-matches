import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full lg:w-[70%] bg-[#165D31]'>
        <Image src='/images/loading.gif' width={200} height={200} alt='' />
    </div>
  )
}

export default loading