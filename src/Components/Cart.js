import React from 'react'
import { XIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline'
import "aos/dist/aos.css"
import ReactLoading from 'react-loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Cart({cartItems, removeFromCart, totalCartPrice, setCartItems}) {

  const [placeText, setPlaceText] = React.useState("Place order")
  const [textPlaced, setTextPlaced] = React.useState(true)

  const notify = () => toast.success('Order was successful! Please check your email.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    delay: 3010
    });

  

  function placeOlder() {
    setPlaceText(<ReactLoading className=""type={'spinningBubbles'} color={'#000'} height={30} width={30} />)
    setTextPlaced(false)
    

    setTimeout(() => {
      setPlaceText("Place order")
      setTextPlaced(true)
      setCartItems([])
    }, 3000)
  
  }

  function addQuantity(id) {
    setCartItems(prevState => prevState.map(item => item.id === id
    ? { ...item, qnt: item.qnt + 1 }
    : item
    ))
    console.log(cartItems)
  }

  function removeQuantity(id) {
    setCartItems(prevState => prevState.map(item => item.id === id
    ? { ...item, qnt: item.qnt - 1 }
    : item
    ))
  }


  
  return (
    <div data-aos="fade" className="container mx-auto px-6 mt-3 text-neutral-800">
      <h2 className="font-bold text-2xl text-left mb-6 lg:text-4xl">Shopping cart</h2>
      {cartItems.length > 0 ? 
      <div className="flex flex-col gap-5">
        {cartItems.map(item => (
          <div className="text-sm md:text-lg flex flex-row justify-start items-center h-20 gap-2 pb-2 border-b-2 border-zinc-700">

            <div className="overflow-hidden h-full w-20">
              <img src={item.img} alt=""/>
            </div>

            <div className="flex flex-col grow md:flex-row">
            <h3 className="font-bold grow">{item.title}</h3>
              <div className="flex  items-center">
                <PlusCircleIcon onClick={() => addQuantity(item.id)} className="w-8 h-8 p-1 md:w-10 md:h-10 cursor-pointer " />
                <p className="font-bold border-2 border-neutral-800 px-2 rounded-md">{item.qnt}</p>
                <MinusCircleIcon onClick={() => item.qnt > 1 && removeQuantity(item.id)} className="w-8 h-8 p-1 md:w-10 md:h-10 cursor-pointer  " />
              </div>
            </div>
              
            <p className="font-bold">{(item.price * item.qnt).toFixed(2)} $</p>
            <XIcon onClick={() => removeFromCart(item.id)} className="w-4 h-4 md:w-10 md:h-10 md:p-2 text-red-600 cursor-pointer" />
          </div>
        ))}
          <h3 className="font-bold self-end ">Total: {totalCartPrice.toFixed(2)} $</h3>
          <button onClick={() => {placeOlder();notify()}} className={textPlaced ? 
            "font-bold self-end py-1 px-3 border-2 border-neutral-800 hover:scale-105 transition ease-in-out" : 
            "font-bold self-end"} >{placeText}</button>
           
            
          
      </div>
      : 
      <h3 className="font-bold text-left text-red-600 text-xl">Your shopping cart is empty</h3>}
      <ToastContainer />
      
      






    </div>
  )
}

export default Cart