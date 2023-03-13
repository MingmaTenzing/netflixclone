import { Bars3Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import logo from "../assests/Netflixlogo.svg"
import profileimg from "../assests/profile.jpeg"

function SmallNav() {
  return (
    <div className="p-2">
        <div className="md:hidden flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <Bars3Icon className="w-8 text-white"/>
            <Image src={logo} alt="Netflix Logo" width={200} height={200}  className="w-20"/>
           </div>
            <input type="text" className="border bg-white bg-opacity-20 w-[130px] pl-2 p-1 text-sm mr-2 " placeholder="Search"/>
          
            </div>

            {/*After Medium Device */}
            <div className="hidden md:flex md:items-center md:justify-between p-2">
                <div className="flex items-center space-x-10">
                <Image src={logo} alt="Netflix Logo" width={200} height={200} className='w-[120px]' />
                <p className="text-NetflixRed  text-base">Browse</p> 
                </div>

                <div className="flex items-center space-x-3">
                <input type="text" className="border bg-white bg-opacity-20 w-[160px] pl-2 p-1 text-sm mr-2 " placeholder="Search"/>
                <Image src={profileimg} alt="profile icon" width={200} height={200}  className="w-10 rounded-lg"/> 

                    
                    
                </div>
            </div>
    </div>
  )
}
export default SmallNav