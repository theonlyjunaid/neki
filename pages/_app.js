import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect,useState } from 'react'

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0)
  const IncCount = async () => {
    const res = await fetch('/api/count')
    const data = await res.json()
    console.log(data)
    setCount(data.count)
  }
  useEffect(() => {
  IncCount()
  }, [])
  return (<div className=''>
    <Navbar/>
    <div className='bg-white p-3 shadow-md border rounded-xl w-max h-max m-2 flex justify-end ml-auto'>
      <h1>Visitor Count: {count}</h1>
    </div>
    <Component {...pageProps} count={count} />
    <Footer/>
  </div>)
}
