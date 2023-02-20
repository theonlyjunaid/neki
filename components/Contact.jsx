

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mrgvqqve");
    if (state.succeeded) {
        return <p className='
        text-center text-2xl
        text-green-500
        '>Thanks for Contacting Us</p>;
    }
    return (
        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
            <div className="p-2 w-1/2">
                  <div className="relative">
                          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                               Name
                            </label>
           
            <input
                id="name"
                type="text"
                name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            </div>
            </div>
            <div className="p-2 w-1/2">
                      <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            </div>
            </div>
            <div className="p-2 w-full">
                      <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
            </label>

            <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            </div>
            </div>
            <div className="p-2 w-full">
            <button type="submit" disabled={state.submitting} className="flex  mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
            </button>
            </div>
        </form>
    );
}
function Contact() {
    return (
              <section className="text-gray-600 body-font relative"
              id='contact'
              >
          <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                      Contact Us
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        We are always happy to hear from you. Please feel free to contact us for any queries.
                  </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <ContactForm />
                  </div>
           </div>
      </section>
    );
}
export default Contact;