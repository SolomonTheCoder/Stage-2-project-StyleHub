import { Products } from "./Products"
import "../style/Cart.css"
import cart from "../images/shopping-cart (1).png"
import arrow from '../images/Vector (4).png'
import heart from "../images/heart (1).png"
import { Link } from "react-router-dom"

const Cart = () => {
    
  return (
    <>
     <div className="Search-menu">
      <div className="back">
         <Link to="/See_all"><img src={arrow} alt="" /></Link>
         <p>Details</p> 
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
<div >
    {Products.slice(0,1).map(product => {
        return(
        <div className="Product-detail" key={product.id}>
            <div className="detail">
            <div className="detail-img">
              <img src={product.detail_img} alt="" />
            </div>
             <button><Link to="/Checkout">Add to cart</Link></button>
             </div>
        <div className="detail-info">
               <div className="detail-name">
               <p>{product.name}</p>
               </div>
    <div className="size">
        <h2>Size</h2>
        <ul>
         <li>XS</li>
         <li>S</li>
         <li>M</li>
         <li>L</li>
         <li>XL</li>
         <li>XXL</li>
        </ul>
    </div>
    <div className="detail-description">
    <h2>Description</h2>
    <p>Exude timeless elegance and sophistication in this stunning black gown. Crafted with luxurious fabric and tailored to perfection, this gown effortlessly captivates with its classic silhouette and refined details............ Read more</p>
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
        </div>
        )
    })}

</div>
    </>
  )
}

export default Cart