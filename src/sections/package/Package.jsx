import Card from "../../components/card/Card";
import package1 from "./../../assets/packages/package1.webp";
import package2 from "./../../assets/packages/package2.webp";
import package3 from "./../../assets/packages/package3.webp";
import package4 from "./../../assets/packages/package4.webp";
import package5 from "./../../assets/packages/package5.webp";
    // <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">

export default function Package() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
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
          <Card pic={package1} title="Bronze" type="Best Seller" description="Al Nasr Special Umrah 9 Days" price="$ 1,950/ " />
          <Card pic={package2} title="Silver" type="Special Seller" description="Al Nasr Special Umrah 17 Days" price="$ 2,750/ " />
          <Card pic={package3} title="Gold" type="Long Trip" description="Al Nasr Special Umrah 25 Days" price="$ 4,250/ " />
          <Card pic={package4} title="Diamond" type="Best Seller" description="Al Nasr Special Hajj 30 Days" price="$ 20,000/ " />
          <Card pic={package5} title="Platinum" type="Special Offering" description="Al Nasr Special Hajj 30 Days" price="$ 25,000/ " />
          {/* Tambah lagi juga tetap rapi */}
        </div>
      </div>
    </section>
  );
}
