import { FaStar } from "react-icons/fa";
import testimonial1 from "./../../assets/testimonials/testimonial1.png"
export default function TestimonialCard(){
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto w-100">
  <div className="flex flex-col w-full md:w-auto">
    <img src={testimonial1} className="rounded-lg overflow-hidden w-full" />
    <div className="flex grow justify-center items-center mt-2">
      <div className="flex mx-auto items-center px-3 py-2 rounded-lg bg-teal-100 text-teal-600 w-fit gap-2">
        <FaStar className="text-orange-300" />
        <span className="text-sm md:text-base font-semibold">5.0</span>
      </div>
    </div>
  </div>
  <div className="flex-1 flex flex-col gap-4">
    <p className="flex p-2 rounded-lg bg-teal-100 text-teal-600 w-fit gap-2 text-sm md:text-base font-medium">
      Al Nasr Umrah
    </p>
    <div>
      <h2 className="text-lg md:text-xl font-semibold">Humaira Khaira</h2>
      <p className="text-sm md:text-base text-gray-700">
        I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.
      </p>
    </div>
  </div>
</div>
    </>
  )
}
