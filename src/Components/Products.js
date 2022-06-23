import { useState , useEffect } from "react";
import Card from "./productCard";

const Products = (addCart) => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    },[]);


    function getAllProducts(){
        fetch("https://api.escuelajs.co/api/v1/products",{ 
            method:'GET', 
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }

    return(
        <div id="Products" >
            <div id="products-grid-container">
            {products.map((x,i) =>
                <Card func={addCart.addCart} changequantity={addCart.changeQuantity} cart={addCart.showCart} product={x} key={i}/>
            )}
            </div>
        </div>
    )
}

export default Products;