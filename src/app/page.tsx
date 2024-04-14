import { getLiveMatches, getMatchesfootball, getMatchesfootballFinished, getScheduleMatches } from "@/api/matches/route"
import Status from "@/components/Status"
import LiveMatches from "@/components/LiveMatches"
import Image from "next/image"
import UpcomingMatches from "@/components/UpcomingMatches"
import News from "@/components/News"

// import { useRef } from "react"

export default async function Home() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()
  const getLive = await getLiveMatches()
  const getScheduled = await getScheduleMatches()


  const matchesDatas: any = getDatas?.competitions
  const matchesLive = getLive?.matches
  const matchesDatasFinished = getDatasFinished?.matches
  const matchesScheduled = getScheduled?.matches


  console.log(matchesScheduled);
  

  const nd = new Date()
  const dateConvert = nd.toDateString()

//   const scrollRef = useRef(null)

//   const scroll = (scrollOffset) => {
//     scrollRef.current += scrollOffset
//   }

  return (
    <section className=" pt-4 lg:w-[70%]">
      <div className="flex">
        <h1 className=" md:text-xl font-bold bg-[#BEF264] pl-2 pr-10 py-1 tracking-wide">Matches</h1>
        <div className=" border-b-2 border-[#BEF264] w-full"></div>
      </div>
       <div className="flex py-6 gap-6 overflow-x-scroll whitespace-nowrap scroll-smooth">
        {/* <div className="w-full"> */}
            {matchesDatas.map((league: any) => {
                console.log(league)
                return (
                <div key={league.name} className="cursor-pointer  min-w-[20%] lg:min-w-[30%] h-full">
                    <div className="bg-black/70 p-5 rounded-[100%]">
                        <Image className='object-contai' src={league.emblem} width={80} height={80} alt={league.name} quality={100} />
                    </div>
                    {/* <div className="rounded-[100%] border-2 border-black/50 px-4 py-2"> */}
                    {/* <Image className='object-contain rounded-full border-gray-400 bg-black/70  p-3' src={league.emblem} width={70} height={70} alt={league.name} quality={100} /> */}
                    {/* </div> */}
                    {/* <p className="text-white text-xs invisibl">{league.name}</p> */}
                </div>
                )
        })}
        {/* </div> */}
   </div>
      <LiveMatches data={matchesLive} />
      <UpcomingMatches data={matchesScheduled} />
      {/* <News /> */}
    </section>
  )
}
