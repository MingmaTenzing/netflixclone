import Image from "next/image";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import {useState, useEffect} from 'react'

function Result({ movie }) {
  const hoverRef = useRef();
  const isHover = useHover(hoverRef);
  const image = `https://image.tmdb.org/t/p/original/${
    movie?.backdrop_path || movie?.poster_path
  }`;

  const [brightness, setBrightness] = useState("brightness-100")
useEffect(() => {
  if (isHover) {
    setBrightness('brightness-50 ')
  }

  else{
    setBrightness('brightness-100')
  }

},[isHover])
  

  return (
    <div
      ref={hoverRef}
      className="m-1 relative  md:hover:scale-125 transition-all ease-linear duration-125"
    >
      <Image
      loading="eager"
        width={800}
        height={300}
        src={image}
        alt="poster"
        className={`w-[170px]  h-[200px] lg:w-[300px] object-cover ${brightness}` }  
      />
      {isHover && (
        <p className=" absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold">
          {movie?.title || movie?.original_name || movie?.name}
        </p>
      )}
    </div>
  );
}
export default Result;
