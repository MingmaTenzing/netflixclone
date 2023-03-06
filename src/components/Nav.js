import Image from "next/image"
import Netflixlogo from "../assests/Netflixlogo.svg"

function Nav() {
  return (
    <main className="flex justify-between">
        <div>
            <Image src={Netflixlogo} width={200} height={200} className='w-20' alt='Netflix Logo' />

        </div>

        <div className="">
            <button className=" py-1 px-2 rounded-lg bg-NetflixRed  text-white text-sm"> Sign in</button>

        </div>
        
    </main>
  )
}
export default Nav