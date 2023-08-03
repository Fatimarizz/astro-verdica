import React from 'react';

export default function PaymentSuccess() {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 ' />
      <div className=' max-w-screen  '>
        <div className='relative shadow-xl sm:overflow-hidden '>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-gradient-to-b from-yellow-400 to-green-700 mix-blend-multiply' />
          </div>
          <div className='relative py-16 px-6 sm:py-16 lg:py-20 lg:px-8'>
            <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block txt text-white'>
                Thank you For Purchase
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='text-black max-w-4xl p-7'>
          Order Placed Successfully.Kundli will be emailed within 48 hours.
        </p>
      </div>
    </div>
  );
}
