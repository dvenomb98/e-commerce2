import React from 'react'
import drops from "../drops"
import {Link} from "react-router-dom"
import "aos/dist/aos.css"


function Drops() {


  return (
    
    <div id="Drops" data-aos="fade" className="flex flex-col justify-center items-center md:flex-row md:gap-5 md:scrollbar-hide md:items-stretch lg:gap-5 md:justify-start md:overflow-visible md:overflow-y-hidden">
    {drops.map(prod => (
     
        
        <div key={prod.id} className=" flex flex-col gap-3 mt-5 md:w-64 h-contain shrink-0">
            <div className="overflow-hidden h-full">
            <img src={prod.img} alt="" />
            </div>
            <div className="text-center lg:text-left flex flex-col md:items-center gap-3 h-contain">
              <h2 className="text-xl font-bold ">{prod.title}</h2>
              <p className="font-light text-sm md:text-base">{prod.shortdesc}</p>
              {prod.stock ? 
              <p className="text-xl text-green-600 font-bold">Available</p> : 
              <p className="text-xl text-red-600 font-bold">Out of stock</p>
              }
              <p className="font-bold text-2xl">{prod.price}$</p>
              <Link key={prod.id} to={`/products/${prod.id}`}>
                  <button className="mt-2 border-2 font-bold border-neutral-800 px-3 py-2 
                  hover:bg-slate-100 transition ease-in-out">BUY NOW</button>
              </Link>
            </div>
         </div>
        
    ))}
    </div>
  )
}

export default Drops