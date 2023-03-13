import { Bars3Icon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import logo from "../assests/Netflixlogo.svg"
import profileimg from "../assests/profile.jpeg"

function BrowseNav() {
  return (
    <div className="p-2  ">
        <div className="md:hidden flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <Bars3Icon className="w-8 text-white"/>
            <Image src={logo} alt="Netflix Logo" width={200} height={200}  className="w-20"/>
           </div>
            <input type="text" className="border bg-white bg-opacity-20 w-[130px] pl-2 p-1 text-sm mr-2 " placeholder="Search"/>
          
            </div>

            {/*After Medium Device */}
            <div className="hidden md:flex  lg:hidden md:items-center md:justify-between p-2">
                <div className="flex items-center space-x-10">
                <Image src={logo} alt="Netflix Logo" width={200} height={200} className='w-[120px]' />
                <p className="text-NetflixRed  text-base">Browse</p> 
                </div>

                <div className="flex items-center space-x-3">
                <input type="text" className="border bg-white bg-opacity-20 w-[160px] pl-2 p-1 text-sm mr-2 " placeholder="Search"/>
                <Image src={profileimg} alt="profile icon" width={200} height={200}  className="w-10 rounded-lg"/> 

                    
                    
                </div>
            </div>

            {/*large device */}
            <div className="hidden lg:flex shadow-inherit p-4 md:px-20 text-white">
    <div className="flex items-center justify-between w-full">
        <div className="flex space-x-2">
        <Image src={logo} width={200} height={200} alt="Netflix Logo" className="w-20 mr-4  cursor-pointer" />
        <div className="flex space-x-3 text-sm">
            <p className="sm:hidden cursor-pointer">Browse</p>
            <p className="hidden sm:flex cursor-pointer">Home</p>
            <p className="hidden sm:flex cursor-pointer">Series</p>
            <p className="hidden sm:flex cursor-pointer">Film</p>
            <p className="hidden sm:flex cursor-pointer">New & Popular</p>
           
            </div> 
            </div>
            <div className="flex items-center space-x-3">
              <MagnifyingGlassIcon className="w-10 cur" />
              
                <Image src={profileimg} width={225} height={225} alt="Profile Icon" className="w-[40px] rounded-xl" />

            </div>
    </div>
    </div>
    </div>
  )
}
export default BrowseNav