import Image from "next/image"
import Link from "next/link"
import { newsType } from "@/types"
import { getNewsInfo } from "@/api/matches/route"
import moment from 'moment'

const News = async () => {
  const getNews = await getNewsInfo()

  const newsData:newsType[] = getNews.articles
  console.log(newsData)
  
  const utcString = (time: string) => {
    let Time = moment.utc(time).fromNow()
    return Time
  };

  return (
    <div className='w-[350px] flex flex-col items-en items bg-white rounded-md px-2 md:px-6 py-2'>
      <h1 className='text-sm  font-bold mb-4 border-b pb-4'>Recent News</h1>
      <div>
        <div className="">
            {newsData.slice(0,1).map((news) => (
                <div className="" key={news.title}>
                     <Image src={news?.urlToImage != null ? news?.urlToImage :  '/img/news-football.webp'} alt={news.title} width={250} height={250} className="object-cover w-full rounded-md" />
                     <p className="font-semibold ">{news.title}</p>
                     <p className="text-xs text-gray-400">About {utcString(news.publishedAt)}</p>
                </div>
            ))}
        </div>
        {newsData.slice(2).map((news) => (
          <Link key={`${news.title}`} href={news.url} className="w-full pt-4" legacyBehavior>
            <a target="_blank">
              <div className="relative w-full flex gap-2 mb-4 ">
                <Image src={news?.urlToImage != null ? news?.urlToImage :  '/img/news-football.webp'} alt={news.title} width={150} height={150} className="object-cover w-[40px]rounded-md" />
                 <div className="">
                 <p className="font-semibold text-[0.85rem]">{news.title}</p>
                     <p className="text-xs text-gray-400">About {utcString(news.publishedAt)}</p>
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