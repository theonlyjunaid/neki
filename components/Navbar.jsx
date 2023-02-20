import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
<header className="text-gray-600 body-font shadow-md">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                 
                  <span className="ml-3 text-xl">E-neki ki deewar</span>
              </Link>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  {/* <a className="mr-5 hover:text-gray-900">First Link</a> */}
                  <a className="mr-5 hover:text-gray-900">About us</a>
                  <a className="mr-5 hover:text-gray-900">Contact us</a>
                  {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
              </nav>
            {/* <Link href="/login"><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Login
                  <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                  >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
              </button></Link> */}
          </div>
      </header>

  )
}

export default Navbar