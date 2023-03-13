import Image from "next/image"

function Template({movie}) {
    const image = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`;
  return (
    <div>
        <Image width={250} height={150} src={image} alt="poster" className=" min-w-[250px] scroll" />
        
    </div>
  )
}
export default Template