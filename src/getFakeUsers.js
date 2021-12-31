import axios from "axios"

export const getFakeMale = async () => {
  const res = await axios.get(`https://api.randomuser.me/gender=male`)
  console.log(res)
  
  return res
}
