import { useState, useEffect } from "react"
import Button from "../button/Button"
import logo from "./../../assets/Logo.png"
export default function Navbar(){
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`z-50 fixed left-0 top-0 w-full ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="al-nasr" className="h-12 w-auto" />
          </div>

          {/* Menu Desktop */}
          <ul className="hidden sm:flex space-x-8 text-lg font-medium text-slate-700">
            <li className="hover:text-orange-500 transition">Home</li>
            <li className="hover:text-orange-500 transition">About Us</li>
            <li className="hover:text-orange-500 transition">Package</li>
            <li className="hover:text-orange-500 transition">Facilities</li>
            <li className="hover:text-orange-500 transition">Gallery</li>
          </ul>

          {/* Kontakt Desktop */}
          <div className="hidden sm:block">
            <Button>Contact Us</Button>
          </div>

          {/* Hamburger Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="relative h-8 w-8 focus:outline-none"
            >
              <span
                className={`hamburger-line origin-top-left transition-transform ${
                  nav ? 'rotate-45' : ''
                }`}
              />
              <span
                className={`hamburger-line transition-transform ${
                  nav ? 'scale-0' : ''
                }`}
              />
              <span
                className={`hamburger-line origin-bottom-left transition-transform ${
                  nav ? '-rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu - kalau mau dropdown */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            nav ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className={`px-6 ${scrolled ? "" : "bg-white/80 backdrop-blur-md"} py-4 shadow`}>
            <ul className="space-y-4 text-lg font-medium text-slate-700">
              <li>Home</li>
              <li>About Us</li>
              <li>Package</li>
              <li>Facilities</li>
              <li>Gallery</li>
              <li className="pt-4">
                <Button className="w-full">Contact Us</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
