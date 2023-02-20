// import React, { useState } from 'react'
// import {data} from '../data'

// const need = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [desc, setDesc] = useState('')
//   const [message, setMessage] = useState('')
//   const [category, setCategory] = useState('')
//   const [drop, setDrop] = useState('')

//   console.log(data)
//   return (
//     <div>
//       <form className='w-[500px] bg-gray-50 mx-auto my-5 shadow-lg rounded-md px-5 py-5'

//       >
//         <div className='flex flex-col items-center'>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Name</label>
//             <input
//               type='text'
//               onChange={(e) => setName(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Email</label>
//             <input

//               type='email'
//               onChange={(e) => setEmail(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Phone</label>
//             <input

//               type='number'
//               onChange={(e) => setPhone(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>



//           <div className='flex flex-col w-full p-2'>
//             <label className=''>
//               Donation Category
//             </label>
//             <select className='bg-white p-2 border rounded-md border-gray-300 focus:border-blue-500'
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               < option value="select">
//                 Select
//               </option>
//               <option value="book">
//                 Books
//               </option>
//               <option value="cloth">Cloths</option>
//               <option value="food">
//                 Food
//               </option>
    
//             </select>
//           </div>
//           {(category === 'book' || category === 'cloth' || category === 'food') &&

//             <div className='flex flex-col w-full p-2'>
//               <label className='text-gray-700'>Description</label>
//               <input
//                 type='text'
//                 onChange={(e) => setDesc(e.target.value)}
//                 className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//               />
//               </div>

//           }
//           {desc.length>5 && <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Drop address</label>
//             <input
//               type='text'
//               onChange={(e) => setDrop(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>}

//           <div className='flex flex-col w-full p-2'>

//             <label className='text-gray-700'>Message</label>
//             <textarea
//               onChange={(e) => setMessage(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 h-32 resize-none block'
//             />
//           </div>
//           <div className='flex w-full p-2'>
//             <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
//               type='submit'
//             >
//               Proceed
//             </button>
//           </div>
//         </div>

//       </form>
//     </div>
//   )
// }
// export default need

// import React,{useState} from 'react'

// const feed = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [message, setMessage] = useState('')
//   const [category, setCategory] = useState('')
//   const [pickup, setPickup] = useState('')
//   return (
//     <div>
//       {/* <h1>Feed</h1>

//       <p>Here is the feed</p> */}
//       <form className='w-[500px] bg-gray-50 mx-auto my-5 shadow-lg rounded-md px-5 py-5' 

//       >
//         <div className='flex flex-col items-center'>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Name</label>
//             <input
//               type='text'
//               onChange={(e) => setName(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Email</label>
//             <input

//               type='email'
//               onChange={(e) => setEmail(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>
//           <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Phone</label>
//             <input

//               type='number'
//               onChange={(e) => setPhone(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>



//           <div className='flex flex-col w-full p-2'>
//             <label className=''>
//             Donation Category
//             </label>
//             <select className='bg-white p-2 border rounded-md border-gray-300 focus:border-blue-500'
//             onChange={(e) => setCategory(e.target.value)}
//             >
//              < option value="select">
// Select
//   </option>
//   <option value="book">
// Books
//   </option>
//   <option value="cloth">Cloths</option>
//   <option value="food">
// Food
//   </option>
//   <option value="money">
// Money
//   </option>

// </select>
//           </div>

//       {( category === 'book' || category ==='cloth'||category ==='food') &&  <div className='flex flex-col w-full p-2'>
//             <label className='text-gray-700'>Pickup address</label>
//             <input
//               type='text'
//               onChange={(e) => setPickup(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
//             />
//           </div>}

//           <div className='flex flex-col w-full p-2'>

//             <label className='text-gray-700'>Message</label>
//             <textarea
//               onChange={(e) => setMessage(e.target.value)}
//               className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 h-32 resize-none block'
//             />
//           </div>
//           <div className='flex w-full p-2'>
//             <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
//           type='submit'
//             >
//               Proceed
//             </button>
//           </div>
//         </div>

//       </form>

//     </div>
//   )
// }

// export default feed




import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
function NeedForm() {
  const [state, handleSubmit] = useForm("mwkjoojp");
  const [category, setCategory] = useState('')

  if (state.succeeded) {
    return <><p className='
        text-center text-2xl
        text-pink-500
        '>
          We are happy to help you.
    </p>
      <p className='
        text-center text-2xl
        text-green-500
        '>
        We will get back to you very soon.
      </p>
    </>
  }
  console.log(state);
  return (
    <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
      <div className="p-2 w-full">
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
      <div className="p-2 w-full">
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
          <label htmlFor="number" className="leading-7 text-sm text-gray-600">
            Phone Number
          </label>
          <input
            id="number"
            type="number"
            name="number"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <ValidationError
            prefix="Number"
            field="number"
            errors={state.errors}
          />
        </div>
      </div>
      <div className='flex flex-col w-full p-2'>
        <label className="leading-7 text-sm text-gray-600" htmlFor='category'>
          Donation Category
        </label>
        <select
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out "

          onChange={(e) => setCategory(e.target.value)}
          id='category'
          name='category'

        >
          < option value="select">
            Select
          </option>
          <option value="book">
            Books
          </option>
          <option value="cloth">Cloths</option>
          <option value="food">
            Food
          </option>
      

        </select>
      </div>
      {(category === 'book' || category === 'cloth' || category === 'food') && <div className='flex flex-col w-full p-2'>
        <label className="leading-7 text-sm text-gray-600" htmlFor='pickup'>Pickup address</label>
        <input
          type='text'
          name='pickup'
          id='pickup'
          //  onChange={(e) => setPickup(e.target.value)}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "

        />
      </div>}
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
          {category === 'money' ? "Proceed to payment" : "Submit"}
        </button>
      </div>
    </form>
  );
}
function Need() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Need Form
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fill the form below to get help
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <NeedForm />
        </div>
      </div>
    </section>
  );
}
export default Need;