import FacilityCard from "../../components/card/FacilityCard";

export default function Facilities(){
  return (
    <>
      <section className="bg-teal-50 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-6 text-center space-y-8">

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
      Facilities We Provide For You
    </h1>

    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
      We provide comfort for our customers with various complete facilities we offer
    </p>

    {/* INI YANG BENER, 100% RESPONSIF + MAKS 4 KOLOM */}
    <div className="
      grid 
      grid-cols-1          /* Mobile: 1 kolom */
      sm:grid-cols-2       /* Tablet kecil: 2 kolom */
      md:grid-cols-3       /* Tablet besar: 3 kolom */
      lg:grid-cols-4       /* Desktop: 4 kolom → otomatis 2 baris kalau 8 card */
      gap-6 
      mt-10
    ">
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      <FacilityCard />
      {/* Tambah lagi juga aman, otomatis nambah baris */}
    </div>

  </div>
</section>
    </>
  )
}
