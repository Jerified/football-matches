import Image from 'next/image'


const LeagueTable = ({data}:{data:any}) => {
    // console.log(data)

  return (
    <table className='w-full lg:w-[70%] border-collapse border-spacing-y-4 table text-white'>
        <thead className='py- '>
            <tr className='text-lg text-white font-semibold bg-[#BEF264'>
                <th className='flex justify-start'>Pos</th>
                <th className='fle justify-start pl-'>Team</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>+/-</th>
                <th>PTS</th>
            </tr>
        </thead>
        <tbody className='fle flex-co gap-'>
            {data.map((team: any, index: number) => {
                // const top = [].push(team)
                // console.log(top)
                return (
                    <tr key={team.team.id} className={`py-2 ${index < 4 ? 'bg-green-5' : ''}`} >
                        {/* <div className={` ${index < 4 ? 'bg-green-500 w-1' : ''} w-fit`}></div> */}
                        <td className=''>
                            <div className="flex gap-2">
                                <div className={`py- ${index < 4 ? 'bg-green-500 w-2 h-ful -mx-4 -py-5' : 'mx-'}`} />
                                <div className="mx-0">
                                    {team.position}
                                </div>
                            </div>
                        </td>
                        <td className=''>
                            <div className="flex items-center gap-2 py-2">
                                <Image className=' rounded-full' src={team.team.crest || ''} width={30} height={30} alt={''} />
                                    {team.team.shortName}
                            </div>
                            </td>
                        <td className='py-2 w-fit mx-auto'>{team.playedGames}</td>
                        <td className='py- mx-auto'>{team.won}</td>
                        <td className='py-2 mx-auto'>{team.draw}</td>
                        <td className='py-2 mx-auto'>{team.goalDifference}</td>
                        <td className='py-2 mx-auto'>{team.points}</td>
                    </tr>
                )
            })}
        </tbody>
      
    </table>
  )
}

export default LeagueTable