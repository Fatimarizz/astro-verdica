import "@/styles/globals.css";
import Header from "@/components/header";
import KundliFooter from "@/components/kundliFooter";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import { Philosopher } from "@next/font/google";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/footer";

const isBrowser = () => typeof window !== "undefined";
//The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
}

const inter = Inter({ subsets: ["latin"] });
// const philosipher = Philosopher({
//    subsets: ["latin"] ,
//    variable:'--font-philospher',
//    weight: ['400'      ],
// });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/kundli/checkout" ? null : <Header />}

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
      
      <button
        className="fixed bottom-4 right-10 p-1.5 rounded-md bg-green-600 "
        onClick={scrollToTop}
      >
        <ChevronUpIcon color="white" className="h-5 w-5" />
      </button>

      {router.pathname === "/kundli" ? (
        <KundliFooter />
      ) : router.pathname === "/kundli/checkout" ? null : (
        <Footer />
      )}
    </>
  );
}
