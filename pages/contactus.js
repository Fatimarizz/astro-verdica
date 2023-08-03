
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
export default function ContactUs() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 " />
      <div className=" max-w-screen  ">
        <div className="relative shadow-xl sm:overflow-hidden ">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-green-700 mix-blend-multiply" />
          </div>
          <div className="relative py-16 px-6 sm:py-16 lg:py-20 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block txt text-white">Contact Us</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center  mx-7 sm:mx-0  flex-col max-w-7xl">
        <div className="bg-blue-900 w-full sm:w-[80%] lg:w-[60%] text-white  p-5 sm:p-10 my-4 rounded-lg ">
          <div className="flex space-x-9 items-center">
            <MapPinIcon className="h-8 w-8" />
            <div>
              <p className="max-w-xs text-lg font-semibold">
                Kurkur Eretail Pvt. Ltd. Plot No 38, 3rd floor, Namdevnagar,
                Muktainagar – 425 306
              </p>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:space-x-3 w-full lg:w-[60%] ">
          <div className="bg-blue-900 flex space-x-3 items-center text-white px-10 py-5 my-4 sm:w-1/2 rounded-lg">
            <Image src="/watsapp.svg" className="h-7 w-7" height={300} width={300}/>
            <div>
              <p className="text-gray-400 font-bold">Wastapp</p>
              <p className="font-bold">9529195776</p>
            </div>
          </div>
          <div className="bg-blue-900 flex space-x-3 items-center text-white px-10 py-5 sm:w-1/2 my-4 rounded-lg">
          <Image src="/mail.svg" className="h-7 w-7" height={300} width={300}/>
           
            <div>
              <p className="text-gray-400 font-bold">Email</p>
              <p className="font-bold"> support@verdicaastro.com</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}



