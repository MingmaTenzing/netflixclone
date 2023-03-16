import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import logo from "../assests/Netflixlogo.svg";
import profileimg from "../assests/profile.jpeg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { selectUser, signoutuser } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "next/router";

function BrowseNav({ isVisible }) {
  const [bg, setbg] = useState("transparent");
  const [openmodal, setopenModal] = useState(false);
  const dispatch = useDispatch();
  const [searchclick, setsearchclick] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();
const user = useSelector(selectUser)
  useEffect(() => {
    !user && router.push("/signin");
  }, [user]);

  function logOutUser() {
    signOut(auth)
      .then(() => {
        dispatch(signoutuser());
        router.push("/signin");
      })
      .catch((error) => console.log(error));
  }

  function searchquery(event) {
    event.preventDefault();
    router.push(`/search/${searchInput}`);
  }

  useEffect(() => {
    if (isVisible) {
      setbg("black");
    } else {
      setbg("transparent");
    }
  }, [isVisible]);

  return (
    <div className="  ">
      <div className="md:hidden flex justify-between items-center bg-black p-4">
        <div className="flex items-center space-x-3">
          <Bars3Icon className="w-8 text-white" />
          <Link href="/">
            <Image
              src={logo}
              alt="Netflix Logo"
              width={200}
              height={200}
              className="w-20"
            />
          </Link>
        </div>
        <form onSubmit={searchquery}>
          <input
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            className="border bg-white bg-opacity-20 w-[130px] pl-2 p-1 text-sm mr-2 "
            placeholder="Search"
          />
          <button type="submit" className="hidden"></button>
        </form>
      </div>

      {/*After Medium Device */}
      <div className="hidden md:flex  lg:hidden md:items-center md:justify-between p-4 bg-black">
        <div className="flex items-center space-x-10">
          <Link href="/">
            <Image
              src={logo}
              alt="Netflix Logo"
              width={200}
              height={200}
              className="w-[120px]"
            />
          </Link>
          <p className="text-NetflixRed  text-base">Browse</p>
        </div>

        <div className="flex items-center space-x-3">
          <form onSubmit={searchquery}>
            <input
              onChange={(event) => setSearchInput(event.target.value)}
              type="text"
              className="border bg-white bg-opacity-20 w-[160px] pl-2 p-1 text-sm mr-2 "
              placeholder="Search"
            />
            <button type="submit" className="hidden"></button>
          </form>

          <div className="relative">
            <Image
              onClick={() => setopenModal(!openmodal)}
              src={profileimg}
              alt="profile icon"
              width={200}
              height={200}
              className="w-10 rounded-lg"
            />
            {user
              ? openmodal && (
                  <div className="flex bg-[#141414] border border-gray-500 p-2 rounded-xl shadow-lg text-[12px] space-y-2 absolute  md:top-10 -left-20 md:-left-20  flex-col items-center text-center ">
                    <p className="border-b p-1 border-gray-400 text-gray-500 ">
                      {user.email}
                    </p>

                    <p onClick={logOutUser} className="cursor-pointer">
                      Sign Out
                    </p>
                  </div>
                )
              : null}
          </div>
        </div>
      </div>

      {/*large device */}

      <div
        className={`hidden  lg:flex shadow-inherit p-4 md:px-20 text-white bg-${bg} transition-all ease-linear duration-300 `}
      >
        <div className="flex items-center  justify-between w-full">
          <div className="flex items-center space-x-2">
            <Link href="/">
              {" "}
              <Image
                src={logo}
                width={200}
                height={200}
                alt="Netflix Logo"
                className="w-[100px] mr-4  cursor-pointer"
              />
            </Link>
            <div className="flex space-x-3 text-sm">
              <p className="sm:hidden cursor-pointer">Browse</p>
              <p className="hidden sm:flex cursor-pointer">Home</p>
              <p className="hidden sm:flex cursor-pointer">Series</p>
              <p className="hidden sm:flex cursor-pointer">Film</p>
              <p className="hidden sm:flex cursor-pointer">New & Popular</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {searchclick ? (
              <div className="border  rounded-lg">
                <form onSubmit={searchquery} className='flex items-center space-x-2'>
                  <input
                    onChange={(event) => setSearchInput(event.target.value)}
                    type="text"
                    className="bg-transparent felx-1 outline-none p-2"
                  ></input>
                  <MagnifyingGlassIcon
                    onClick={() => setsearchclick(!searchclick)}
                    className="w-10 pr-2"
                  />
                  <button className="hidden"></button>
                </form>
              </div>
            ) : (
              <>
                {" "}
                <MagnifyingGlassIcon
                  onClick={() => setsearchclick(!searchclick)}
                  className="w-10 pr-2 pt-1"
                />
              </>
            )}

            <div className="relative">
              <Image
                onClick={() => setopenModal(!openmodal)}
                src={profileimg}
                width={225}
                height={225}
                alt="Profile Icon"
                className="w-[40px] rounded-xl"
              />
              {user
                ? openmodal && (
                    <div className=" hidden lg:flex bg-[#141414] border border-gray-500 p-2 rounded-xl shadow-lg text-[12px] space-y-2 absolute  md:top-10 -left-20 md:-left-12  flex-col items-center text-center ">
                      <p className="border-b p-1 border-gray-400 text-gray-500 ">
                        {user.email}
                      </p>

                      <p onClick={logOutUser} className="cursor-pointer">
                        Sign Out
                      </p>
                    </div>
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrowseNav;
