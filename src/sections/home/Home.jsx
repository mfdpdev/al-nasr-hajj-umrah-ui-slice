import Button from "../../components/button/Button";
import hero from "./../../assets/hero.webp"

export default function Home(){
  return (
    <>
      <main className="mx-6 py-30 flex flex-col lg:flex-row items-center text-slate-700 gap-10 lg:gap-16">
        <div className="flex-1 flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <p className="w-fit mx-auto lg:mx-0 text-xs sm:text-sm px-5 py-2 bg-teal-100 text-teal-700 rounded-full font-medium">
            No. 1 in Indonesia
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Make it easy for your Umrah worship with <span className="text-teal-600">Al Nasr Travel</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Facilitate your Umrah pilgrimage with us — we already have hundreds of thousands of happy customers. 
            You can go for Umrah to Mecca and Medina anytime with full support.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex-1 relative order-1 lg:order-2 w-full flex justify-center items-center">
          <div className="absolute h-2/3 sm:h-3/5 lg:h-2/3 w-full max-w-lg mx-auto bg-teal-500 rounded-2xl lg:rounded-3xl"></div>
          
          <div className="relative z-10 w-full flex justify-center">
            <img 
              src={hero} 
              alt="Umrah with Al Nasr Travel" 
              className="w-6/12 sm:w-5/12 lg:w-8/12 xl:w-7/12 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </main>
    </>
  )
}
