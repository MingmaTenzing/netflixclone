import { PlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

function FAQs({item}) {
    const [openDescription, setOpenDescription] = useState(false)
    return (
    <div className="container question   ">
          <div onClick={() => setOpenDescription(!openDescription)} className="h-[50px] flex items-center justify-between sm:h-[60px] bg-white bg-opacity-20  p-3">
            <h1 className="text-[18px] sm:text-mediumdescription lg:text-largedescription ">
              {item.title}
            </h1>
            <PlusIcon className="w-8" />
          </div>
      {openDescription && (<div className=" bg-white bg-opacity-20  p-3 mt-[2px]">
            <p className="text-[18px] sm:text-mediumdescription lg:text-largedescription ">
           {item.description}</p>
          </div>) }     
        </div>
  )
}
export default FAQs