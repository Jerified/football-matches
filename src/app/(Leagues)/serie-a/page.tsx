
// import { filterLeague } from '@/api/matches/route'
// import Link from "next/link"
// import {AiOutlineArrowLeft} from 'react-icons/ai'
// import LeagueTable from '@/components/LeagueTable'

// const SerieA= async () => {
//   const getSerieA= await filterLeague('Serie A')
//   return (
//     <div className='pr-6 pl-20 lg:pl-[5rem] lg:px-[24rem] md:pl-24 py-4 md:w-[600px] flex-1'>
//       <Link href={'/'} className="mb-5 text-2xl"><AiOutlineArrowLeft /></Link>
//       {getSerieA.map((data) => (
//         <div key={data.id}>
//           <LeagueTable data={data} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default SerieA