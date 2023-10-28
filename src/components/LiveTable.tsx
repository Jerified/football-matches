import Competition from './Competition'
import {matchesType} from '@/types'
import LiveMatches from './Matches'

const LiveTable = ({data}:{data:matchesType}) => {
    console.log(data)

  return (
    <div className='py-3 px-2 md:px-3 rounded-md flex flex-col bg-white mb-2'>
      <Competition data={data} />
      <LiveMatches data={data} />
    </div>
  )
}

export default LiveTable