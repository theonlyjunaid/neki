import React from 'react'

const Galary = () => {
    return (
        <section className="text-gray-600 body-font"
            id='gallery'
        >
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                        The Beauty of Sharing and Caring
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        The beauty of sharing and caring is that it is not just about giving. It is also about receiving. It is about the joy of giving and the joy of receiving. It is about the joy of sharing and the joy of caring. It is abo
                    </p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/images/1.jpeg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                         
                            <video width="320" height="240"
                                className="w-full h-full object-cover object-center block"
                                muted
                                loop
                                autoPlay
                                src='/images/11.mp4'

                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="/images/4.jpeg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="/images/7.jpeg"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/images/3.jpeg"
                            />

                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/images/10.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Galary