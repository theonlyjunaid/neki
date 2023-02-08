import React,{useState} from 'react'

const feed = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('')
  const [pickup, setPickup] = useState('')
  return (
    <div>
      {/* <h1>Feed</h1>

      <p>Here is the feed</p> */}
      <form className='w-[500px] bg-gray-50 mx-auto my-5 shadow-lg rounded-md px-5 py-5' 
      
      >
        <div className='flex flex-col items-center'>
          <div className='flex flex-col w-full p-2'>
            <label className='text-gray-700'>Name</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
            />
          </div>
          <div className='flex flex-col w-full p-2'>
            <label className='text-gray-700'>Email</label>
            <input

              type='email'
              onChange={(e) => setEmail(e.target.value)}
              className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
            />
          </div>

          <div className='flex flex-col w-full p-2'>
            <label className=''>
            Donation Category
            </label>
            <select className='bg-white p-2 border rounded-md border-gray-300 focus:border-blue-500'
            onChange={(e) => setCategory(e.target.value)}
            >
  <option value="book">
Books
  </option>
  <option value="cloth">Cloths</option>
  <option value="food">
Food
  </option>
  <option value="money">
Money
  </option>

</select>
          </div>

      {( category === 'book' || category ==='cloth'||category ==='food') &&  <div className='flex flex-col w-full p-2'>
            <label className='text-gray-700'>Pickup address</label>
            <input
              type='text'
              onChange={(e) => setPickup(e.target.value)}
              className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2'
            />
          </div>}

          <div className='flex flex-col w-full p-2'>
          
            <label className='text-gray-700'>Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='border rounded-md border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 h-32 resize-none block'
            />
          </div>
          <div className='flex w-full p-2'>
            <button className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
          type='submit'
            >
              Proceed
            </button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default feed