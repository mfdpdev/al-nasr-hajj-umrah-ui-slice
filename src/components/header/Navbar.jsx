import Button from "../button/Button"
import logo from "./../../assets/Logo.png"
export default function Navbar(){
  return (
    <>
      <nav className="z-99 bg-white text-slate-700 fixed left-0 top-0 w-full py-2 flex justify-center items-center">
        <div className="w-7xl px-6 flex justify-between items-center">
          <div>
            <img src={logo} alt="al-nasr" className="w-3/4" />
          </div>
          <ul className="flex space-x-6">
            <li className="hover:text-orange-300">Home</li>
            <li className="hover:text-orange-300">About Us</li>
            <li className="hover:text-orange-300">Package</li>
            <li className="hover:text-orange-300">Facilities</li>
            <li className="hover:text-orange-300">Gallery</li>
          </ul>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </nav>
    </>
  )
}
