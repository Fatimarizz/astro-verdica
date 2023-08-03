
const navigation = [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Disclaimer', href: '/desclaimer' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contactus' },
  ]
  
  
  export default function KundliFooter() {
    return (
      <footer className="" aria-labelledby="footer-heading">
     
        <div className="mx-auto  bg-green-600 max-w-screen p-6 md:px-6 md:pb-8   lg:px-8 lg:pt-4">
        <div className="flex justify-center">
        <p className=' text-base md:text-base text-white py-8 md:py-5 ' >
        About Us- VerdicaAstro.com is the best website for Astrology predictions. Connect to Astrologer on call/ chat/ query and get answers to all your worries through <br/>
         Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or anything you wish to know.
        </p>
        </div>
        <div className="text-white mb-6 flex justify-center">
            <div className="space-y-6">
            <p><span className="font-bold">Address :</span> Kurkur Eretail Pvt. Ltd, Plot No 38, 3rd floor, Namdevnagar, Muktainagar – 425 306.</p>
     <p className="text-center"><span className="font-bold">Contact :</span> support@verdicastro.com, WhatsApp: +91-9529195776</p>
     </div>
        </div>
          <div className=" flex justify-center">
            <div className="space-y-6">
            <div className="flex  space-x-6  md:order-2">
              {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm   font-normal text-white">
              {item.name}
            </a>
          ))}
            </div>
            <p className="mt-8 text-sm text-center font-normal  text-white md:order-1 md:mt-0">
              &copy; 2023 Kurkur Eretail Private Limited
            </p>
          </div>
          </div>
        </div>
      </footer>
    )
  }
  