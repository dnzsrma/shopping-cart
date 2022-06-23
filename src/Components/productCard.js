/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

export default class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = ({
            quantity: 1
        })
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart = () => {
        let quantity = this.state.quantity;
        let addCart = this.props.func;
        let cart = this.props.cart();
        let changeQuantity = this.props.changequantity;
        if(cart.length > 0){
            for(let i=0 ; i < cart.length ; i++){
                if(cart[i].product.id === this.props.product.id){
                    changeQuantity(i,this.state.quantity);
                    return
                }
            }
        }
        for(let i = 0 ; i < quantity ; i++){
            addCart({
                product:this.props.product,
                quantity: parseInt(this.state.quantity)
            });
        }
        console.log(cart);
    }

    setQuantity = (e) => {
        this.setState({
            quantity : e.target.value ,
        })
    }

    render(){
        return(
                <div className="item-cards" key={this.props.product.id}>
                    <h3>{this.props.product.title.toString().toUpperCase()}</h3>
                    <img style={{height:'auto',width:'60%',border:'1px solid black'}} alt="No Image." src={this.props.product.images[0]}></img>
                    <h5>Price: {this.props.product.price}$</h5>
                    <div className="hidden-card">
                        {this.props.product.description}
                        <button onClick={this.addToCart}>Add Cart</button>
                        <input onChange={this.setQuantity} className="quantityInput" type="number"></input>
                        </div>
                </div>
        )
    }

}