import Footer from "@/components/Footer";
import Image from "next/image";
import Logo from "../../assests/Netflixlogo.svg";
function signin() {
  return (
    <>
    {/*SMALL DEVICE */}

    <div className="sm:hidden">
      <div className=" p-4 bg-black text-white">
        <Image src={Logo} alt="Netflix logo" width={150} height={100} />

        <div className="pt-10">
          <h1 className="text-[26px] font-bold pb-5">Sign in</h1>
          <form className="flex flex-col  ">
            <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                required
                className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
              ></input>
              <label className="absolute top-2 left-5 text-[10px] opacity-20">
                Email or phone number
              </label>
            </div>
            <div className="relative" >
              <input
                type="password"
                required
                className="outline-none  h-[50px] rounded-lg pl-4   bg-white bg-opacity-20 pt-5 w-full text-sm"
              ></input>
              <label className="absolute top-2 left-5 text-[10px] opacity-20">
                Password
              </label>
            </div >
            </div>
            
            <button className="bg-NetflixRed h-[50px] rounded-lg mt-10 ">
              Sign in
            </button>
       
          </form>

          <div className="my-20">

          <div className="flex space-x-2">
            <p className="opacity-40"> New to Netflix?</p> <p>Sign up now. </p>
            
          </div>
         
            <p className="text-sm mt-4 opacity-40">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
   </div>
          
        </div>
       
      </div>

      <Footer />
    </div>


{/* AFTER SMALL DEVICES */}
      <div className="hidden t sm:flex bg-[url('/bgimage.png')] bg-cover bg-center bg-no-repeat  h-[100vh]">

       <div className="p-4 text-white w-full">

        <Image src={Logo} alt="Netflix logo" width={150} height={100} />
        
        <div className=" bg-black sm:w-2/3 md:w-1/3  m-auto mt-10 p-10 ">
          
          <form className="space-y-4">
          <h1 className="font-bold text-[24px]"> Sign in </h1>
            
          <div className="relative">
              <input
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
            <p className="opacity-40"> New to Netflix?</p> <p>Sign up now. </p>
            
          </div>
         
            <p className="text-sm mt-4 opacity-40">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
   </div>
        </div>
        
        
        
        </div> 


      </div>
      
    </>
  );
}
export default signin;
