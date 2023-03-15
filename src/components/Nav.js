import { useSelect } from "@mui/base";
import Image from "next/image"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signoutuser } from "../../slices/userSlice";
import Netflixlogo from "../assests/Netflixlogo.svg"
import profileimg from "../assests/profile.jpeg"
import { auth } from "@/firebase/init";
import { signOut } from "firebase/auth";
import {useState} from 'react'
function Nav() {
  const router = useRouter();
  const user = useSelector(selectUser)
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  console.log(openModal)

  function logOutUser() {
    signOut(auth). then (() => {
      dispatch(signoutuser())
    }).catch((error) => console.log(error))
  }


  return (
    <main className="flex items-center justify-between  lg:p-4">
        <div >
            <Image  src={Netflixlogo} width={200} height={200} className='w-20 sm:w-[120px] lg:w-[150px]' alt='Netflix Logo' />

        </div>

        <div className="">
          {
            user? (<div className="relative text-white flex flex-col items-center">
              <Image onClick={() => setOpenModal(!openModal)} src={profileimg} width={200} height={200} alt='profile icon' className="w-8 md:w-[60px] rounded-lg" />
          {openModal &&  <div className="bg-[#141414] border border-gray-500 p-2 rounded-xl shadow-lg text-[12px] space-y-2 absolute top-8 md:top-16 -left-20 md:-left-12 flex flex-col items-center text-center"><p className="border-b p-1 border-gray-400 text-gray-500 ">{user.email}</p>

<p onClick={logOutUser} className="cursor-pointer" >Sign Out</p>
</div>} 
            </div>):(<>            <button onClick={() => router.push("/signin")} className=" py-1 px-2 lg:px-3 rounded-lg bg-NetflixRed  text-white text-sm  sm:text-base md:text-lg"> Sign in</button>
            </>)
          }

        </div>
        
    </main>
  )
}
export default Nav