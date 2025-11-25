import Navbar from "./components/header/Navbar"
import AboutUs from "./sections/about-us/AboutUs"
import Facilities from "./sections/facilities/Facilities"
import Home from "./sections/home/Home"
import Package from "./sections/package/Package"

function App() {

  return (
    <>
      <div className="mx-auto max-w-7xl flex flex-col space-y-18">
        <Navbar />
        <Home />
        <AboutUs />
        <Package />
        <Facilities />
      </div>
    </>
  )
}

export default App
