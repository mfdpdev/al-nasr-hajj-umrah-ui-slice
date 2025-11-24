import logo from "./../../assets/Logo.png"
export default function Navbar(){
  return (
    <>
      <nav className="text-slate-700 mx-6 flex justify-between items-center">
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
          <button className="px-8 py-4 bg-orange-300 text-sm rounded-lg">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  )
}
