/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState , useEffect } from "react";

const Checkout = (showCart) => {

    const [total,setTotal] = useState(0);

    useEffect(() => {
        const cart = showCart.showCart();
        for(let i = 0 ; i < cart.length ; i++){
            setTotal(prevTotal => prevTotal + (parseInt(cart[i].product.price * cart[i].quantity)/2));
        }
      },[]);

    let CartArray = showCart.showCart();

    function clearCart(){
        showCart.clearCart();
    }


    return(
        <div id="Checkout">
                {CartArray.length === 0 &&
                    <h1>No items in cart.</h1>
                }
                {CartArray.length > 0 &&
                    <div id="Cart">
                        <h1>MY CART</h1>
                        {CartArray.map( (x,i) =>
                            <div className="cartItem" key={x.product.id}>
                            <img style={{height:'auto',width:'40px',border:'1px solid black'}} alt="No Image." src={x.product.images[0]}></img>
                            <div>Quantity: {x.quantity}</div>
                            <div>{x.product.title}</div>
                            <div>Price: {x.product.price}</div>
                        </div>
                        )}
                        <div id="total-div">
                            <h2>TOTAL:</h2>
                            <h3>{total} $</h3>
                        </div>
                        <div id="cart-buttons">
                            <button>Checkout</button>
                            <button onClick={clearCart} >Clear Cart</button>
                        </div>
                        
                    </div>
                }
        </div>
    )
}

export default Checkout;