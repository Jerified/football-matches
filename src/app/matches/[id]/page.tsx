import { getMatchesInfo } from '@/api/matches/route'
import React from 'react'
import Image from 'next/image'
import  Link  from "next/link"
import Matches from '../../../components/Matches'
import NavToggle from '../../../components/NavToggle'

interface Params {
    params: {
        id: string
    }
}
const matches = async ({ params }: Params) => {
    const query = params.id
    
  const data = await getMatchesInfo(query)
    console.log(data);
  return (
    <section className="lg:w-[70%]">
        <div className='flex flex-col justify-center items-center py-2'>
            <Image className=' mr-[-0.8rem] relative z-50 object-conta rounded-full border-gray-400' src={data.competition.emblem} width={100} height={100} alt={''} quality={100} />
            <p className='text-white font-semibold text-xl'>{data.competition.name}</p>
        </div>

        <NavToggle data={data} />

        <div className="py-4">
            <h1 className=" md:text-xl font-bold bg-[#ddffa3] pl-2 pr-10 py-1 tracking-wide w-fit">Fixtures</h1>
            <div className=" border-b-2 border-[#BEF264] w-full"></div>
        </div>
        <Matches data={data} />
    </section>
  )
}

export default matches