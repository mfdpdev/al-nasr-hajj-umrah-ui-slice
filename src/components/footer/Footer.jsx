import { FaInstagram } from "react-icons/fa";
import logo2 from "./../../assets/logo2.png"
export default function Footer(){
  return (
    <>
      <footer className="bg-teal-600 text-white">
      <div className="px-6 pt-12 pb-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {/* Kolom Logo + Deskripsi */}
          <div className="col-span-2 lg:col-span-2">
            <img src={logo2} alt="Logo" className="w-1/2 mb-4" />
            <p className="text-sm leading-relaxed max-w-md">
              Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
            </p>
          </div>

          {/* 4 Kolom Quick Link — tetap persis */}
          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Flight Accommodation</a></li>
              <li><a href="#" className="hover:underline">Facilities</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Package Umrah</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Al Nasr Umrah Bronze</a></li>
              <li><a href="#" className="hover:underline">Al Nasr Umrah Silver</a></li>
              <li><a href="#" className="hover:underline">Al Nasr Umrah Gold</a></li>
              <li><a href="#" className="hover:underline">Al Nasr Umrah Priority</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Package Hajj</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Al Nasr Hajj Diamond</a></li>
              <li><a href="#" className="hover:underline">Al Nasr Hajj Platinum</a></li>
              <li><a href="#" className="hover:underline">Al Nasr Hajj Priority</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Office Place</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Indonesia</a></li>
              <li><a href="#" className="hover:underline">Saudi Arabia</a></li>
              <li><a href="#" className="hover:underline">Uni Emirates Arab</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright + Social — tetap di bawah */}
        <hr className="border-white/30 my-8 max-w-7xl mx-auto" />
        <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-24 max-w-7xl mx-auto text-sm">
          <p>Copyright © 2006 - {new Date().getFullYear()} Al Nasr Travel | All Rights Reserved</p>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <div className="p-2 bg-white rounded-lg hover:bg-gray-100 transition">
              <FaInstagram className="text-teal-600 text-lg" />
            </div>
            <div className="p-2 bg-white rounded-lg hover:bg-gray-100 transition">
              <FaInstagram className="text-teal-600 text-lg" />
            </div>
            <div className="p-2 bg-white rounded-lg hover:bg-gray-100 transition">
              <FaInstagram className="text-teal-600 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
