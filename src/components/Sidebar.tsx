
'use client'

import {FC, useState} from 'react'
import SideLink from './SideLink'
import Image from 'next/image'
import { ChevronFirst, ChevronLast } from 'lucide-react'

const Leagues = [
  { id:1,name:"Premier League",href:"premier-league",emblem:"/images/leagues/premier_league.webp"},
  { id:2,name:"Primera Division",href:"la-liga",emblem:"/images/leagues/laliga.svg"},
  { id:3,name:"Bundesliga",href:"bundesliga",emblem:"/images/leagues/bundesliga.webp"},
  { id:4,name:"Serie A",href:"serie-a",emblem:"/images/leagues/serie_a.webp"},
  { id:5,name:"Ligue 1",href:"ligue-1",emblem:"/images/leagues/ligue_1.webp"},
  { id:6,name:"Championship",href:"championship",emblem:"/images/leagues/championship.webp"},
  { id:7,name:"Primeira Liga",href:"primeira-liga",emblem:"/images/leagues/liga_portugal.webp"},
  { id:8,name:"Brazilian Championship Series A",href:"brazilian-series-a",emblem:"/images/leagues/brazilian_serie_a.webp"},
  { id:9,name:"Copa Libertadores",href:"copa-libertadores",emblem:"/images/leagues/copa_libertadores.webp"},
]

const Sidebar:FC = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <aside className="h-full absolute">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm fixed z-50 lg:stati">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className={`flex overflow-hidden duration-300 transition-all ${expanded ? 'w-32' : 'w-0'}`}>
            <Image src='/images/football-logo.png' className='w-[30px]' width={100} height={100} alt='' />
            <span className="font-semibold">Goalscore</span>
          </div>
          <button onClick={() => setExpanded(curr => !curr)} className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className='space-y- flex-1'>
          {
            Leagues.map((league) => (
              <div key={league?.id} className='flex'>
                <SideLink href={league.href} name={league?.name} src={league?.emblem} expanded={expanded} />
              </div>
            ))
          }
        </ul>
        
        

      </nav>

    </aside>
    // <section className='px-2 md:px-4 py-2 bg-white rounded-md'>
    //   <div>
    //     <h1 className='font-bold text-xl mb-4 border-b pb-3'>Football Leagues</h1>
    //     <ul className='space-y-2'>
    //       {
    //         Leagues.map((league) => (
    //           <div key={league?.id} className='flex'>
    //             <SideLink href={league.href} name={league?.name} src={league?.emblem} />
    //           </div>
    //         ))
    //       }
    //     </ul>
    //   </div>
    // </section>
  )
}

export default Sidebar