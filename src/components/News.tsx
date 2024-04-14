import Image from "next/image"
import Link from "next/link"
import { newsType } from "@/types"
import { getNewsInfo } from "@/api/matches/route"
import { formatDistanceToNow } from 'date-fns';

const utcString = (time: string) => {
  let Time = formatDistanceToNow(new Date(time), { addSuffix: true })
  return Time
};

const News = async () => {
  const getNews = await getNewsInfo()

  const newsData:newsType[] = getNews.articles

  // console.log(newsData.slice(2))
  

  return (
    <div className='lg:w-[30%] lg:min-h-screen lg:fixed lg:right-0 lg:flex flex-col rounded-md  md:px-6 lg:py-4 py-8 lg:overflow-y-visible'>
      <h1 className=" md:text-xl font-bold bg-[#BEF264] pl-2 pr-20 py-1 tracking-wide w-fit">Feed</h1>
        <div className=" border-b-2 border-[#BEF264] w-full"></div>
      <div>
        {/* <div className="">
            {newsData?.slice(0,1).map((news) => (
                <div className="" key={news.title}>
                     <Image src={news?.urlToImage != null ? news?.urlToImage :  '/img/news-football.webp'} alt={news.title} width={250} height={250} className="object-cover w-full rounded-md" />
                     <p className="font-semibold ">{news.title}</p>
                     <p className="text-xs text-gray-400">About {utcString(news.publishedAt)}</p>
                </div>
            ))}
        </div> */}
        {newsData?.slice(2).map((news) => (
          <Link key={`${news.title}`} href={news.url} className="w-full" legacyBehavior>
            <a target="_blank">
              <div className="relative w-full flex items-center gap-2 mb-4  mt-8">
                <Image src={news?.urlToImage != null ? news?.urlToImage :  '/img/news-football.webp'} alt={news.title} width={150} height={150} className="object-cover h-[80px] w-[80px] rounded-md" />
                 <div className="">
                 <p className=" text-[0.85rem] text-white">{news.title}</p>
                     <p className="text-[#BEF264]/60 text-xs">About {utcString(news.publishedAt)}</p>
                 </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default News