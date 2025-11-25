import Navbar from "./components/header/Navbar"
import AboutUs from "./sections/about-us/AboutUs"
import Home from "./sections/home/Home"

function App() {

  return (
    <>
      <div className="mx-auto max-w-7xl flex flex-col space-y-18">
        <Navbar />
        <Home />
        <AboutUs />
      </div>
    </>
  )
}

export default App
