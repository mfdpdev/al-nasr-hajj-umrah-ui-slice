import Card from "../../components/card/Card";

export default function Package() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
          Al Nasr Special Umrah and Hajj Packages
        </h1>

        <p className="text-center text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
          Choose your package according to your needs — guaranteed cheap and complete facilities
        </p>

        {/* Grid Responsif - Maksimal 3 kolom, jarak lebih manusiawi */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 lg:gap-12 
          mt-12
        ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* Tambah lagi juga tetap rapi */}
        </div>
      </div>
    </section>
  );
}
