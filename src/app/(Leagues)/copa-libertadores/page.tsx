
import { filterLeague } from "@/api/matches/route"
import LeagueTable from "@/components/LeagueTable"
import Link from "next/link"
import {AiOutlineArrowLeft} from 'react-icons/ai'


const CopaLibertadores = async () => {
  const getCopaLibertadores = await filterLeague('Copa Libertadores')
  return (
    <div className='pr-6 pl-20 lg:pl-[5rem] lg:px-[24rem] md:pl-24 py-4 md:w-[600px] flex-1'>
      <Link href={'/'} className="mb-5 text-2xl"><AiOutlineArrowLeft /></Link>
      {getCopaLibertadores.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default CopaLibertadores