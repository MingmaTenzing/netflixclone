import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import logo from "../assests/Netflixlogo.svg"
import profileicon from "../assests/profile.jpeg"

function BrowseNav() {
  return (
    <main className="p-4 md:px-20 text-white">
    <div className="flex items-center justify-between">
        <div className="flex space-x-2">
        <Image src={logo} width={200} height={200} alt="Netflix Logo" className="w-20 mr-4" />
        <div className="flex space-x-3 text-sm">
            <p className="sm:hidden">Browse</p>
            <p className="hidden sm:flex">Home</p>
            <p className="hidden sm:flex">Series</p>
            <p className="hidden sm:flex">Film</p>
            <p className="hidden sm:flex">New & Popular</p>
           
            </div> 
            </div>
            <div className="flex items-center space-x-3">
                <MagnifyingGlassIcon className="w-8" />
                <Image src={profileicon} width={225} height={225} alt="Profile Icon" className="w-[40px] rounded-xl" />

            </div>
    </div>
    </main>
  )
}
export default BrowseNav