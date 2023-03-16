import BrowseNav from "@/components/BrowseNav";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Template from "@/components/Template";
import Result from "@/components/Result";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

function SearchResults() {
  const router = useRouter();
  const searchquery = router.query.search;
  const [searchresults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    async function searchtry() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ce0b0bd695c8b328e08d65830c217807&language=en-US&query=${searchquery}&page=1&include_adult=false`
      );

      setSearchResults(data.results);
      setTimeout(() => {
        setLoading(false)

      },3000)

    }
    searchtry();
  }, [searchquery]);

  return (
    <main className="text-white bg-black">
      <BrowseNav />
      {loading ? (
        <div className="flex justify-center items-center flex-wrap my-10 ">
          {new Array(20).fill(0).map((element, index) => (
           ( <Loading key={index} />)
            
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap  my-10 ">
          {searchresults.map((movie) => (
            <Result key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <Footer />
    </main>
  );
}
export default SearchResults;
