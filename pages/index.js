import Contact from "@/components/Contact"
import Gal from "@/components/Gal"
import Galary from "@/components/Galary"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"

const index = () => {
  return (
    <div className="">
      <Hero/>
      {/* <Galary/> */}
      <Gal/>
      {/* <Testimonials/> */}
      <Contact/>
    </div>
  )
}

export default index