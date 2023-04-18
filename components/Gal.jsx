import React from 'react'

const Gal = () => {
  return (
      <div className='bg-white h-max'>
          <div className='text-lg md:text-2xl lg:text-3xl font-semibold md:leading-relaxed lg:leading-[50px] mt-20 text-[#5a598d] text-center w-full mx-auto  max-w-[1400px]  px-5  py-5  relative  sm:pt-5 md:p-16 pb-8'>
            We are committed to provide basic necessities to individuals or communities that lack access to these resources. The project seeks to bridge the gap between the haves and the have-nots by providing books and clothing to those in need.
          </div>
          <div className=" w-full mx-auto  max-w-[1400px]  px-5  py-5  relative  sm:pt-5 md:p-16 ">
              <div className='w-full md:flex gap-10 md:w-[90%]'>
                  <img src="/hunger.jpeg"  className='shadow-xl w-[350px] md:scale-150 h-auto mx-auto md:ml-20' alt='image' />
                  <div className=''>
                      <div className='text-2xl md:text-5xl xl:text-4xl font-semibold px-5 md:leading-[90px] md:ml-10 mt-8 md:mt-10'>
                          Almost One out of 4 children in india is underweight due to hunger.   Be a hero for those.
                      </div>

                  </div>
              </div>
              <div className='w-full md:flex md:w-[90%] gap-10 md:pt-20 mt-14'>
                  <div className='hidden md:flex'>
                      <div className='text-2xl md:text-5xl xl:text-4xl font-semibold px-5 md:leading-[90px] md:ml-10 mt-8 md:mt-10'>

                          "Give a little, help a lot - donate to Project karuna and be the change!"
                      </div>

                  </div>
                  <img src="/booklet.jpeg" className='shadow-xl w-[350px] mx-auto md:ml-20' alt='image' />
                  <div className='md:hidden'>
                      <div className='text-2xl md:text-5xl xl:text-6xl font-semibold px-5 md:leading-[90px] mt-8 md:mt-20'>

                          "Give a little, help a lot - donate to Project karuna and be the change!"
                      </div>

                  </div>
              </div>
          </div>
      </div>
  )
}

export default Gal