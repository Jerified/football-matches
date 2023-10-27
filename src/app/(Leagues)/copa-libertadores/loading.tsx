import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='h-screen flex justify-center items-center pr-6 pl-20 lg:pl-[5rem] lg:px-[24rem] md:pl-24 py-4 md:w-[600px] flex-1'>
        <Image className='w-[6rem]' src='/images/Eclipse.svg' width={200} height={200} alt='' />
    </div>
  )
}

export default loading