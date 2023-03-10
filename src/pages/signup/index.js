import Image from "next/image"
import Link from "next/link"
import Logo from "../../assests/Netflixlogo.svg"

function Signup() {
  return (
    <div className="">

        <div className="flex justify-between border-b p-8">
         <Link href="/"> <Image src={Logo} width={150} height={200} alt="Netflix logo" className="w-[100px]" /></Link>  
          <Link href="/signin"><p className="text-[18px] sm:text=[20px] font-[600]">Sign in</p></Link>  
        </div>

        <div className="  w-2/3 md:w-1/3 m-auto mt-10">
            <div className="space-y-2">
            <h1 className="text-[24px] md:text-[34px] font-[700]">Create a password to start your membership </h1>
            <p>Just a few more steps and your&apos;re finished!</p>
            <p>We hate paperwork,too.</p>
            </div>

            <form className="space-y-2 mt-4"> 
                <input type="email" placeholder="Email Address"  className="border border-black w-full h-[60px] p-3 text-sm "></input>
                <input type="password" placeholder="Password"  className="border border-black w-full h-[60px]  p-3 text-sm"></input>
              <button className="bg-NetflixRed text-white w-full h-[60px]" >Sign up </button>
                </form>
            </div>
        </div>
  )
}
export default Signup