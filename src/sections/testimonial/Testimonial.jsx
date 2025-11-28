import TestimonialCard from "../../components/card/TestimonialCard";
import Marquee from "react-fast-marquee";

export default function Testimonial(){
  return (
    <>
      <div>
        <h1>Testimonial from our customers</h1>
        <p>We have 100.000+ customers, here are out customer testimonials</p>
        <div className="flex flex-col gap-6">
          {/* Marquee Atas */}
          <Marquee speed={40} gradient={false}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Marquee>

          {/* Marquee Bawah — lebih lambat + delay supaya posisinya beda */}
          <Marquee speed={40} gradient={false} direction="right">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Marquee>
        </div>
      </div>
    </>
  )
}
