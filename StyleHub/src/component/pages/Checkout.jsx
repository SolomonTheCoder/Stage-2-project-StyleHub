import { Products } from "./Products"
import cart from "../images/shopping-cart (1).png"
import arrow from '../images/Vector (4).png'
import heart from "../images/heart (1).png"
import { Link } from "react-router-dom"
import"../style/Checkout.css"

const Checkout = () => {
  return (
    <>
    <div className="Search-menu">
      <div className="back">
         <Link to="/Cart"><img src={arrow} alt="" /></Link>
         <p>Chart</p> 
      </div>
      <div className="Notification-bar">
        <div className="Heart">
          <img src={heart} alt="" />
        </div>
        <div className="Cart">
          <div className="cart-notification">
          </div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
<div className="Checkout">
    {Products.slice(0,1).map(product => {
        return(
            <div  key={product.id}>
            <div className="product">
                <div className="product-img">
                    <img src={product.image} alt="" />
                </div>
            <div className="product-detail">
                <div className="product-name">
             {product.name}
             </div>
             <div className="size">
              <p><b>Size:</b> M</p>
             </div>
            <div className="color">
           <p><b>Color:</b> Black</p>
            </div>
            <div className="product-price">
            <div className="price">
             ${product.price}
            </div>
            <div className="product-quatity">
<span className="subtract">-</span>
<span className="count">1</span>
<span className="add">+</span>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    })}
    {Products.slice(1,2).map(product => {
        return(
            <div  key={product.id}>
            <div className="product">
                <div className="product-img">
                    <img src={product.image} alt="" />
                </div>
            <div className="product-detail">
                <div className="product-name">
             {product.name}
             </div>
             <div className="size">
              <p><b>Size:</b> M</p>
             </div>
            <div className="color">
           <p><b>Color:</b> Black</p>
            </div>
            <div className="product-price">
            <div className="price">
             ${product.price}
            </div>
            <div className="product-quatity">
<span className="subtract">-</span>
<span className="count">1</span>
<span className="add">+</span>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    })}
</div>
<div className="Order-summary">
    <div className="Fee">
<div className="item" >
    <p><b>Items:</b></p>
</div>
<div className="subtotal">
    <p><b>Price subtotal:</b></p>
</div>
<div className="delivery fee">
    <p><b>Delivery fee:</b></p>
</div>
<div className="Discount">
    <p><b>Discount:</b></p>
</div>
<div className="total">
    <p><b>Total:</b></p>
</div>
</div>
<div className="Price">
<div className="item" >
    <p> 2 items</p>
</div>
<div className="subtotal">
    <p> $131.9</p>
</div>
<div className="delivery fee">
    <p>$30</p>
</div>
<div className="Discount">
    <p> $20</p>
</div>
<div className="total">
    <p>$181.9</p>
</div>
</div>
</div>
<div className="checkout-btn">
    <button><Link to="/Payment">Checkout</Link></button>
</div>
    </>
  )
}

export default Checkout