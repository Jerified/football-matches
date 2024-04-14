import Image from 'next/image'
import { matchesType } from '@/types';
import {format, parseISO, differenceInMinutes } from 'date-fns'


const Matches = ({ data }: { data: any }) => {
    console.log(data)
    // const getDate = new Date(data?.utcDate).toLocaleTimeString('en-US', {
    //     hour: '2-digit',
    //     minute: '2-digit',
    // });
    const formatDate = (dateString: string) => {
        const date: any = parseISO(dateString);
        console.log(date)

        const currentTime: any = new Date()
        const elapsedMinutes = Math.floor((currentTime - date) / 60000)

        const minutes = Math.floor(elapsedMinutes)

        const seconds =  Math.floor((elapsedMinutes % 1) * 60)

        const formattedDate = `${minutes.toString().padStart(2,'0')}.${seconds.toString().padStart(2,'0')}`
        // differenceInMinutes(new Date(), date)
        return formattedDate
    }

    return (
        <section className="">
            <h3 className="text-white pt-5 pb-3">LIVE MATCHES</h3>
            <div className='flex gap-6 w-full overflow-x-auto'>
                {/* {data.length !== 0 ? */}
                    {
                        data.map((live: any) => {
                            return (
                                <div key={live.area.id} className='bg-black/80 rounded-2xl min-w-[50%] lg:min-w-[30%] flex relative overflow-hidden'>
                                    <div className="flex flex-1 pt-6 pb-4 px-4  w-full items-center justify-between bg-no-repeat bg-[left_2rem bg-[top_2re] bg-contain "
                                    style={{backgroundImage: `url(${live.competition?.emblem})`}}
                                    >
                                        <div className='flex flex-col gap-4 items-center '>
                                            <Image src={live?.homeTeam?.crest!} alt='' width={50} height={50} className='object-cover' />
                                            <p className='text-white/70 text-xs'>{live.homeTeam.tla}</p>
                                        </div>
                                        <div className='flex flex-col gap-4 items-center'>
                                            <p className='text-3xl font-semibold px-2 text-white'>
                                                {live.score.fullTime.home} - {live.score.fullTime.away}
                                            </p>
                                            <p className='text-white bg-black tracking-wide text-xs rounded-2xl px-2 py-1'>{formatDate(live.utcDate)}</p>
                                        </div>
                                        <div  className='flex flex-col gap-4  items-center '>
                                            <Image src={live?.awayTeam?.crest!} alt='' width={50} height={50} className='object-cover' />
                                            <p className='text-white/70 text-xs'>{live.awayTeam.tla}</p>
                                        </div>
                                        <div className="rounded-full w-8 h-8 bg-[#165D31] absolute bottom-6 z-50 right-[-1rem] top-right" />
                                    </div>
                                    
                                    {/* <div className='w-full flex items-center'>
                                        <p className='text-sm mr-2 whitespace-nowra'>{live?.homeTeam?.name}</p>
                                        <div className='w-[20px] h-[20px] relative '>
                                            <Image src={live?.homeTeam?.crest!} alt='' width={30} height={30} className='object-cover' />
                                        </div>
                                    </div>
                                    <div className='px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md'>
                                        {data?.status == 'IN_PLAY' ? (
                                            <p className='py-1 text-teal-400 text-xs'>{live?.score?.fullTime.home} : {live.score?.fullTime.away}</p>
                                        ) : (
                                            <p className='py-1 text-teal-400 text-xs'>{getDate}</p>
                                        )}
                                    </div>
                                    <div className='w-full flex items-center justify-end gap-2'>
                                        <div className='w-[20px] h-[20px] relative'>
                                            <Image src={live?.awayTeam?.crest!} alt='' width={30} height={30} className='object-cover' />
                                        </div>
                                        <p className='text-sm text-righ'>{live.awayTeam?.name}</p>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                    {/* //  : <div className='rounded-lg h-[10rem] flex justify-center items-center border-[#BEF264] border-2 border-dashed text-white text-lg font-semibold tracking-wider'>No Live Matches</div>} */}
            </div>
        </section>
    )
}

export default Matches