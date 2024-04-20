'use client'

import { getLeagueStanding } from '@/api/matches/route'
import React, { useState } from 'react'
import  Link  from "next/link"

interface Params {
    params: {
        id: string
    }
}

const NavToggle =  ({data}: any) => {
    const [toggle, setToggle] = useState('Tables')

    // const handleLinkClick = (href: any) => {
    //     setToggle(href)
    // }
    // const query = params.id
    
//   const data = await getLeagueStanding(query)
    // console.log(data);
  return (
    <div className="flex gap-6 text-white bg-black/80 px-4 py-2 justify-center w-fit items-center rounded-xl mx-auto my-3">
    <Link href={`/Tables/${data.competition.code}`} onClick={() => setToggle('Tables')} className="">Tables</Link>
    <p className="">Matches</p>
    <p className="">Top-scorer</p>
</div>
  )
}

export default NavToggle