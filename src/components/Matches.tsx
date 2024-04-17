import Image from 'next/image'
import React from 'react'
// import { getScheduleMatches } from "@/api/matches/route"
import {format, parseISO } from 'date-fns'


const Matches = ({data}:{data:any}) => {
    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);

        return format(date, "eee, d MMM yyyy. hh.mmaaa");
    }

    const datas = data.matches
    console.log(datas);
    

  return (
    <div className="flex flex-col gap-3">
            {datas?.map((upcoming: any) => {
                // console.log(upcoming?.awayTeam?.name && upcoming?.awayTeam?.name );
                
                return (
                    <div key={upcoming?.id} className="bg-black/80 w-full rounded-2xl p-4 flex gap-4 items-center">
                        <div className='flex '>
                            <Image className=' mr-[-0.8rem] relative z-50 object-contain rounded-full border-gray-400 bg-black/70  p-3' src={upcoming?.homeTeam?.crest || ''} width={60} height={60} alt={''} quality={100} />
                            <Image className='object-contain rounded-full border-gray-400 bg-black/70  p-3' src={upcoming?.awayTeam?.crest || ''} width={60} height={60} alt={''} quality={100} />
                        </div>
                        <div>
                            <h3 className='text-white font-[500] text-md'>{upcoming?.homeTeam?.name || '---'} VS {upcoming?.awayTeam?.name || '---'}</h3>
                            <p className='text-[#BEF264]/60 text-xs'>{formatDate(upcoming?.utcDate) || '---'}</p>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}

export default Matches