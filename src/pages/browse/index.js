import BrowseNav from "@/components/BrowseNav";
import SmallNav from "@/components/SmallNav";
import Template from "@/components/Template";
import { Tv } from "@mui/icons-material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Requests from "../../../utilities/Requests";

function Browse() {
  const [trending, setTrending] = useState();
  const [featured, setFeatured] = useState();
  const [topRated, settopRated] = useState();
  const [actionMovies, setactionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [horroMovies, setHorroMovies] = useState();
  const [romanceMovies, setRomanceMovies] = useState();
  const [mystery, setMystery] = useState();
  const [sciFi, setSciFi] = useState();
  const [Western, setWestern] = useState();
  const [animation, setAnimation] = useState();
  const [TV, setTV] = useState();

  console.log(trending);


  useEffect(() => {
    async function fetchTrending() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchTrending.url}`
      );
      setTrending(data.results);
    }

    fetchTrending();

    async function fetchTopRated() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchTopRated.url}`
      );
      settopRated(data.results);
    }
    fetchTopRated();

    async function fetchActionMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchActionMovies.url}`
      );
      setactionMovies(data.results);
    }
    fetchActionMovies();

    async function fetchComedyMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchComedyMovies.url}`
      );
      setComedyMovies(data.results);
    }
    fetchComedyMovies();

    async function fetchHorrorMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchHorrorMovies.url}`
      );
      setHorroMovies(data.results);
    }
    fetchHorrorMovies();

    async function fetchRomanceMovies() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchRomanceMovies.url}`
      );
      setRomanceMovies(data.results);
    }
    fetchRomanceMovies();

    async function fetchMystery() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchMystery.url}`
      );
      setMystery(data.results);
    }
    fetchMystery();

    async function fetchSciFi() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchSciFi.url}`
      );
      setSciFi(data.results);
    }
    fetchSciFi();

    async function fetchWestern() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchWestern.url}`
      );
      setWestern(data.results);
    }
    fetchWestern();

    async function fetchAnimation() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchAnimation.url}`
      );
      setAnimation(data.results);
    }
    fetchAnimation();

    async function fetchTV() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3${Requests.fetchTV.url}`
      );
      setTV(data.results);
    }
    fetchTV();
  }, []);

  useEffect(() => {
    if (trending) {
      setFeatured(trending[Math.floor(Math.random() * trending.length)]);
    }
  }, [trending]);

  {
    /*const image = `https://image.tmdb.org/t/p/original/${featured?.backdrop_path}`; */
  }

  return (
    <div className="bg-black text-white">
      <Head>
        <title>Browse</title>
      </Head>

      <SmallNav />

      <main className="p-4 space-y-10">
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Trending</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         trending?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>

        </div>
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Top-Rated</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         topRated?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Action Movies</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         actionMovies?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Comedy Movies</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         comedyMovies?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Horror Movies</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         horroMovies?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Romance Movies</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         romanceMovies?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Mystery Movies</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         mystery?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">SciFi </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         sciFi?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Western </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         Western?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">Animation </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         animation?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
        <div>
            <h1 className="text-[20px] font-[600] opacity-50 pb-2">TV</h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
         {
         TV?.map((movie) => <Template key={movie.id} movie={movie}/>)
         }
         </div>
        </div>
        {/** */}
      </main>
    </div>
  );
}
export default Browse;
