import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Input from "@/common/input";
import { KundliData } from "@/assets/PersonalizedKundli";
import { RadioGroup } from "@headlessui/react";
import { BookData } from "@/assets/BookData";
import Select from "@/components/Select";
import axios from "axios";
import { CheckIcon } from "@heroicons/react/24/outline";

import { Oval } from "react-loader-spinner";

const genderOptions = [
  { title: "male" },
  {
    title: "female",
  },
];
const time = [
  { title: "AM" },
  {
    title: "PM",
  },
];
const languages = ["Hindi", "English"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const checkOut = async (event) => {
  setLoading(true);
  event.preventDefault();
  const payload = {
    fullName,
    gender: gender?.title,
    day,
    month,
    year,
    hours: hrs,
    minutes: mins,
    period: period?.title,
    birthCity,
    state,
    language,
    whatsapp: phone,
    email,
    purpose: "Kundli Purchase",
    amount: "299",
  };
  const res = await axios.post("/api/order", payload);
  if (res.status === 200) {
    setLoading(false);
    window.location.href = res.data;
  } else {
    setLoading(false);
    alert("Try Again Something went wrong");
  }
};
export default function Index() {

  const [gender, setGender] = useState(genderOptions[0]);
  const [period, setPeriod] = useState(time[0]);
  const [fullName, setFullName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hrs, setHrs] = useState("");
  const [mins, setMins] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState(languages[0]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router= useRouter();
  
  return (
    <div className="bg-white">
      <div className="flex justify-center py-4 lg:px-0 px-8">
        <div>
          <div>
            <h1 className="text-center text-green-600 font-bold lg:text-5xl md:text-3xl text-2xl">
              KNOW YOUR <span className="text-yellow-500">KUNDLI,</span> KNOW
              YOUR
              <span className="text-yellow-500"> LIFE</span>
            </h1>
            <div className="my-4 flex justify-center">
              <h4 className=" font-semibold md:text-2xl text-lg bg-[#f9e341] text-center max-w-lg">
                Find out how to attract positivity and luck
              </h4>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/kundli-book.png"
                className="w-[14rem] sm:w-[23rem] md:w-[500px]"
                height={500}
                width={500}
                alt="kundli-book"
              />
            </div>
          </div>

          <div className="flex justify-center mx-8 sm:mx-0 my-7">
            <div className="border-slate-200 shadow-lg border-2 py-4 px-8 rounded-xl">
              <h2 className="font-bold text-2xl text-center">
                Make your personalized Kundli Now
              </h2>

              <h3 className="font-bold text-2xl text-center">
                <span className="line-through text-gray-600">₹1100</span>{" "}
                <span className="text-green-600"> ₹299/-</span>
              </h3>

              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={(e) => checkOut(e)}>
                  <div className="overflow-hidden ">
                    <div className="sm:flex sm:items-center ">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="sm:grid  sm:grid-cols-6 sm:gap-6 sm:space-y-0 space-y-4">
                          <div className="col-span-6 sm:col-span-6">
                            <Input
                              value={fullName}
                              setValue={setFullName}
                              text={"Full Name"}
                              type={"text"}
                              placeholder={"Full Name"}
                            />
                          </div>

                          <div className="sm:grid sm:col-span-3  sm:items-start  ">
                            <Input
                              text={"Day"}
                              value={day}
                              setValue={setDay}
                              type={"text"}
                              placeholder={"Day"}
                              className={"max-w-3xl"}
                            />
                          </div>

                          <div className="sm:grid sm:col-span-3 sm:items-start ">
                            <Input
                              text={"Month"}
                              type={"text"}
                              value={month}
                              setValue={setMonth}
                              placeholder={"Month"}
                              className={"max-w-lg"}
                            />
                          </div>

                          <div className="sm:grid sm:col-span-3  sm:items-start  ">
                            <Input
                              text={"Hrs"}
                              type={"text"}
                              value={hrs}
                              setValue={setHrs}
                              placeholder={"hours"}
                              className={"max-w-3xl"}
                            />
                          </div>

                          <div className="sm:grid sm:col-span-3 sm:items-start  ">
                            <Input
                              text={"Min"}
                              type={"text"}
                              value={mins}
                              setValue={setMins}
                              placeholder={"Minute"}
                              className={"max-w-lg"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid  gap-6 px-4  sm:px-6">
                        <div>
                          <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Gender
                            <span className="str ml-2">*</span>
                          </label>
                          <RadioGroup value={gender} onChange={setGender}>
                            <div className="space-x-2 rounded-2xl  flex">
                              {genderOptions.map((item) => (
                                <RadioGroup.Option
                                  key={item.title}
                                  value={item}
                                  className={({ checked }) => {
                                    return classNames(
                                      checked
                                        ? "bg-green-600 border-indigo-200 z-10"
                                        : "border-gray-200",
                                      "relative border p-2 px-3 flex rounded-lg bg-green-600 cursor-pointer focus:outline-none"
                                    );
                                  }}
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          checked
                                            ? "bg-green-600 border-transparent"
                                            : "bg-white border-gray-300",
                                          "ring-1 ring-offset-2 ",
                                          "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="rounded-full bg-white w-2 h-2" />
                                      </span>
                                      <span className="ml-3 flex ">
                                        <RadioGroup.Label
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-white"
                                              : "text-white",
                                            "block text-sm font-medium"
                                          )}
                                        >
                                          {item.title}
                                        </RadioGroup.Label>
                                      </span>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="sm:grid sm:col-span-3  sm:items-start  ">
                          <Input
                            value={year}
                            setValue={setYear}
                            text={"Year"}
                            type={"text"}
                            placeholder={"Year"}
                            className={"max-w-3xl"}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            AM / PM
                            <span className="str ml-2">*</span>
                          </label>
                          <RadioGroup value={period} onChange={setPeriod}>
                            <div className="space-x-2 rounded-2xl  flex">
                              {time.map((item) => (
                                <RadioGroup.Option
                                  key={item.title}
                                  value={item}
                                  className={({ checked }) =>
                                    classNames(
                                      checked
                                        ? "bg-green-600 border-indigo-200 z-10 "
                                        : "border-gray-200",
                                      "relative border p-2 text-white px-3 flex rounded-lg bg-green-600 cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          checked
                                            ? "bg-green-600 border-transparent"
                                            : "bg-white border-gray-300",
                                          "ring-1 ring-offset-2 ",
                                          "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="rounded-full bg-white w-2 h-2" />
                                      </span>
                                      <span className="ml-3 flex ">
                                        <RadioGroup.Label
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-white"
                                              : "text-white",
                                            "block text-sm font-medium"
                                          )}
                                        >
                                          {item.title}
                                        </RadioGroup.Label>
                                      </span>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-4 pt-6 sm:px-6 sm:pt-0 ">
                      <div className="sm:grid sm:grid-cols-10 sm:gap-6 sm:space-y-0 space-y-4">
                        <div className="sm:grid sm:col-span-5  sm:items-start  ">
                          <Input
                            value={birthCity}
                            setValue={setBirthCity}
                            text={"Birth City"}
                            type={"text"}
                            placeholder={"Birth City"}
                            className={"max-w-3xl"}
                            divclass={"mt-1 sm:grid sm:col-span-2 sm:mt-0"}
                          />
                        </div>

                        <div className="sm:grid sm:col-span-5 sm:items-start  ">
                          <Input
                            value={state}
                            setValue={setState}
                            text={"State"}
                            type={"text"}
                            placeholder={"state"}
                            className={"max-w-lg"}
                            divclass={"mt-1 sm:grid sm:col-span-2 sm:mt-0"}
                          />
                        </div>

                        <div className="sm:grid sm:col-span-5  sm:items-start  ">
                          <Select
                            options={languages}
                            value={language}
                            setValue={setLanguage}
                            text={"Language"}
                            type={"text"}
                            placeholder={"Language"}
                            className={"max-w-3xl"}
                            divclass={"mt-1 sm:grid sm:col-span-2 sm:mt-0"}
                          />
                          {/* <Input
                        value={language}
                        setValue={setLanguage}
                        text={'Language'}
                        type={'text'}
                        placeholder={'Language'}
                        className={'max-w-3xl'}
                        divclass={'mt-1 sm:grid sm:col-span-2 sm:mt-0'}
                      /> */}
                        </div>

                        <div className="sm:grid sm:col-span-5 sm:items-start  ">
                          <label
                            htmlFor="number"
                            className="block text-sm font-medium  text-gray-700 sm:mt-px sm:pt-2"
                          >
                            WatsApp No
                            <span className="str ml-2">*</span>
                          </label>

                          <div className="mt-1 sm:col-span-2 sm:mt-0  ">
                            <div className="flex">
                              <span className="inline-flex items-center font-bold px-3 text-sm text-gray-900 border-slate-200 border border-r-0 rounded-l-md  dark:text-gray-400 ">
                                +91
                              </span>
                              <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                type="phone"
                                id="website-admin"
                                className="max-w-lg  block w-full focus:border-none p-2  border-slate-200 border shadow-sm rounded-md rounded-l-none focus:border-orange-500 focus:ring-orange-500 sm:text-sm rounded-r-lg   text-gray-900   flex-1 min-w-0 text-sm   "
                                placeholder="Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sm:grid sm:col-span-10 sm:items-start  ">
                          <Input
                            value={email}
                            setValue={setEmail}
                            text={"Email"}
                            type={"email"}
                            placeholder={"Email"}
                            className={"max-w-3xl"}
                            divclass={"mt-1 sm:col-span-10 sm:grid sm:mt-0"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" px-4 py-3 text-center sm:px-6">
                      <button
                        disabled={loading}
                        type="submit"
                        className="inline-flex flex-col items-center mt-4 w-full rounded-md border border-transparent bg-green-700 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        {loading ? (
                          <Oval
                            height={40}
                            width={40}
                            color="#fff"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="oval-loading"
                            secondaryColor="#fff"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                          />
                        ) : (
                          <>
                            Yes! Make my Kundali
                            <span>
                              <span className="line-through">₹1100</span>{" "}
                              <span> ₹299/- Only!!</span>
                            </span>
                          </>
                        )}
                      </button>
                      <p className="text-xs font-light my-2">
                        * You will get Kundali on email within 48 Hours.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <iframe
                width="800"
                height="500"
                className="ml-9 w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[24rem] md:w-[800px] md:h-[500px]"
                src="https://www.youtube.com/embed/bMQ7skvFh1Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center">
           
              <button
                type="submit"
                className="inline-flex flex-col items-center mt-8  rounded-md border border-transparent bg-green-500 py-4 px-8 text-lg font-bold tracking-wide text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={()=>{
                router.push('kundli/checkout')
              }}
              >
                Yes! Make my Kundali
                <span>
                  <span className="line-through">₹1100</span>{" "}
                  <span> ₹299/- Only!!</span>
                </span>
              </button>
            </div>
            <p className="text-xs text-center font-light my-2">
              * You will get Kundali on email within 48 Hours.
            </p>
          </div>
          <div className="flex justify-center mx-8 sm:mx-0">
            <div className="py-8 ">
              <h2 className="  font-bold text-2xl">
                Your Premium Personalized Kundali Will Include :
              </h2>
              <div>
                {KundliData.map((item) => (
                  <div  key={item.id} className="flex items-center  space-x-5 space-y-3">
                    <div className="bg-green-500 rounded-md p-1 ">
                      <CheckIcon color="white" className="h-4 w-4 " />
                    </div>
                    <div>
                      <h3 className="font-bold py-2 ">{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-12 sm:mx-0">
            <div className=" max-w-4xl  ">
              <div className="relative shadow-xl rounded-3xl sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-green-700 mix-blend-multiply" />
                </div>
                <div className="relative py-4 px-6 sm:py-4 lg:py-4 lg:px-24">
                  <h1 className="text-center text-xl font-bold tracking-tight sm:text-3xl lg:text-3xl">
                    <span className="block txt text-white">
                      A complete astrological guide to your life!
                    </span>
                  </h1>
                  <div className="grid grid-cols-2 py-4 lg:pl-4">
                    <ul className="text-white list-disc sm:text-base text-sm ">
                      <li>180+ Pages in Horoscope</li>
                      <li>20 Years predictions</li>
                      <li>Kundli Darpan</li>
                      <li>Karak Awastha</li>
                      <li>Sudarshan Chakra</li>
                      <li>Sarvatobhadra Chakra</li>
                      <li>Planet readings</li>
                      <li>Dasha readings</li>
                      <li>K P System</li>
                      <li>ShodashVarga charts</li>
                    </ul>
                    <ul className="text-white list-disc sm:text-base text-sm">
                      <li>Shadbala and bhavabala</li>
                      <li>Shannadi Chakra</li>
                      <li>House predictions</li>
                      <li>Yoga predictions</li>
                      <li>Nakshatra Reading</li>
                      <li>Gem Therapy</li>
                      <li>Saturn’s period</li>
                      <li>Lucky Substitute Stones</li>
                      <li>Gem Selection</li>
                      <li>Rudhaksha prediction</li>
                      <li>and more items...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-8 sm:mx-0 ">
            <button
              type="submit"
              className="inline-flex flex-col items-center mt-8  rounded-md border border-transparent bg-green-500 py-4 px-8 text-lg font-bold tracking-wide text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={()=>{
                router.push('kundli/checkout')
              }}
            >
              Yes! Make my Kundali
              <span>
                <span className="line-through">₹1100</span>{" "}
                <span> ₹299/- Only!!</span>
              </span>
            </button>
          </div>
          <p className="text-xs text-center font-light my-2">
            * You will get Kundali on email within 48 Hours.
          </p>
          <div className="flex justify-center mx-8 sm:mx-0">
            <div className=" my-8 max-w-3xl">
              <h1 className="text-center font-bold  text-xl sm:text-3xl md:text-4xl">
                Here’s What Are Our Clients Have To Say About Our Services !
              </h1>
              <div className=" my-4 flex justify-center">
                <iframe
                  className="ml-9 w-[18rem] h-[12rem] sm:w-[33rem] sm:h-[18rem] md:w-[800px] md:h-[400px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OpChAvmpmt4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex justify-center">
                <iframe
                  className="ml-9 w-[18rem] h-[12rem] sm:w-[33rem] sm:h-[18rem] md:w-[800px] md:h-[400px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cLPq9aZUSis"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>{" "}
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:justify-center mx-12 pl-8 md:mx-0 md:px-0 md:space-x-8">
            <Image
              src="/mobile-1.png"
              height={300}
              width={300}
              className="w-56 sm:w-56"
              alt="mobile 1"
            />
            <Image
              src="/mobile-2.png"
              height={300}
              width={300}
              className="w-56 sm:w-56"
              alt="mobile 2"
            />
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="inline-flex flex-col items-center mt-8  rounded-md border border-transparent bg-green-500 py-4 px-8 text-lg font-bold tracking-wide text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={()=>{
                router.push('kundli/checkout')
              }} 
           >
              Yes! Make my Kundali
              <span>
                <span className="line-through">₹1100</span>{" "}
                <span> ₹299/- Only!!</span>
              </span>
            </button>
          </div>
          <p className="text-xs text-center font-light my-2">
            * You will get Kundali on email within 48 Hours.
          </p>

          <div className=" ">
            <div>
              <h2 className="text-center my-8 md:max-w-4xl font-bold lg:text-4xl md:text-3xl text-xl mx-2 sm:mx-0">
                ORDER NOW
                <span className="text-red-500 ml-2">
                  To Get FREE Bonuses WORTH
                  <span className="line-through ml-2">₹1,999!</span>{" "}
                </span>
                LIMITED PERIOD OFFER ONLY!!!
              </h2>
            </div>

            {BookData.map((item) => (
              <div key={item.id} className="border-red-500 border-2 my-8 mx-8  md:mx-auto max-w-xl space-y-4 ">
                <div className="bg-red-500 p-4 text-white text-lg font-semibold text-center">
                  {item.heading}
                </div>
                <div className="px-4">
                  <h2 className=" text-center text-2xl font-bold">
                    {item.subheading}
                  </h2>
                  <p className=" text-center text-2xl text-red-500 font-bold py-2">
                    {item.desc}
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src={item.img}
                      height={500}
                      width={500}
                      className="my-6"
                      alt='book'
                    />
                  </div>
                  <div className="my-4">
                    {item.details.map((det) => (
                      <div key={det.id} className="flex items-center ml-6   space-x-3 py-2 ">
                        <div className="bg-green-500 rounded-md p-0.5 ">
                          <CheckIcon color="white" className="h-4 w-4 " />
                        </div>
                        <div>
                          <p>{det}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="inline-flex flex-col items-center mt-8  rounded-md border border-transparent bg-green-500 py-4 px-8 text-lg font-bold tracking-wide text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={()=>{
                router.push('kundli/checkout')
              }}
           >
              Yes! Make my Kundali
              <span>
                <span className="line-through">₹1100</span>{" "}
                <span> ₹299/- Only!!</span>
              </span>
            </button>
          </div>
          <p className="text-xs text-center font-light my-2">
            * You will get Kundali on email within 48 Hours.
          </p>
        </div>
      </div>
    </div>
  );
}
