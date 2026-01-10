import Button from "../../components/button/Button"
import aboutus from "./../../assets/about.webp"
import logo2 from "./../../assets/logo2.webp"

import { FaPlaneDeparture } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { PiBuildingsFill } from "react-icons/pi";
import { GrVisa } from "react-icons/gr";

export default function AboutUs(){
  return (
    <>
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* ================== GAMBAR KIRI ================== */}
          <div className="flex-1 flex items-center flex-col w-1/2 relative">
            <img 
              src={aboutus} 
              alt="Al Nasr Travel - Trusted Since 2006" 
              className="h-auto rounded-2xl drop-shadow-2xl"
            />
            <div className="absolute shadow-2xl w-1/2 bg-white bottom-0 translate-y-1/2 overflow-hidden rounded-md">
              <img src={logo2} alt="" className="" />
            </div>
          </div>

          {/* ================== TEXT + LIST KANAN ================== */}
          <div className="flex-1 flex flex-col space-y-8 text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              A Wonderful Agency To Fulfill Your <span className="text-teal-600">Dreams</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              The Hajj and Umrah pilgrimages are smooth, the heart is clean. We have been trusted since 2006 
              and have obtained an official license from Saudi Arabia to become your trusted travel partner.
            </p>

            {/* List Fitur */}
            <ul className="space-y-5">
              {[
                { icon: FaPlaneDeparture, text: "Flight Jakarta - Saudi Arabia (Round Trip)" },
                { icon: HiTicket, text: "Flight Tickets Included in Package" },
                { icon: PiBuildingsFill, text: "4-5 Star Comfortable Hotels Near Haram" },
                { icon: GrVisa, text: "Visa Processing & Fees Fully Covered" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="text-slate-700 font-medium pt-2">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Tombol */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Tombol Utama - Solid Teal */}
              <Button className="px-8 py-4 text-lg font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                Learn More
              </Button>

              {/* Tombol Kedua - Outline Kuning (yang kamu minta) */}
              <button className="
                px-8 py-4 text-sm rounded-xl 
                bg-white border-2 border-orange-300 text-orange-300
                hover:bg-orange-300 hover:text-white 
                transition-all duration-300 transform hover:scale-105
              ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
