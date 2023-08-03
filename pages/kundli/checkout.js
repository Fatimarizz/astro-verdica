import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Input from '@/common/input';
import { RadioGroup } from '@headlessui/react';
import Select from '@/components/Select';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

const genderOptions = [
  { title: 'male' },
  {
    title: 'female'
  }
];
const time = [
  { title: 'AM' },
  {
    title: 'PM'
  }
];
const languages = ['Hindi', 'English'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Checkout() {
  const [gender, setGender] = useState(genderOptions[0]);
  const [period, setPeriod] = useState(time[0]);
  const [fullName, setFullName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [hrs, setHrs] = useState('');
  const [mins, setMins] = useState('');
  const [birthCity, setBirthCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState(languages[0]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
      purpose: 'Kundli Purchase',
      amount: '299'
    };
    const res = await axios.post('/api/order', payload);
    if (res.status === 200) {
      setLoading(false);
      window.location.href = res.data;
    } else {
      setLoading(false);
      alert('Try Again Something went wrong');
    }
  };
  return (
    <div className='bg-white  py-8'>
      <div className='flex justify-center'>
        <Image src='/logo.jpg' className='h-24 w-24' height={100} width={100} alt='logo'/>
      </div>
      <div className='flex justify-center mx-8 sm:mx-0 my-7'>
        <div className='border-slate-200 shadow-lg border-2 py-4 px-8 rounded-lg'>
          <h2 className='font-bold text-2xl text-center'>
            Make your personalized Kundli Now
          </h2>

          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form onSubmit={(e) => checkOut(e)}>
              <div className='overflow-hidden '>
                <div className='sm:flex sm:items-center '>
                  <div className='bg-white px-4 py-5 sm:p-6'>
                    <div className='sm:grid  sm:grid-cols-6 sm:gap-6 sm:space-y-0 space-y-4'>
                      <div className='col-span-6 sm:col-span-6'>
                        <Input
                          value={fullName}
                          setValue={setFullName}
                          text={'Full Name'}
                          type={'text'}
                          placeholder={'Full Name'}
                        />
                      </div>

                      <div className='sm:grid sm:col-span-3  sm:items-start  '>
                        <Input
                          text={'Day'}
                          value={day}
                          setValue={setDay}
                          type={'text'}
                          placeholder={'Day'}
                          className={'max-w-3xl'}
                        />
                      </div>

                      <div className='sm:grid sm:col-span-3 sm:items-start '>
                        <Input
                          text={'Month'}
                          type={'text'}
                          value={month}
                          setValue={setMonth}
                          placeholder={'Month'}
                          className={'max-w-lg'}
                        />
                      </div>

                      <div className='sm:grid sm:col-span-3  sm:items-start  '>
                        <Input
                          text={'Hrs'}
                          type={'text'}
                          value={hrs}
                          setValue={setHrs}
                          placeholder={'hours'}
                          className={'max-w-3xl'}
                        />
                      </div>

                      <div className='sm:grid sm:col-span-3 sm:items-start  '>
                        <Input
                          text={'Min'}
                          type={'text'}
                          value={mins}
                          setValue={setMins}
                          placeholder={'Minute'}
                          className={'max-w-lg'}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='grid  gap-6 px-4  sm:px-6'>
                    <div>
                      <label
                        htmlFor='gender'
                        className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                      >
                        Gender
                        <span className='str ml-2'>*</span>
                      </label>
                      <RadioGroup value={gender} onChange={setGender}>
                        <div className='space-x-2 rounded-2xl  flex'>
                          {genderOptions.map((item) => (
                            <RadioGroup.Option
                              key={item.title}
                              value={item}
                              className={({ checked }) => {
                                return classNames(
                                  checked
                                    ? 'bg-green-600 border-indigo-200 z-10'
                                    : 'border-gray-200',
                                  'relative border p-2 px-3 flex rounded-lg bg-green-600 cursor-pointer focus:outline-none'
                                );
                              }}
                            >
                              {({ active, checked }) => (
                                <>
                                  <span
                                    className={classNames(
                                      checked
                                        ? 'bg-green-600 border-transparent'
                                        : 'bg-white border-gray-300',
                                      'ring-1 ring-offset-2 ',
                                      'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                                    )}
                                    aria-hidden='true'
                                  >
                                    <span className='rounded-full bg-white w-2 h-2' />
                                  </span>
                                  <span className='ml-3 flex '>
                                    <RadioGroup.Label
                                      as='span'
                                      className={classNames(
                                        checked
                                          ? 'text-white'
                                          : 'text-white',
                                        'block text-sm font-medium'
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
                    <div className='sm:grid sm:col-span-3  sm:items-start  '>
                      <Input
                        value={year}
                        setValue={setYear}
                        text={'Year'}
                        type={'text'}
                        placeholder={'Year'}
                        className={'max-w-3xl'}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='time'
                        className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                      >
                        AM / PM
                        <span className='str ml-2'>*</span>
                      </label>
                      <RadioGroup value={period} onChange={setPeriod}>
                        <div className='space-x-2 rounded-2xl  flex'>
                          {time.map((item) => (
                            <RadioGroup.Option
                              key={item.title}
                              value={item}
                              className={({ checked }) =>
                                classNames(
                                  checked
                                    ? 'bg-green-600 border-indigo-200 z-10 '
                                    : 'border-gray-200',
                                  'relative border p-2 text-white px-3 flex rounded-lg bg-green-600 cursor-pointer focus:outline-none'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <span
                                    className={classNames(
                                      checked
                                        ? 'bg-green-600 border-transparent'
                                        : 'bg-white border-gray-300',
                                      'ring-1 ring-offset-2 ',
                                      'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                                    )}
                                    aria-hidden='true'
                                  >
                                    <span className='rounded-full bg-white w-2 h-2' />
                                  </span>
                                  <span className='ml-3 flex '>
                                    <RadioGroup.Label
                                      as='span'
                                      className={classNames(
                                        checked
                                          ? 'text-white'
                                          : 'text-white',
                                        'block text-sm font-medium'
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
                <div className='bg-white px-4 pt-6 sm:px-6 sm:pt-0 '>
                  <div className='sm:grid sm:grid-cols-10 sm:gap-6 sm:space-y-0 space-y-4'>
                    <div className='sm:grid sm:col-span-5  sm:items-start  '>
                      <Input
                        value={birthCity}
                        setValue={setBirthCity}
                        text={'Birth City'}
                        type={'text'}
                        placeholder={'Birth City'}
                        className={'max-w-3xl'}
                        divclass={'mt-1 sm:grid sm:col-span-2 sm:mt-0'}
                      />
                    </div>

                    <div className='sm:grid sm:col-span-5 sm:items-start  '>
                      <Input
                        value={state}
                        setValue={setState}
                        text={'State'}
                        type={'text'}
                        placeholder={'state'}
                        className={'max-w-lg'}
                        divclass={'mt-1 sm:grid sm:col-span-2 sm:mt-0'}
                      />
                    </div>

                    <div className='sm:grid sm:col-span-5  sm:items-start  '>
                      <Select
                        options={languages}
                        value={language}
                        setValue={setLanguage}
                        text={'Language'}
                        type={'text'}
                        placeholder={'Language'}
                        className={'max-w-3xl'}
                        divclass={'mt-1 sm:grid sm:col-span-2 sm:mt-0'}
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

                    <div className='sm:grid sm:col-span-5 sm:items-start  '>
                      <label
                        htmlFor='number'
                        className='block text-sm font-medium  text-gray-700 sm:mt-px sm:pt-2'
                      >
                        WatsApp No
                        <span className='str ml-2'>*</span>
                      </label>

                      <div className='mt-1 sm:col-span-2 sm:mt-0  '>
                        <div className='flex'>
                          <span className='inline-flex items-center font-bold px-3 text-sm text-gray-900 border-slate-200 border border-r-0 rounded-l-md  dark:text-gray-400 '>
                            +91
                          </span>
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            type='phone'
                            id='website-admin'
                            className='max-w-lg  block w-full focus:border-none p-2  border-slate-200 border shadow-sm rounded-md rounded-l-none focus:border-orange-500 focus:ring-orange-500 sm:text-sm rounded-r-lg   text-gray-900   flex-1 min-w-0 text-sm   '
                            placeholder='Number'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='sm:grid sm:col-span-10 sm:items-start  '>
                      <Input
                        value={email}
                        setValue={setEmail}
                        text={'Email'}
                        type={'email'}
                        placeholder={'Email'}
                        className={'max-w-3xl'}
                        divclass={'mt-1 sm:col-span-10 sm:grid sm:mt-0'}
                      />
                    </div>
                  </div>
                </div>
                <div className=' px-4 py-3 text-center sm:px-6'>
                  <button
                    disabled={loading}
                    type='submit'
                    className='inline-flex flex-col items-center mt-4 w-full rounded-md border border-transparent bg-green-700 py-2 px-4 text-lg font-semibold text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                  >
                    {loading ? (
                     <Oval
                     height={40}
                     width={40}
                     color="#fff"
                     wrapperStyle={{}}
                     wrapperClass=""
                     visible={true}
                     ariaLabel='oval-loading'
                     secondaryColor="#fff"
                     strokeWidth={2}
                     strokeWidthSecondary={2}
                   
                   />
                    ) : (
                      <>
                        Yes! Make my Kundali
                        <span>
                          <span className='line-through'>₹1100</span>{' '}
                          <span> ₹299/- Only!!</span>
                        </span>
                      </>
                    )}
                  </button>
                  <p className='text-xs font-light my-2'>
                    * You will get Kundali on email within 48 Hours.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
