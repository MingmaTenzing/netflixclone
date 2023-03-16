import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../assests/Netflixlogo.svg";
import { auth } from "@/firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { selectUser, signinuser } from "../../../slices/userSlice";
import { useRouter } from "next/router";
import { useLocalStorage } from "usehooks-ts";

function Signup() {
  const emailaddress = useLocalStorage('useremail')

  const [email, setEmail] = useState(emailaddress[0]);
  const [password, setPassword] = useState("");

  console.log(emailaddress)
  console.log(email)

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser)
  console.log(user)

  function createUser(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          signinuser({
            uid: user.uid,
            email: user.email,
          })
        );

        router.push("/browse")

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="">
      <div className="flex justify-between border-b p-8">
        <Link href="/">
          {" "}
          <Image
            src={Logo}
            width={150}
            height={200}
            alt="Netflix logo"
            className="w-[100px]"
          />
        </Link>
        <Link href="/signin">
          <p className="text-[18px] sm:text=[20px] font-[600]">Sign in</p>
        </Link>
      </div>

      <div className="  w-2/3 md:w-1/3 m-auto mt-10">
        <div className="space-y-2">
          <h1 className="text-[24px] md:text-[34px] font-[700]">
            Create a password to start your membership{" "}
          </h1>
          <p>Just a few more steps and your&apos;re finished!</p>
          <p>We hate paperwork,too.</p>
        </div>

        <form onSubmit={createUser} className="space-y-2 mt-4">
          <input
            onChange={(event) => setEmail(event.target.value)}
          defaultValue={emailaddress[0]}
          required
          autoComplete="true"
            type="email"
            placeholder="Email Address"
            className="border border-black w-full h-[60px] p-3 text-sm "
          ></input>
          <input
            minLength={8}
            required
            autoComplete="true"

            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="border border-black w-full h-[60px]  p-3 text-sm"
          ></input>
          <button onClick={createUser} className="bg-NetflixRed text-white w-full h-[60px]">
            Sign up{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
