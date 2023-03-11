import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assests/Netflixlogo.svg";
import { auth } from "@/firebase/init";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  console.log(email, password);

  function loginUser(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
      setUser(userCredential.user);
      console.log(user);
      console.log('user logged in ')
    }).catch((error) => {
      console.log(error);
    })

  }

  return (
    <>
      {/*SMALL DEVICE */}

      <div className="sm:hidden">
        <div className=" p-4 bg-black text-white">
          <Link href="/">
            {" "}
            <Image src={Logo} alt="Netflix logo" width={150} height={100} />
          </Link>

          <div className="pt-10">
            <h1 className="text-[26px] font-bold pb-5">Sign in</h1>
            <form onSubmit={loginUser} className="flex flex-col  ">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    required
                    className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
                  ></input>
                  <label className="absolute top-2 left-5 text-[10px] opacity-20">
                    Email or phone number
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    required
                    className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
                  ></input>
                  <label className="absolute top-2 left-5 text-[10px] opacity-20">
                    Password
                  </label>
                </div>
              </div>

              <button className="bg-NetflixRed h-[50px] rounded-lg mt-10 ">
                Sign in
              </button>
            </form>

            <div className="my-20">
              <div className="flex space-x-2">
                <p className="opacity-40"> New to Netflix?</p>
                <Link href="/signup">
                  <p>Sign up now. </p>
                </Link>
              </div>

              <p className="text-sm mt-4 opacity-40">
                This page is protected by Google reCAPTCHA to ensure you&apos;re
                not a bot. Learn more.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* AFTER SMALL DEVICES */}
      <div className="hidden t sm:flex bg-[url('/bgimage.png')] bg-cover bg-center bg-no-repeat  h-[100vh]">
        <div className="p-4 text-white w-full">
          <Link href="/">
            {" "}
            <Image src={Logo} alt="Netflix logo" width={150} height={100} />
          </Link>

          <div className=" bg-black sm:w-2/3 md:w-2/3 lg:w-1/3  m-auto mt-10  p-5 md:p-10 ">
            <form onSubmit={loginUser} className="space-y-4">
              <h1 className="font-bold text-[24px]"> Sign in </h1>

              <div className="relative">
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                  className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
                ></input>
                <label className="absolute top-2 left-5 text-[10px] opacity-20">
                  Email or phone number
                </label>
              </div>
              <div className="relative">
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  required
                  className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
                ></input>
                <label className="absolute top-2 left-5 text-[10px] opacity-20">
                  Email or phone number
                </label>
              </div>
              <button className="bg-NetflixRed h-[50px] rounded-lg mt-10 w-full ">
                Sign in
              </button>
            </form>
            <div className="mt-10">
              <div className="flex space-x-2">
                <p className="opacity-40"> New to Netflix?</p>{" "}
                <Link href="/signup">
                  <p>Sign up now</p>
                </Link>
              </div>

              <p className="text-sm mt-4 opacity-40">
                This page is protected by Google reCAPTCHA to ensure you&apos;re
                not a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default signin;
