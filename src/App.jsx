import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
import AboutUs from "./sections/about-us/AboutUs"
import Airplane from "./sections/airplane/Airplane"
import Facilities from "./sections/facilities/Facilities"
import Gallery from "./sections/gallery/Gallery"
import Home from "./sections/home/Home"
import Package from "./sections/package/Package"
import Testimonial from "./sections/testimonial/Testimonial"

function App() {

  return (
    <>
      <div className="mx-auto w-full space-y-18">
        <Navbar />
        <div className="mx-auto max-w-7xl">
          <Home />
          <AboutUs />
          <Package />
          <Airplane />
        </div>
        <Facilities />
        <div className="mx-auto max-w-7xl">
          <Testimonial />
          <Gallery />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
