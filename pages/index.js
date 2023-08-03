import { CardData } from "@/assets/CardData";
import { Inter } from "@next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white   " >
      {/* first section */}
      <div className="bg-main pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-40">
                <h2 className="ml-4 txt lg:text-2xl md:text-xl text-lg ">
                  What&apos;s Your Sign?
                </h2>

                <h1 className="mt-4 txt text-4xl font-bold tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:mt-6 xl:text-6xl">
                  Premium Personalized Kundali
                </h1>
                <p className="text-sm mt-4 sm:text-xl lg:text-base xl:text-lg">
                  Connect to Astrologer on call/ chat/ query and get answers
                  to all your worries through Astrology Kundli Predictions from
                  the best Astrologers from India.
                </p>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <Image
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/bg-1.png"
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our services */}

      <div className="mt-24 sm:mt-60 md:mt-56 lg:mt-20 ">
        <h2 className="text-3xl txt md:text-4xl text-center font-bold">
          {" "}
          Our Services
        </h2>
        <div className=" mt-12 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:pb-28 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kundali Consultation
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg ">
                  Kundali is nothing but the planetary position prevailing at
                  the time of your birth. These planetary positions are
                  represented in the form of a chart so that they can be used
                  for future reference. Even it is used for making future
                  predictions by a number of astrologers. It will give you a
                  brief idea about your life, success, relationships, work-life
                  balance, and many more. Thereby you can have knowledge about
                  the problems that your life is going to face in likely future.
                  Even solutions for these problems will be provided to you to
                  simplify your life while facing them. Would you like to have a
                  premium kindli? Contact us and get your kundli prepared in
                  simple steps.
                </p>
              </div>
              <div className="my-6 flex items-center space-x-3">
                <span className="text-6xl font-semibold text-black txt" > 25</span>
                <div className="flex flex-col">
                  <span className="text-yellow-500 text-xl font-medium">
                    {" "}
                    years of{" "}
                  </span>
                  <span className="text-3xl font-semibold text-black"> Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="px-8 md:pl-32 pr-6 lg:-ml-16 lg:relative lg:m-0 lg:h-[80%] lg:mt-12 lg:px-0">
              <img
                className=" rounded-xl shadow-xl  ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/kundli.png"
                alt="kundali"
              />
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mx-auto p-8 pt-24 sm:pt-12  md:px-0 sm:max-w-2xl lg:max-w-5xl ">
        {CardData.map((item,index) => (
          <div key={index} className=" bg-white rounded-2xl px-5   max-w-sm py-5 shadow-2xl ">
            <img src={item.icon} className='mx-auto'/>
            <h2 className="font-semibold text-2xl text-center text-black">{item.title}</h2>
            <p className="pb-6 text-center text-black"> {item.desc}</p>
          </div>
        ))}
        </div>
      </div>
   
    </div>
  );
}
