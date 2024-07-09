import { Products } from "./Products"
import "../style/See_all.css"
import cart from "../images/shopping-cart (1).png"
import arrow from '../images/Vector (4).png'
import heart from "../images/heart (1).png"
import { Link } from "react-router-dom"

const See_all = () => {
  return (
    <>
      <div className="Search-menu">
      <div className="back">
         <Link to="/Home"><img src={arrow} alt="" /></Link>
         <p>See all</p> 
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
   <div className="Product_card">
{ Products.map(product =>{
  return(
    <div key={product.id} className="Card">
     <div className="Card-img">
     <img src={product.image}  alt=""  />
     </div>
     <div className="Card-detail">
      <div className="Card-name">
     {product.name}
     </div>
     <div className="Rate">
      <div className="rate-stars">
<img src={product.rate} alt="" />
<img src={product.rate} alt="" />
<img src={product.rate} alt="" />
<img src={product.rate} alt="" />
<img src={product.rate} alt="" />
</div>
<p>(1000+)</p>
     </div>
  <div className="Card-price">
    <div className="price">
         ${product.price}
         </div>
       <div className="discount">
         {product.discount}%
      </div>
   </div>
    </div>
    <button><Link to="/Cart">Add to cart</Link></button>
    </div>
  )
})}
   </div>
    </>
  )
}

export default See_all