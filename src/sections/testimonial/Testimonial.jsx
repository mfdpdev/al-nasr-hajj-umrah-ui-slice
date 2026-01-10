import TestimonialCard from "../../components/card/TestimonialCard";
import Marquee from "react-fast-marquee";

export default function Testimonial(){
  return (
    <>
      <section className="">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-end lg:text-5xl font-bold text-gray-900">
      Testimonial from our customers
    </h1>
    <div className="mt-4 text-lg sm:text-xl text-gray-600 w-full flex justify-center md:justify-end">
      <p className="max-w-3xl">
        We have 100.000+ customers, here are our customer testimonials
      </p>
    </div>

    <div className="mt-12 space-y-8 overflow-hidden">
      {/* Marquee Atas – ke kiri */}
      <Marquee speed={50} gradient={false} className="py-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="mx-4">
            <TestimonialCard />
          </div>
        ))}
      </Marquee>

      {/* Marquee Bawah – ke kanan + sedikit delay visual */}
      <Marquee 
        speed={45} 
        direction="right" 
        gradient={false} 
        className="py-4"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i + 10} className="mx-4">
            <TestimonialCard />
          </div>
        ))}
      </Marquee>
    </div>
  </div>
</section>
    </>
  )
}
