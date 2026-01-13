import { FaPlaneDeparture } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { PiBuildingsFill } from "react-icons/pi";
import { GrVisa } from "react-icons/gr";
import package1 from "./../../assets/packages/package1.webp";

export default function Card({
  pic, title, type, description, price
}) {
  return (
    <div className="shadow-md bg-white py-6 rounded-2xl overflow-hidden w-full max-w-sm mx-auto flex flex-col h-full">
      {/* Gambar - tetap ratio yang bagus */}
      <div className="px-5">
        <img
          src={pic}
          alt="Package"
          className="w-full h-62 object-cover rounded-xl"
        />
      </div>

      {/* Bronze + Best Seller */}
      <div className="ps-5 mt-4 flex justify-between items-center">
        <h3 className="text-md sm:text-lg font-bold text-orange-400">{title}</h3>
        <div className="px-6 py-2 bg-teal-100 text-teal-600 rounded-l-full text-lg sm:text-xl font-bold">
          {type}
        </div>
      </div>

      {/* Detail paket */}
      <div className="px-5 mt-4 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800">
          {description}
        </h2>

        <p className="mt-4 text-2xl font-bold text-slate-800">
          {price}
          <span className="text-teal-600"> person</span>
        </p>

        {/* Icons */}
        <div className="mt-4 flex gap-3">
          <div className="p-3 bg-teal-100 rounded-xl">
            <FaPlaneDeparture className="w-6 h-6 text-teal-600" />
          </div>
          <div className="p-3 bg-teal-100 rounded-xl">
            <HiTicket className="w-6 h-6 text-teal-600" />
          </div>
          <div className="p-3 bg-teal-100 rounded-xl">
            <GrVisa className="w-6 h-6 text-teal-600" />
          </div>
          <div className="p-3 bg-teal-100 rounded-xl">
            <PiBuildingsFill className="w-6 h-6 text-teal-600" />
          </div>
        </div>

        {/* Button - tetap di bawah */}
        <button
          className="
            mt-4 w-full py-3.5 rounded-lg text-sm font-semibold
            border-2 border-orange-300 text-orange-300
            hover:bg-orange-300 hover:text-white
            transition-all duration-300
          "
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
