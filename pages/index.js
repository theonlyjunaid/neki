import Contact from "@/components/Contact"
import Galary from "@/components/Galary"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"

const index = () => {
  return (
    <div className="">
      <Hero/>
      <Galary/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default index