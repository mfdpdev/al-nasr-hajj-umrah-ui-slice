import image1 from "./../../assets/galleries/image1.png"
import image2 from "./../../assets/galleries/image2.png"
import image3 from "./../../assets/galleries/image3.png"
import image4 from "./../../assets/galleries/image4.png"
import image5 from "./../../assets/galleries/image5.png"

export default function Gallery(){
            // h-[500px] md:h-[600px]   /* biar tinggi tetap konsisten */
  return (
    <>
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Judul Section */}
          <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            Gallery Footage In Saudi Arabia
          </h1>
          
          <p className="text-base text-center md:w-1/2 sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comfort for our customers, with the various facilities we provide that we provide
          </p>

          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-[1fr_1.5fr] 
            gap-4
            mt-12
          ">
            {/* FOTO KIRI — gambar besar dengan animasi hover */}
            <div className="bg-red-200 rounded-lg overflow-hidden">
              <img
                src={image1}
                alt="Main Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* GRID KANAN — 4 FOTO SAMA BESAR dengan ratio persegi */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {[image2, image3, image4, image5].map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-fit"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
