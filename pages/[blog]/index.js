import React from 'react'
import mongoose from 'mongoose'
import Blog from '../../model/Blog'

const index = ({blogs}) => {
    console.log(blogs)
  return (
    <div>
       <div className='container grid grid-cols-1 mx-auto my-10'>
<div className='mx-auto'>
    <img src={
        blogs.image
    } 
    className='max-w-[90vw]'
    alt="" />
                  <span className='mt-1 text-gray-500 text-sm py-3'>
                      {
                          blogs.date.split("-").reverse().join("-")
                      }

                  </span>
                  <span className='mt-1 text-gray-500 text-sm mx-5 py-3'>
                      {
                          blogs.author
                      }

                  </span>

</div>
<div className='mx-auto w-full px-5 md:w-[70vw]'>
    <h1 className='text-2xl md:text-3xl font-semibold text-gray-900 title-font mb-2'>
        {
            blogs.title
        }
    </h1>
    <pre className='leading-relaxed' style={{
        whiteSpace: 'pre-wrap'
    }}>
        {
            blogs.content
        }
    </pre>
   



</div>
       </div>

    </div>
  )
}

export default index
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
    let blogs = await Blog.findOne({
        _id: context.params.blog
    })
    return {
        props: { blogs: JSON.parse(JSON.stringify(blogs)) },
    }
}
