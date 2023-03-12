import BrowseNav from "@/components/BrowseNav";
import axios from "axios";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Requests from "../../../utilities/Requests";

function Browse() {
  const [trending, setTrending] = useState();
  const [featured, setFeatured] = useState();



  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchTrending.url}`
      );
      setTrending(data.results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (trending) {
      setFeatured(trending[Math.floor(Math.random() * trending.length)]);

    }
  }, [trending]);
  const image = `https://image.tmdb.org/t/p/original/${featured?.backdrop_path}`;






  return (
    
    <main className="relative">
      <div
     className="absolute -z-10 h-[90vh]  w-full ">
      <img src={image}  className=' object-cover h-[80vh] w-full'/>
    
      
      </div>
      <div className="bg-gradient-to-t from-black">
        
        </div>
<div className="z-100">
  <BrowseNav/>
</div>

<div> 
  ksdljflkdsjflkdsjl
  </div>
    
    </main>
  );
}
export default Browse;
