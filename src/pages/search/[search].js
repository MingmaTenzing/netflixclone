import BrowseNav from "@/components/BrowseNav";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Template from "@/components/Template";
import Result from "@/components/Result";
import Footer from "@/components/Footer";

function SearchResults() {
  const router = useRouter();
  const searchquery = router.query.search;
  const [searchresults, setSearchResults] = useState([])
  const [loading ,setLoading] = useState(false)
  useEffect(() => {
    async function searchtry() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ce0b0bd695c8b328e08d65830c217807&language=en-US&query=${searchquery}&page=1&include_adult=false`
      );

      setSearchResults(data.results);
    }
    searchtry();
  }, [searchquery]);

  return (
    <main className="text-white bg-black">
      <BrowseNav />

     <div className="">
      <div className="w-[170px] h-[200px] bg-white bg-opacity-20 lg:w-[300px] animate-pulse">

      </div>
     </div>


      <div className="flex justify-center items-center flex-wrap space-x-2 p-2 space-y-2 my-10 ">
        {
            searchresults.map((movie) => <Result key={movie.id} movie={movie} /> )
            
        }
      </div>
      <Footer />
    </main>
  );
}
export default SearchResults;
