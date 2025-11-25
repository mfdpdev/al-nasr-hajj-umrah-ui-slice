export default function Button({ children }){
  return (
    <button className="px-8 py-4 bg-orange-300 text-sm rounded-lg 
      transition-transform transform hover:scale-105">
      {children}
    </button>
  )
}
