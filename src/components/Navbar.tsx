import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavList from './NavList'
import { getMatchesfootball, getMatchesfootballFinished } from "@/api/matches/route"

const Navbar = async () => {
  const getDatas =  await getMatchesfootball()
  const getDatasFinished = await getMatchesfootballFinished()

  const matchesDatas = getDatas?.matches
  const matchesDatasFinished = getDatasFinished?.matches

  const nd = new Date()
  const dateConvert = nd.toDateString()
  return (
    <div className='py-2 grid grid-cols-3 justify-betwee items-center'>
        <Link href='/' className='flex gap-2 items-center font-semibold'>
            <div className="w-[30px] h-[30px]">
                <Image src='/images/football-logo.png' width={100} height={100} alt='' />
            </div>
            <span className="">Goalscore</span>
        </Link>
        <nav>
            {/* <NavList matchesList={matchesDatas} matchesListFinished={matchesDatasFinished} /> */}
        </nav>
    </div>
  )
}

export default Navbar