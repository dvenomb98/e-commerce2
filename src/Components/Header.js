import React from 'react'
import {Link} from "react-scroll"


function Header() {
  return (
    <div id="Header" className="bg-main bg-cover bg-center h-headerSm lg:h-header
    flex flex-col gap-6 justify-center items-center py-10">
    <h1 className="text-white text-4xl font-bold tracking-widest">TAKE IT EASY</h1>
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
      <Link className="w-full" to="News" spy={true} smooth={true} offset={-40} duration={500}>
        <button className="w-full font-bold text-white border-2 bg-transparent border-white  py-2 px-8  
        hover:bg-white hover:text-neutral-800
        transition ease-in-out">
        PRODUCTS
        </button></Link> 
      <Link className="w-full" to="Drops" spy={true} smooth={true} offset={-40} duration={500}>
        <button className="w-full font-bold text-white border-2 bg-transparent border-white  py-2 px-8  
        hover:bg-white hover:text-neutral-800
        transition ease-in-out">
        DROPS
        </button></Link> 
      <Link to="Others" spy={true} smooth={true} offset={-40} duration={500}>
        <button className="w-full font-bold text-white border-2 bg-transparent border-white  py-2 px-8  
        hover:bg-white hover:text-neutral-800
        transition ease-in-out">
        OTHERS
        </button>
      </Link> 
     </div>
    </div>
  )
}

export default Header