import { getLiveMatches, getMatchesfootball, getMatchesfootballFinished } from "@/api/matches/route"
import Status from "@/components/Status"

export default async function Home() {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()
  const getLive = await getLiveMatches()

  const matchesDatas = getDatas?.matches
  const matchesLive = getLive?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  console.log(matchesLive);
  

  const nd = new Date()
  const dateConvert = nd.toDateString()

  return (
    <section className="pr-6 pl-20 lg:pl-[5rem] overflow-y-scroll lg:px-[24rem] md:pl-24 py-4 md:w-[600px] flex-1 ">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">MATCHES</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textPrimary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      <Status matchesList={matchesDatas} matchesLive={matchesLive} matchesListFinished={matchesDatasFinished} />
    </section>
  )
}
