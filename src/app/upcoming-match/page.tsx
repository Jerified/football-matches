import Image from 'next/image'
import React from 'react'
import { getScheduleMatches } from "@/api/matches/route"

import {format, parseISO } from 'date-fns'

const UpcomingMatches = async () => {
  const getScheduled = await getScheduleMatches()

  const data = getScheduled?.matches

    const formatDate = (dateString: string) => {
        const date = parseISO(dateString);

        return format(date, "eee, d MMM yyyy. hh.mmaaa");
    }

    const updateArrayByCompetitionName = (arr: any, competitionName: any) => {
        const foundObjects = arr?.filter((obj: any) => competitionName.includes(obj.competition.code));
        foundObjects.forEach((foundObject: any) => {
            const foundIndex = arr.findIndex((obj: any) => obj === foundObject)
            arr.splice(foundIndex, 1)
        })

        arr.unshift(...foundObjects);
    }

    const targetCompetitionName = "CL";
    updateArrayByCompetitionName(data, targetCompetitionName)
  
  return (
    <section className='lg:w-[70%]'>
        <div className='flex justify-between items-center text-xl text-[#BEF264]'>
            <h3 className=" pt-5 pb-3">UPCOMING MATCHES</h3>
        </div>
        <div className="flex flex-col gap-3">
            {data.map((upcoming: any) => {
                return (
                    <div key={upcoming.id} className="bg-black/80 w-full rounded-2xl p-4 flex gap-4 items-center">
                        <div className='flex '>
                            <Image className=' mr-[-0.8rem] relative z-50 object-contain rounded-full border-gray-400 bg-black/70  p-3' src={upcoming.homeTeam.crest} width={60} height={60} alt={''} quality={100} />
                            <Image className='object-contain rounded-full border-gray-400 bg-black/70  p-3' src={upcoming.awayTeam.crest} width={60} height={60} alt={''} quality={100} />
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