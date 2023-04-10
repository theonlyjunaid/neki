import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
<header className="text-gray-600 body-font shadow-md">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                 
                  <span className="ml-3 text-xl">E-neki ki deewar</span>
              </Link>
              <nav className="md:ml-auto md:mr-10vw text-lg flex flex-wrap items-center gap-5 justify-center">

                    <Link href="/feed"><div className="mr-5 text-blue-500 font-bold hover:text-green-700">Feed</div></Link>
                    <Link href="/need"><div className="mr-5 hover:text-gray-900">Need</div></Link>
                    <Link href="/#gallery"><div className="mr-5 hover:text-gray-900">Gallery</div></Link>
                    <Link href="/blog"><div className="mr-5 hover:text-gray-900">Blogs</div></Link>
                    <Link href="/#contact"><div className="mr-5 hover:text-gray-900">Contact</div></Link>

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