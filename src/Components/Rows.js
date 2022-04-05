import React from 'react'
import Product from "./Product"
import Others from "./Others"
import Drops from "./Drops"
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import {Link} from "react-scroll"
import Newsletter from './Newsletter'






function Rows() {

  return (
    <>
    <div className="container mx-auto px-6 text-neutral-800 mt-5">
      <h1 className="font-bold text-3xl lg:text-4xl">Products</h1>
      <Product />
      <h1 className="font-bold text-3xl lg:text-4xl mt-8">Drops</h1>
      <Drops />
      <h1 className="font-bold text-3xl lg:text-4xl mt-8">Others</h1>
      <Others  />
      

      <Link className="sticky md:hidden bottom-2" to="Header" spy={true} smooth={true} offset={0} duration={500}>
      <ChevronDoubleUpIcon className="w-8 h-8 cursor-pointer bottom-2 sticky left-full animate-bounce  text-black" />
      </Link>

    </div>

    <Newsletter />
    </>
  )
}

export default Rows