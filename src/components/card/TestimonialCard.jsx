import { FaStar } from "react-icons/fa";
import testimonial1 from "./../../assets/testimonials/testimonial1.webp"
export default function TestimonialCard(){
  return (
    <>
      <div className="flex gap-6 p-4 max-w-xl mx-auto w-full md:flex-row">
  {/* Foto + Rating */}
  <div className="flex flex-col flex-shrink-0">
    <img 
      src={testimonial1} 
      alt="Testimonial"
      className="rounded-lg object-cover w-full aspect-square md:aspect-auto" 
    />
    <div className="flex justify-center mt-4">
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-100 text-teal-600">
        <FaStar className="text-orange-300" />
        <span className="text-base font-semibold">5.0</span>
      </div>
    </div>
  </div>

  {/* Teks Testimoni */}
  <div className="flex-1 flex flex-col justify-center gap-4 min-w-0">
    <p className="inline-flex items-center px-4 py-2 rounded-lg bg-teal-100 text-teal-600 text-sm md:text-base font-medium w-fit">
      Al Nasr Umrah
    </p>
    <div className="text-start">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
        Humaira Khaira
      </h2>
      <p className="mt-2 text-base text-gray-700 leading-relaxed">
        I am very satisfied with Al Nasr Travel's service, starting from when we arrived in Saudi until we returned to Indonesia. We provide very good service.
      </p>
    </div>
  </div>
</div>
    </>
  )
}
