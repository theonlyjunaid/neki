import React, { useState } from 'react'

const CreateBlog = () => {
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        image: '',
        author: '',
        date: '',

    })
    const onChange = (e) => {
     
        setBlog({ ...blog, [e.target.name]: e.target.value })
        
    }
    const onSubmit = (e) => {
        e.preventDefault()
        fetch('/api/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
{
                title: blog.title,
                content: blog.body,
                image: blog.image,
                author: blog.author,
                date: blog.date,
}
            )
        }).then(res => res.json())
            .then(data =>{ console.log(data)
                alert('Blog Created')
            }).catch(err => {console.log(err)
                alert('Blog not Created')})
           
    }
    return (
        <div>
            <h1 className=" text-center text-4xl text-gray-800  "  >  Create Blog</h1>
            <div>
                <form className=" flex flex-wrap  px-10 " onSubmit={onSubmit}  >
                    <div className=" w-full  "     >
                        <div className="   relative "  >
                            <label htmlFor="title" className=" leading-7 text-sm text-gray-600 "     >         Title     </label>
                            <input 
                                onChange={onChange}
                                value={blog.title}
                            id="title" type="text" name="title" className=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                        </div>
                      


                        <div        className="  w-full "         >
                            <div
                                className="
                    relative
                    "
                            >
                                <label
                                    htmlFor="body"
                                    className="
                        leading-7 text-sm text-gray-600
                        "
                                >
                                    Body
                                </label>
                                <textarea
                                    id="body"
                                    type="text"
                                    name="body"
                                    value={blog.body}
                                    className="
                        w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                        "
                        onChange={onChange}
                                />
                            </div>
                            <div
                                className="
                         w-full
                        "
                            >
                                <div
                                    className="
                            relative
                            "
                                >
                                    <label
                                        htmlFor="author"
                                        className="
                                leading-7 text-sm text-gray-600
                                "
                                    >
                                        Author
                                    </label>
                                    <input
                                        id="author"
                                        type="text"
                                        value={blog.author}
                        onChange={onChange}
                                        name="author"
                                        className="
                                w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                                "
                                    />
                                </div>
                                <div
                                    className="
                            relative
                            "
                                >
                                    <label
                                        htmlFor="date"
                                        className="
                                leading-7 text-sm text-gray-600
                                "
                                    >
                                        Date
                                    </label>
                                    <input
                                        id="date"
                        onChange={onChange}
                                        type="date"
                                        name="date"
                                        value={blog.date}
                                        className="
                                w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                                "
                                    />
                                </div>
                                <div
                                    className="
                                 w-full
                                "
                                >
                                    <div
                                        className="
                                    relative
                                    "
                                    >
                                        <label
                                            htmlFor="image"
                                            className="
                                        leading-7 text-sm text-gray-600
                                        "
                                        >
                                            Image
                                        </label>
                                        <input
                                            id="image"
                        onChange={onChange}
                                            type="text"
                                            value={blog.image}
                                            name="image"
                                            className="
                                        w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                                        "
                                        />
                                    </div>
                                    <div
                                        className="
                                         w-full
                                        "
                                    >
                                        <button
                                            className="
                                           my-5 w-full  flex text-center justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg
                                            "
                                            type='submit'
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateBlog