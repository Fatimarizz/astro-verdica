import React from "react";

export default function Desclaimer() {
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
              <span className="block txt text-white">Declaimer</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center max-w-7xl mx-auto pt-6 pb-14  bg-white">
        <div className="max-w-3xl space-y-4">
        <p className="">
        The information and data contained on Verdica Astro website is to be considered exclusively for the entertainment purposes only. If you receive any prediction or other message it should not be treated as  a substitute for advice, programs, or treatment that you would normally receive from a licensed professional such as a lawyer, doctor, psychiatrist, or financial advisor. Verdica Astro.com provides no guarantees, implied warranties, or assurances of any kind regarding the data and information mentioned above. Any interpretation shall be made or used by the recipient of the information and data at their own discretion, the website does take any responsibility for that.
        </p>
        <p>
          In addition to, Verdica Astro.com is not an individually registered firm.
          It is a product of kurkur eretail Pvt Ltd. All the transaction and
          gathered data on the website is subject to access by Kurkur.
        </p>
        </div>
        
      </div>
    </div>
  );
}
