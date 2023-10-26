'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type linkProps = {
  href: string,
  name: string,
  src: string,
  expanded: boolean
}

const SideLink = ({href,name,src, expanded}:linkProps) => {
  const path = usePathname()
  return (
    <Link href={href} className={`flex items-center w-full py-2 px-2 rounded-md my-1 group transition-colors ${path === href ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-500'} `}>
      <Image src={src} className={`${!expanded ? 'w-[40px]': 'w-[30px]'}`} quality={100} alt={name} width={50} height={50} />
      <p className={`ml-4 text-xs md:text-sm font-semibold overflow-hidden transition-all duration-300 ${expanded ? 'w-52 ml-3': 'w-0'}`}>{name}</p>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {name}
        </div>
      )}
    </Link>
  )
}

export default SideLink