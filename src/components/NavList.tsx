"use client"

import {useState} from 'react'
import { matchesType } from '@/types'
import LeagueTable from './LeagueTable'

const NavList = ({matchesList,matchesListFinished}:{matchesList:matchesType[], matchesListFinished:matchesType[]}) => {

  const [statusMatch, setStatusMatch] = useState("LIVE")

  console.log(matchesList)

  return (
    <div>
      <div className='flex space-x-4 mb-2 md:mb-4'>

        <button onClick={() => setStatusMatch("LIVE")} className={`px-2 py-1 text-primary text-lg md:text-lg rounded-md ${statusMatch === 'LIVE' ? 'capitalize text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>Live Score</button>
        <button onClick={() => setStatusMatch("MATCH")} className={`px-2 py-1 text-primary text-lg md:text-lg rounded-md ${statusMatch === 'MATCH' ? 'capitalize text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>Match</button>
        <button onClick={() => setStatusMatch("FINISHED")} className={`px-2 py-1 text-primary text-lg rounded-md ${statusMatch === 'FINISHED'  ? 'capitalize text-purple-700 underline underline-offset-2 font-semibold' : 'text-slate-500 font-regular'}`}>finished</button>
      </div>

      <div className='w-full'>
        {statusMatch === "TODAY" ? (
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

export default NavList