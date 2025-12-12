import FacilityCard from "../../components/card/FacilityCard";

import { MdOutlineSecurity } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";
import { GiHeartBeats } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";

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
      <FacilityCard
        IconProps={MdOutlineSecurity} 
        title="Safety & Security" 
        description="We take care of your security 24 hours a day"
      />
      <FacilityCard
        IconProps={FaLayerGroup} 
        title="Conseling" 
        description="Provide counseling to stay fit spiritually and religius"
      />
      <FacilityCard
        IconProps={IoCarOutline} 
        title="Vehicle In Suadi" 
        description="Bus and Car Vehicles While in Saudi"
      />
      <FacilityCard
        IconProps={GiHeartBeats} 
        title="Health In Saudi" 
        description="Free Health Facilities for every customer"
      />
      <FacilityCard
        IconProps={FaBed} 
        title="Hostel Rate 5" 
        description="5 star hotel accommodation every customer"
      />
      <FacilityCard
        IconProps={IoFastFood} 
        title="Food & Drink" 
        description="Provide food and drinks while in Saudi"
      />
      <FacilityCard
        IconProps={MdCardMembership} 
        title="Membership" 
        description="Obtain a membership card for each customer"
      />
      <FacilityCard
        IconProps={TbVaccine} 
        title="Vaccine" 
        description="Free meningitis vaccine for all customers"
      />
    </div>

  </div>
</section>
    </>
  )
}
