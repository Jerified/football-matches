import { apiOptions, matchesType } from "@/types"

const options:apiOptions =  {
  next: { revalidate: 1 },
  headers: {
    "X-Auth-Token": "adb79a59adf74d09b59ce1362ce4336a",
    "Content-Type": "application/json",
  },
}


export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/competitions',options)
  console.log(matchData)
  return matchData.json()
}

export const getLiveMatches = async () => {
    const matchData = await fetch('https://api.football-data.org/v4/matches?status=IN_PLAY',options)
    console.log(matchData)
    return matchData.json()
  }

  export const getScheduleMatches = async () => {
    const matchData = await fetch('https://api.football-data.org/v4/matches?status=SCHEDULED',options)
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
console.log(yesterday)
    
export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
  return matchData.json()
}

export const getMatchesDetail = async (id: any) => {
  const matchData = await fetch(`https://api.football-data.org/v4/matches/${id}`,options)
  return matchData.json()
}
export const getNewsInfo = async () => {
  try {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=ee1d85cdcfd24430b4d538ad678aea83&q=soccer&pageSize=6`,{next:{revalidate:60}})
    // console.log(newsData);
  
    return newsData.json()
  } catch (error) {
    // console.error(error);
    // handle the error here
    throw Error('unable to fetch')
  }
}

export const filterLeague = async (filterData:string) => {
  const getEnglishLeague = await getMatchesfootball()
  const filterPremierLeague:matchesType[] = getEnglishLeague?.matches
  if (getEnglishLeague) {
    const getData = filterPremierLeague?.filter((item) => item.competition.name === filterData)
    return getData
  } else {
    return []
  }
}