
const navigation = [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Disclaimer', href: '/desclaimer' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' },
  ]
  
  
  export default function Footer() {
    return (
      <footer className="" aria-labelledby="footer-heading">
     <div className='flex justify-center py-4 px-4 mx-auto max-w-7xl rounded-md'>
        <p className='bg-orange-100 text-xs sm:text-base md:text-base border-l-orange-500 border-l-4 p-4 text-orange-600 ' >
        About Us- verdicaastro.com is the best website for Astrology predictions. Connect to Astrologer on call/ chat/ query and get answers to all your worries through Astrology Kundli Predictions from the best Astrologers from India. 
        Get best future predictions related to Marriage, love life, Career or anything you wish to know.
        </p>
    </div>
        <div className="mx-auto  bg-green-600 max-w-screen p-4 md:px-6 md:pb-8 md:pt-16  lg:px-8 lg:pt-4">
        
          <div className=" md:flex md:items-center md:justify-between">
            
            <div className="flex space-x-1 sm:space-x-6 md:order-2">
              {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-xs  sm:text-sm font-normal leading-6 text-white">
              {item.name}
            </a>
          ))}
            </div>
            <p className="mt-8 text-sm font-normal  text-white md:order-1 md:mt-0">
              &copy; 2023 Kurkur Eretail Private Limited, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  