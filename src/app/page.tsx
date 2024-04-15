import { getLiveMatches, getMatchesfootball, getMatchesfootballFinished, getScheduleMatches } from "@/api/matches/route"
import Status from "@/components/Status"
import LiveMatches from "@/components/LiveMatches"
import Image from "next/image"
import UpcomingMatches from "@/components/UpcomingMatches"
import News from "@/components/News"

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

  return (
    <section className=" pt-4 lg:w-[70%]">
      <div className="flex">
        <h1 className=" md:text-xl font-bold bg-[#BEF264] pl-2 pr-10 py-1 tracking-wide">Matches</h1>
        <div className=" border-b-2 border-[#BEF264] w-full"></div>
      </div>
       <div className="flex py-6 gap-6 overflow-x-scroll scrollbar-hide scroll-smooth">
            {matchesDatas.map((league: any) => {
                console.log(league)
                return (
                <div key={league.name} className="cursor-pointer  min-w-[15%] lg:min-w-[10%] ">
                    <div className="bg-black/70 p-3 rounded-[100%] h-full">
                        <Image className='object-contai rounded-ful h-full w-full' src={league?.emblem} width={80} height={80} alt={league.name} quality={100} />
                    </div>
                    {/* <p className="text-white text-xs invisibl">{league.name}</p> */}
                </div>
                )
        })}
   </div>
      <LiveMatches data={matchesLive} />
      <UpcomingMatches data={matchesScheduled} />
    </section>
  )
}
