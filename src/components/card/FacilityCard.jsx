import { MdOutlineSecurity } from "react-icons/md";
export default function FacilityCard(){
  return (
    <>
      <div className="flex items-center md:items-start gap-4 sm:gap-5 bg-white shadow hover:shadow 
                p-4 sm:p-5 rounded-xl transition-shadow w-full">
  
  {/* Icon */}
  <div className="p-3 sm:p-2.5 bg-teal-100 rounded-lg sm:rounded-lg flex-shrink-0">
    {/* Mobile: besar (28px) → Tablet & Desktop: kecil (20px) */}
    <MdOutlineSecurity className="w-7 h-7 sm:w-5 sm:h-5 text-teal-600" />
  </div>

  {/* Teks */}
  <div className="text-left">
    {/* Mobile: besar → Tablet & Desktop: kecil & rapi */}
    <h3 className="font-bold text-base sm:font-semibold sm:text-sm lg:text-base text-slate-800 leading-tight">
      Safety & Security
    </h3>
    <p className="text-sm sm:text-xs lg:text-sm text-slate-600 sm:text-slate-500 mt-1 sm:mt-0.5 leading-relaxed sm:leading-snug">
      We take care of your security 24 hours a day
    </p>
  </div>
</div>
    </>
  )
}
