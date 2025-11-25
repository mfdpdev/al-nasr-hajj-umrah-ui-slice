import { FaPlaneDeparture } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { PiBuildingsFill } from "react-icons/pi";
import { GrVisa } from "react-icons/gr";

import package1 from "./../../assets/packages/package1.png"

export default function Card(){
  return (
    <>
      <div className="shadow-md bg-white rounded-xl overflow-hidden space-y-4">
        {/* Gambar */}
        <div className="px-3 sm:px-4 pt-3 sm:pt-4">
          <img 
            src={package1} 
            alt="Package" 
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Bronze + Best Seller */}
        <div className="ps-3 sm:ps-4 font-bold flex justify-between items-center">
          <div className="text-orange-400 text-xl sm:text-lg md:text-xl">
            <h3>Bronze</h3>
          </div>
          <div className="p-1.5 sm:p-3 px-6 sm:px-8 bg-teal-100 text-teal-600 rounded-l-full text-sm sm:text-xs md:text-sm">
            <h3>Best Seller</h3>
          </div>
        </div>

        {/* Detail paket */}
        <div className="px-3 sm:px-4 pb-6 space-y-4">
          <h2 className="font-bold text-lg sm:text-base md:text-xl text-slate-800">
            Al Nasr Special Umrah 9 Days
          </h2>

          <p className="font-bold text-xl sm:text-lg md:text-xl text-slate-800">
            $ 1.950/ 
            <span className="text-base sm:text-xs md:text-sm text-teal-600">person</span>
          </p>

          {/* Icons */}
          <ul className="flex flex-wrap gap-4 sm:gap-4.5">
            <div className="p-2.5 sm:p-2 bg-teal-100 rounded-xl flex-shrink-0">
              <FaPlaneDeparture className="w-5 h-5 sm:w-4 h-4 md:w-4.5 md:h-4.5 text-teal-600" />
            </div>
            <div className="p-2.5 sm:p-2 bg-teal-100 rounded-xl flex-shrink-0">
              <HiTicket className="w-5 h-5 sm:w-4 h-4 md:w-4.5 md:h-4.5 text-teal-600" />
            </div>
            <div className="p-2.5 sm:p-2 bg-teal-100 rounded-xl flex-shrink-0">
              <GrVisa className="w-5 h-5 sm:w-4 h-4 md:w-4.5 md:h-4.5 text-teal-600" />
            </div>
            <div className="p-2.5 sm:p-2 bg-teal-100 rounded-xl flex-shrink-0">
              <PiBuildingsFill className="w-5 h-5 sm:w-4 h-4 md:w-4.5 md:h-4.5 text-teal-600" />
            </div>
          </ul>

          {/* Button */}
          <button
            className="
              px-6 sm:px-5 py-3 sm:py-2.5
              text-sm sm:text-xs md:text-sm font-semibold rounded-lg
              bg-white border-2 border-orange-300 text-orange-300
              hover:bg-orange-300 hover:text-white
              transition-all duration-300 transform
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}
