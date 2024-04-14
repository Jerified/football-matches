import Image from 'next/image'
import React from 'react'
import Link from "next/link"
// import { useFormatter } from 'next-intl'
import {format, parseISO } from 'date-fns'

const UpcomingMatches = ({data}: any) => {

    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);

        return format(date, "eee, d MMM yyyy. hh.mmaaa");
    }

    const updateArrayByCompetitionName = (arr: any, competitionName: any) => {
        const foundObjects = arr.filter((obj: any) => competitionName.includes(obj.competition.code));
        foundObjects.forEach((foundObject: any) => {
            const foundIndex = arr.findIndex((obj: any) => obj === foundObject)
            arr.splice(foundIndex, 1)
        })

        arr.unshift(...foundObjects);
    }

    const targetCompetitionName = "CL";
    updateArrayByCompetitionName(data, targetCompetitionName)
  
  return (
    <section>
        <div className='flex justify-between items-center text-white'>
            <h3 className=" pt-5 pb-3">UPCOMING MATCHES</h3>
            <Link href={"/upcoming-match"} className='text-[#BEF264] font-[500] cursor-pointer hover:text-green-600 hover:transition'>VIEW ALL</Link>
        </div>
        <div className="flex flex-col gap-3">
            {data.slice(0,2).map((upcoming: any) => {
                return (
                    <div key={upcoming.id} className="bg-black/80 w-full rounded-2xl p-4 flex gap-4 items-center">
                        <div className='flex '>
                            <Image className=' mr-[-0.8rem] relative z-50 object-contain rounded-full border-gray-400 bg-black/70  p-3 w-[4rem] h-[4rem]' src={upcoming.homeTeam.crest} width={60} height={60} alt={''} quality={100} />
                            <Image className='object-contain rounded-full border-gray-400 bg-black/70  p-3 w-[4rem] h-[4rem]' src={upcoming.awayTeam.crest} width={60} height={60} alt={''} quality={100} />
                        </div>
                        <div>
                            <h3 className='text-white font-[500] text-md'>{upcoming.homeTeam.name} VS {upcoming.awayTeam.name}</h3>
                            <p className='text-[#BEF264]/60 text-xs'>{formatDate(upcoming.utcDate)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default UpcomingMatches