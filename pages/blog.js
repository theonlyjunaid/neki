import React from 'react'
import mongoose from 'mongoose'
import Blog from '../model/Blog'

const blog = ({blogs}) => {
    console.log(blogs);
  return (
    <div>
        <h1
        className='
       mx-10 lg:mx-20 text-2xl md:text-4xl
        '
        >  Blogs
        </h1>
{/* <div className='container  mx-auto  '>
              <div className=' md:flex border gap-5 w-[800px] mx-auto'>
                  <img src="https://static.wixstatic.com/media/0e0314_0a37b8770f5342f58fbad16bf83bc330~mv2.png/v1/fit/w_869%2Ch_496%2Cal_c%2Cq_80,enc_auto/file.jpg" className='w-[40%]' alt="" />
<div className='w-[60%]'>
<h1 className='text-2xl'>Title</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
</p>
<p className='text-sm'>Date</p>

</div>
</div>
</div> */}
          <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-10 lg:py-24 mx-auto">
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    {
                        blogs.map((blog ,index)=> (
                            <div className="py-8 flex flex-wrap md:flex-nowrap gap-5 cursor-pointer" key={index}
                            onClick={
                                ()=> {
                                    if(typeof window !== 'undefined')
                                    window.location.href = `/${blog._id}`
                                }
                            }
                            >
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col object-contain">
                                    <img src={blog.image} className='max-w-[90vw]' alt="" />
                                    {/* <span className="font-semibold title-font text-gray-700">
                                  CATEGORY
                              </span>
                              <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span> */}
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
{
    blog.title
}
                                    </h2>
                                    <p className="leading-relaxed">
                                       {
                                             blog.content.slice(0, 200)
                                       }
                                    </p>
                                    <span className="mt-1 text-gray-500 text-sm">
                                        {
                                            blog.date.split("-").reverse().join("-")
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                        ).reverse()
                    }
                     
                  </div>
              </div>
          </section>


    </div>
  )
}

export default blog


export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
   let blogs = await Blog.find({  })
    return {
        props: { blogs: JSON.parse(JSON.stringify(blogs)) },
    }
}
