import { apiOptions, matchesType } from "@/types"

const options:apiOptions =  {
  next: { revalidate: 1 },
  headers: {
    "X-Auth-Token": "adb79a59adf74d09b59ce1362ce4336a",
    "Content-Type": "application/json",
  },
}


export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options)
//   console.log(matchData)
  return matchData.json()
}

export const getLiveMatches = async () => {
    const matchData = await fetch('https://api.football-data.org/v4/matches?status=LIVE',options)
    console.log(matchData)
    return matchData.json()
  }

// console.log(getMatchesfootball())

const todayDate = new Date()
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear()
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate()).padStart(2, '0');

const yesterday = [year, month, day].join('-');
  
export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
  return matchData.json()
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}})
  
  return newsData.json()
}

export const filterLeague = async (filterData:string) => {
  const getEnglishLeague = await getMatchesfootball()
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
  const getData = filterPremierLeague.filter((item) => item.competition.name === filterData)
  return getData
}