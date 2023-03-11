
import axios from "axios"
import { use, useEffect, useState } from "react"
import Requests from "../../../utilities/Requests"


function browse() {



    async function fetchData() {
        const {data} = await axios.get(`https://api.themoviedb.org/3${Requests.fetchTrending.url}`)
        console.log(data.results)
    }
    fetchData()
  




  return (
    <div>browse</div>
  )
}
export default browse