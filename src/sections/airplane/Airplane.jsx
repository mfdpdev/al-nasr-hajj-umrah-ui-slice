import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import airplane1 from "./../../assets/airplanes/airplane1.png"
import airplane2 from "./../../assets/airplanes/airplane2.png"
import airplane3 from "./../../assets/airplanes/airplane3.png"
import airplane4 from "./../../assets/airplanes/airplane4.png"
import airplane5 from "./../../assets/airplanes/airplane5.png"

export default function Airplane(){
  return (
    <>
      <div className="mx-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold leading-tight">
            Airways Accommodation
          </h2>

          <p className="text-base sm:text-lg md:text-base text-gray-600">
            We cooperate with several airlines for Umrah and Hajj
          </p>

          <div className="flex mx-auto md:mx-0 p-3 px-6 rounded-lg bg-teal-100 text-teal-600 w-fit gap-2 items-center text-base sm:text-lg md:text-base">
            <FaStar className="text-orange-300 text-xl sm:text-2xl md:text-xl" />
            <span className="text-base sm:text-lg md:text-base">5.0 Rating</span>
          </div>
        </div>

        <div className="flex-2 w-full md:w-auto">
          <Marquee className="">
            <img
              src={airplane1}
              className="mx-10"
            />
            <img
              src={airplane2}
              className="mx-10"
            />
            <img
              src={airplane3}
              className="mx-10"
            />
            <img
              src={airplane4}
              className="mx-10"
            />
            <img
              src={airplane5}
              className="mx-10"
            />
          </Marquee>
        </div>
      </div>

    </>
  )
}
