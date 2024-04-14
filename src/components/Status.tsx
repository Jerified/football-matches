"use client"

import {useState} from 'react'
import { matchesType } from '@/types'
import LeagueTable from './LeagueTable'
import LiveTable from './LiveTable'

const Status = ({matchesList,matchesListFinished, matchesLive}:{matchesList:matchesType[], matchesListFinished:matchesType[], matchesLive:matchesType[]}) => {
    

  const [statusMatch, setStatusMatch] = useState("LIVE")

  console.log(matchesLive[0])
  console.log(matchesList[0])

  return (
    <div className="w-full">
      <div className='fixed md:relative inset-x-0 bottom-4 w-fit rounded-full bg-green-300 px-10 py-3 flex mx-auto'>

        <button onClick={() => setStatusMatch("LIVE")} className={`px-2 py-1 text-primary text-lg md:text-lg rounded-md ${statusMatch === 'LIVE' ? 'uppercase text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>Live</button>
        <button onClick={() => setStatusMatch("MATCH")} className={`px-2 py-1 text-primary text-lg md:text-lg rounded-md ${statusMatch === 'MATCH' ? 'uppercase text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>Match</button>
        <button onClick={() => setStatusMatch("FINISHED")} className={`px-2 py-1 text-primary text-lg rounded-md ${statusMatch === 'FINISHED'  ? 'uppercase text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>finished</button>
      </div>

      <div className='w-full pt-4'>
        {statusMatch === "LIVE" ? (
            matchesLive.length > 0 ? (
                matchesLive.map((data) => (
                  <div key={data.id}>
                      {/* {console.log(data?.status)} */}
                    {data?.status === "IN_PLAY" && 'PAUSED' &&
                      <LiveTable data={data} /> 
                    }
                  </div>
                ))
            ) : <p className="h-scree w-fit  flex justify-center text-white text-xl items-center bg-red-400 px-4 py-2">No Match is Live</p>
        ) : null}

        {statusMatch === "MATCH" ? (
          matchesList.map((data) => (
            <div key={data.id}>
              {data?.status === "TIMED" && (
                <LeagueTable data={data} />
              )}
            </div>
          ))
        ) : null}

        {statusMatch === "FINISHED" ? (
          matchesList.map((data) => (
            <div key={data.id}>
                {/* {console.log(data?.status)} */}
              {data?.status === "FINISHED" && (
                <LeagueTable data={data} />
              )}
            </div>
          ))
        ) : null}
        {statusMatch === "FINISHED" ? (
          matchesListFinished.map((data) => (
            <div key={data.id}>
              <LeagueTable data={data} />
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

export default Status