import { useRouter } from "next/router"
import { useEffect } from "react"

function Search() {
  const router = useRouter();


  useEffect(() => {
    router.push('/')

    
  })
  return (
    <div></div>
  )
}
export default Search