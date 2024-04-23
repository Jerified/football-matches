import { getLeagueStanding } from '@/api/matches/route'
import React from 'react'
import LeagueTable from '../../../../components/LeagueTable'


interface Params {
    params: {
        id: string
    }
}

const Tables = async ({ params }: Params) => {
    const query = params.id
    
  const data = await getLeagueStanding(query)
    console.log(data);
  return (
    <div className='w-full mx-[-1rem]'>
        <LeagueTable data={data.standings[0].table} />
    </div>
  )
}

export default Tables