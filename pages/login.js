import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
      <section className="text-gray-600 flex justify-center body-font py-20">

              
              <div className="max-w-[500px]  bg-gray-100 rounded-lg p-8  md:mx-auto w-full mt-10 md:mt-0">
                  <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
Login
                  </h2>
               
                  <div className="relative mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                            Password
                        </label>
                        <input

                            type="password"
                            id="password"
                            name="password"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    
                  <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded w-full text-lg">
                      Login
                  </button>
                    <p className='my-1'>
                        Don't have an account? <Link href="/signup" className="text-indigo-500">Signup</Link>
                    </p>


             
              </div>

      </section>

  )
}

export default Login