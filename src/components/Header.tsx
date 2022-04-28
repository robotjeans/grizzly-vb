import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: FunctionComponent = () => {
  return (
    <header
      role="banner"
      className="fixed top-0 left-0 z-50 w-full transition-all duration-200 ease-in-out bg-white"
    >
      <div className="flex justify-between w-full h-full px-6 lg:px-10">
        <div className="mr-12 lg:justify-center md:flex">
          <div className="inline-flex items-center h-16 md:justify-between md:h-20">
            <Link href="/">
              <a className="block w-32 contain">
                <Image
                  src="/images/logo.svg"
                  alt="Grizzly Hauling Logo"
                  width={180}
                  height={70}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="items-center flex-grow hidden lg:flex">
          <nav className="items-center justify-start hidden lg:flex">
            <li className="relative block py-4 list-none">
              <Link href="/services">
                <a className="flex items-center justify-between pr-6 text-base font-semibold text-black transition-colors duration-200 ease-in-out xl:pr-8 hover:text-accent">
                  Services
                </a>
              </Link>
            </li>
            <li className="relative block py-4 list-none">
              <Link href="/faq">
                <a className="flex items-center justify-between pr-6 text-base font-semibold text-black transition-colors duration-200 ease-in-out xl:pr-8 hover:text-accent">
                  FAQs
                </a>
              </Link>
            </li>
            <li className="relative block py-4 list-none">
              <Link href="/contact">
                <a className="flex items-center justify-between pr-6 text-base font-semibold text-black transition-colors duration-200 ease-in-out xl:pr-8 hover:text-accent">
                  Contact
                </a>
              </Link>
            </li>
          </nav>
        </div>
        <div className="items-center justify-end hidden space-x-4 lg:flex">
          <Link href="tel:7579937283">
            <a className="w-auto py-3 font-semibold whitespace-pre hover:underline">
              <span className="pr-5 border-r text-red-600 border-grey">
                (757) 993-7283
              </span>
            </a>
          </Link>
          <button
            type="button"
            className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10"
          >
            Book Now
          </button>
        </div>
        <div className="z-50 flex items-center justify-center lg:hidden">
          <button className="z-50 flex items-center cursor-pointer focus:outline-none tg-hamburger">
            <div className="relative inline-block align-middle">
              <span className="absolute left-0 bg-black rounded-none"></span>
              <span className="absolute left-0 bg-black rounded-none"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
