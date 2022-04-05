import React from "react";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom"
import ProductDetail from "./Components/ProductDetail";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Main from "./Components/Main"
import Aos from "aos"
import "aos/dist/aos.css"





function App() {

  React.useEffect(() => {
    Aos.init({duration: 1000})
  
  },[])

  

  const [cartItems, setCartItems] = React.useState([])
 

  function addToCart(newItem) {
    const exist = cartItems.find((x) => x.id === newItem.id)
    if (exist) {
      console.log("Product already added")
    } else {
      
      setCartItems(prevState => 
        [...prevState, newItem])
    } 
  }

  

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

let totalCartPrice = 0
 cartItems.map((item, index) => totalCartPrice += item.price * item.qnt)

  


  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar totalCartPrice={totalCartPrice} />
      <div className="grow">
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/products/:productId" element={<ProductDetail addToCart={addToCart} cartItems={cartItems}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} totalCartPrice={totalCartPrice} setCartItems={setCartItems} />} />
        </Routes>

        
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
