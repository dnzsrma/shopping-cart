import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import { useState } from "react";


function App() {
  const [Cart,SetCart] = useState([]);

  function addCart(item){
    SetCart([...Cart, item]);
  }
  function showCart(){
    return Cart;
  }
  function changeQuantity(index,newQuantity){
    let newCart = [...Cart];
    let newQ = parseInt(newCart[index].quantity) + parseInt(newQuantity)
    if(newQ < 1){
      newCart = newCart.filter(items => items != newCart[index])
    }
    else{
      newCart[index].quantity = newQ;
    }
    SetCart(newCart);
  }
  function clearCart(){
    SetCart([]);
  }


  return (
    <div className="App">
      <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<Products addCart={addCart} changeQuantity={changeQuantity}showCart={showCart}/>} />
              <Route path="/checkout" element={<Checkout showCart={showCart} clearCart={clearCart} />} />
            </Routes>
    </div>
  );
}

export default App;
