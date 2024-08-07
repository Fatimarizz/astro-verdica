import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contactus' }
];
const sideNavigation =[
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contactus' },
  {name:'Desclaimer ' , href :'/desclaimer'},
  {name:'Term & Conditions ' , href :'/terms-and-conditions'},
  {name:'Privacy Policy ' , href :'/privacy-policy'}
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-green-600 border-b-2 '>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 py-4 p-1.5 '>
            <span className='sr-only'>Your Company</span>
            <Image className='h-8 w-auto ' height={300} width={300} src='/logo.png' alt='' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12 '>
          {navigation.map((item,i) => (
            <div className='relative' key={i}>
              <Link key={item.name} href={item.href} className=' test  '>
                <p className='font-semibold leading-6 text-white py-4'>
               
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel
          focus='true'
          className='fixed inset-y-0 right-0 z-10 w-[50%] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
        >
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image src="/logo.png" className='w-28' height={300} width={300}/>
             
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {sideNavigation.map((item) => (
                  <Link

                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg  py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
