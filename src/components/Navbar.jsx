import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RepairTool from '../../public/repair-tool.svg';
import Garage from '../../public/garage.svg';

const leftNavigations = ['Apply', 'How it works', 'About us', 'Blog'];

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto border-gray-200 bg-white py-2.5 px-6 dark:bg-orange-600 md:my-4 md:w-11/12 md:rounded-3xl">
      <div className="flex flex-wrap items-center justify-between">
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 mr-auto flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {leftNavigations.map((title) => (
              <li key={title}>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black hover:text-white md:p-0"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <a className="flex">
            <Image src="/bumper-main.svg" width={130} height={40} />
          </a>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="relative">
              <Link href="/signup">
                <a className="block flex items-center py-2 pr-4 pl-3 text-black hover:fill-white hover:text-white md:p-0">
                  <span className="mr-2">Partner sign up</span>
                  <RepairTool height={20} width={24} />
                  <div className="absolute top-0 mt-px h-10 w-full rounded border-b-4 border-black bg-transparent hover:border-white" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className="block flex items-center py-2 pr-4 pl-3 text-black hover:fill-white hover:text-white md:p-0">
                  <span className="mr-2">Partner login</span>
                  <Garage height={20} width={24} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
