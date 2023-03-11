import Image from "next/image"
import { useRouter } from "next/router";
import Netflixlogo from "../assests/Netflixlogo.svg"

function Nav() {
  const router = useRouter();
  return (
    <main className="flex justify-between  lg:p-4">
        <div>
            <Image src={Netflixlogo} width={200} height={200} className='w-20 sm:w-[120px] lg:w-[150px]' alt='Netflix Logo' />

        </div>

        <div className="">
            <button onClick={() => router.push("/signin")} className=" py-1 px-2 lg:px-3 rounded-lg bg-NetflixRed  text-white text-sm  sm:text-base md:text-lg"> Sign in</button>

        </div>
        
    </main>
  )
}
export default Nav