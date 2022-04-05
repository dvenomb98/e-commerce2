import React from 'react'
import {HeartIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import {Link} from "react-router-dom"



function Navbar({totalCartPrice}) {



  return (
    
        <header className="py-6 shadow-sm shadow-slate-300 sticky top-0 w-full z-50 bg-white md:relative">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/"><h1 className="text-4xl font-bold text-green-600">CeBeDe</h1></Link>
                <div className="flex flex-row gap-2 md:gap-5 items-center justify-center">
                  <Link to="/cart"> 
                      <ShoppingCartIcon className="w-8 h-8 text-neutral-800 hover:text-green-600" />
                  </Link>
                  {totalCartPrice > 0 ? 
                    <p className="font-bold">{totalCartPrice.toFixed(2)} $</p> 
                    : ""}
                  
                </div>
            </div>
            
        </header>


    

    
  )
}

export default Navbar