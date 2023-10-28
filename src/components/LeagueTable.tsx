import Competition from './Competition'
import {matchesType} from '@/types'
import Matches from './Matches'

const LeagueTable = ({data}:{data:matchesType}) => {
    console.log(data)

    let matchesArray = Object.values(data)
    // // console.log(matchesArray);

    // let groupedMatches = {}

    // for (let i = 0; i < matchesArray.length; i++) {
    //     let match = matchesArray[i]

    //     console.log(match?.name);


        
    // }
    
    // let groupMatches = matchesArray.reduce((acc, match) => {
    //     let league = match
    //     console.log(league);
    //     console.log(acc);
        

    //     // if (acc[league]) {
    //     //     acc[league].push(match)
    //     // } else {
    //     //     acc[league] = [match]
    //     // }

    //     if(!acc[league]) {
    //         acc[league] = []
    //     }

    //     acc[league].push(match)
    //     console.log(acc);
        
    //     console.log(acc.undefined);
        
    //     return acc
    // }, {})

    
  return (
    <div className='py-3 px-2 md:px-3 rounded-md flex flex-col bg-white mb-2'>
      <Competition data={data} />
      <Matches data={data} />
    </div>
  )
}

export default LeagueTable