import { matchesType } from '@/types'
import Image from 'next/image'

const Competition = ({data}:{data:matchesType}) => {
  
  const nd = new Date(data?.utcDate)
  const dateConvert = nd.toDateString()
  // Object.
  // return (
    return (
      <div className='mb-4 flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md'>
      <div className='flex space-x-4'>
        <Image src={data?.competition.emblem} alt={data?.competition.name} width={20} height={20} />
        <p className='text-sm font-semibold'>{data?.competition.name}</p>
      </div>
      <p className='text-xs md:text-sm'>{dateConvert}</p>
    </div>
    )
    // {Object.keys(datas).map((data) => (
    //     <div key={data.} className='mb-4 flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md'>
    //       <div className='flex space-x-4'>
    //         <Image src={data?.competition.emblem} alt={data?.competition.name} width={20} height={20} />
    //         <p className='text-sm font-semibold'>{data?.competition.name}</p>
    //       </div>
    //       <p className='text-xs md:text-sm'>{dateConvert}</p>
    //     </div>
    //   ))}
    // <div className=""></div>
  // {Object.keys(datas).map((data) => (
    // <div className='mb-4 flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md'>
    //   <div className='flex space-x-4'>
    //     <Image src={data?.competition.emblem} alt={data?.competition.name} width={20} height={20} />
    //     <p className='text-sm font-semibold'>{data?.competition.name}</p>
    //   </div>
    //   <p className='text-xs md:text-sm'>{dateConvert}</p>
    // </div>
  // ))}
  // )
}

export default Competition