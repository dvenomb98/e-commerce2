
import React from 'react'
import {useParams} from "react-router-dom"
import products from "../products"
import {ShoppingCartIcon, PlusCircleIcon, MinusCircleIcon} from "@heroicons/react/outline"
import "aos/dist/aos.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"

function ProductDetail({ addToCart, cartItems}) {

  const [disabled, setDisabled] = React.useState(false)
  
 
  
  const notify = () => toast.success('Product succesfully added to shopping cart!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    const notifyFail = () => toast.error('Product is already added to shopping cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    function alert() {
      products.filter(prod => prod.id === productId).map(prod => {
        const exist = cartItems.find((x) => x.id === prod.id)
        if (exist) {
          notifyFail()
        } else {
          notify()
          
        } 
      })

      }

  function disableBtn() {
    setDisabled(true)
   

    setTimeout(() => {
      setDisabled(false)

    }, 5000)
  }

  
  const { productId } = useParams()

  return (
    <div data-aos="fade" className="container mx-auto px-6 text-neutral-800 mt-5">
    <h2 className="font-bold text-2xl text-left lg:text-4xl">Product detail</h2>
  {products.filter(prod => prod.id === productId).map((prod, index) => (
    <div key={prod.id} className="flex flex-col items-center justify-center text-center mt-5 gap-2 md:gap-5 text-sm md:text-base md:flex-row md:items-center 2xl:text-left ">
            <img className=" md:w-3/6 lg:w-1/2" src={prod.img} alt="" />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold lg:text-3xl">{prod.title}</h2>
              <p className="font-light text-left">{prod.description}</p>
              <div className="md:flex md:items-center md:justify-end gap-5  2xl:justify-start">
                {prod.stock ? 
                <p className="text-xl text-green-600 font-bold">Available</p> : 
                <p className="text-xl text-red-600 font-bold">Out of stock</p>
                }
                <p className="font-bold text-2xl">{prod.price}$</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 md:items-end 2xl:items-start
              
              ">

                    
                
                    <button
                    disabled={!prod.stock || disabled}
                    onClick={() => {disableBtn();addToCart(prod);alert()}}
                    className="
                    mt-2 border-2 font-bold px-3 py-2 w-56 h-12
                    border-none transition ease-in-out hover:opacity-70
                    flex flex-row items-center justify-center 
                    md:w-64
                    
                    text-white bg-teal-700">
                      <span>
                        <ShoppingCartIcon className="w-5 h-5" />
                      </span>
                    ADD TO SHOPPING CARD
                    </button>
                    <Link to="/">
                    <button className="
                    flex items-center justify-center
                    border-2 border-neutral-800 px-3 py-2 w-56 md:w-64 h-12  font-bold hover:scale-105 transition ease-in-out">
                    BACK TO PRODUCTS
                    </button>
                    </Link>
              </div> 
            </div>
          </div>    
  ))}
          <ToastContainer />

    </div>


    




  )
}

export default ProductDetail