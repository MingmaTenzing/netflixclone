import BrowseNav from "@/components/BrowseNav";
import Footer from "@/components/Footer";
import Template from "@/components/Template";
import {  PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRef } from 'react'
import { useIntersectionObserver, useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import Requests from "../../../utilities/Requests";
import { useSelector } from "react-redux";
import { selectUser } from "../../../slices/userSlice";
import { useRouter } from "next/router";

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

  const [email, setEmail] = useLocalStorage('useremail', '')

  console.log(featured);

  const myref = useRef();
  const entry = useIntersectionObserver(myref, {} )
  const isVisible = !!entry?.isIntersecting
  console.log(isVisible);

  const router = useRouter();
  const user = useSelector(selectUser)

  
  useEffect(() => {
    !user && router.push("/signin")

  },[user])
  

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

  const image = `https://image.tmdb.org/t/p/original/${featured?.backdrop_path}`;

  return (
    <div className=" text-white bg-black relative ">
      <Head>
        <title>Browse</title>

      </Head>

      
      <div className=" fixed z-30 w-full  top-0 left-0">
        <BrowseNav isVisible={isVisible} /> 
        </div>
      

      <div
        className=" relative h-[100vh] hidden lg:inline-block   min-w-full  brightness-90"
        style={{
          width: "full",
          height: "100vh",
          backgroundImage: `url(${image}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         

        <div className="absolute w-full h-full bg-gradient-to-t from-black top-0 left-0">

        
        <div className="w-1/3 pl-[60px] mt-[200px] space-y-3">
        <h1 className="text-[40px] font-[800]  "> {featured?.original_name || featured?.name || featured?.title}</h1>
       <p>{featured?.overview}</p>
        <div className="flex space-x-3">
          <div className="hover:scale-110  cursor-pointer transition-all ease-in-out duration-100 flex  items-center justify-center bg-white rounded-lg h-10 text-black  font-bold px-4 space-x-2"><PlayIcon className='w-8 text-black' /> <p>Play</p> </div> 
          <div className="hover:scale-110  cursor-pointer transition-all ease-in-out duration-100 flex  items-center justify-center bg-white  bg-opacity-10 rounded-lg font-bold   h-10 text-white px-4 space-x-2"><InformationCircleIcon className='w-8 text-white opacity-1' /> <p className="opacity-1">More Info</p> </div> 
        </div>

        </div>
        




        </div>



       
       
      </div>


      <main ref={myref} className="z-10 p-4 lg:pl-10  space-y-10 ">
        <div>
          <h1  className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Trending
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide ">
            {trending?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Top-Rated
          </h1>
          <div id="makeitinvisible" className="flex md:space-x-1  overflow-x-scroll  ">
            {topRated?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Action Movies
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {actionMovies?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Comedy Movies
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {comedyMovies?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Horror Movies
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {horroMovies?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Romance Movies
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {romanceMovies?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Mystery Movies
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {mystery?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            SciFi{" "}
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {sciFi?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Western{" "}
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {Western?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            Animation{" "}
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {animation?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
        <div>
          <h1 className="text-[20px] font-[600] opacity-50 lg:opacity-100 pb-2 lg:pb-4">
            TV
          </h1>
          <div className="flex md:space-x-1  overflow-x-scroll  scrollbar-hide">
            {TV?.map((movie) => (
              <Template key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/** */}
      </main>

      <Footer />
    </div>
  );
}
export default Browse;
