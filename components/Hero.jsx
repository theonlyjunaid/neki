import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
      <section className="text-gray-600 body-font"
      id='hero'
      >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src="https://media.istockphoto.com/id/1178491739/vector/cardboard-box-with-books-for-donations-charity-concept-hand-giving-a-book.jpg?s=612x612&w=0&k=20&c=uY2Tj6sCiIQiBr25br7HtXhFWFXXmEJHXdQpE0lN9ec="
                  />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    We are here to help you
                      <br className="hidden lg:inline-block" />
                      You can donate or ask for help
                  </h1>
                  <p className="mb-8 leading-relaxed">
                      Whether you're looking to give back or in need of assistance, there are resources available. Giving to a charity or cause can help those less fortunate, while seeking help is a brave step towards taking care of yourself. Remember, it's okay to ask for help and give help when you can.

                
                  </p>
                  <div className="flex justify-center">
                   <Link href="/feed"> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Feed
                      </button></Link>  
                      <Link href="/need"> <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Need
                      </button></Link>  
                  </div>
              </div>
          </div>
      </section>

  )
}

export default Hero