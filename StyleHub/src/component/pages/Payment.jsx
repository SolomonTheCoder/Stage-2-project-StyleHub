import cart from "../images/shopping-cart (1).png"
import arrow from '../images/Vector (4).png'
import heart from "../images/heart (1).png"
import car from "../images/car-side_svgrepo.com (1).png"
import bag from "../images/Vector (6).png"
import pay1 from "../images/Frame 60218 (1).png"
import pay2 from "../images/Frame 60219 (1).png"
import pay3 from "../images/Frame 60220 (1).png"
import"../style/Payment.css"
import { Link } from "react-router-dom"

const Payment = () => {
  return (
    <>
    <div className="Search-menu">
      <div className="back">
         <Link to="/Checkout"><img src={arrow} alt="" /></Link>
         <p>Checkout</p> 
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
    <div className="Order">
<div className="Delivery">
    <div className="get-delivery">
    <input type="checkbox" name="get delivery" id=" get delivery" />  
    <img src={car} alt=""/>
    <p> Get delivery</p>
    </div>
<div className="pickup">
<input type="checkbox" name="pickup" id="pickup" />
<img src={bag} alt="" />
<p>Pickup</p>
</div>
<div className="shipping-address">
<h2>Shipping address</h2>
<input type="text" name="address" id="address" />
</div>
</div>
<div className="Payment">
<h2>Payment information</h2>
<div className="payment-card">
<img src={pay1} alt="" />
<img src={pay2} alt="" />
<img src={pay3} alt="" />
</div>
<div className="card-number">
<h2>Card number</h2>
<input type="text" name="card-number" id="card-number" />
</div>
<div className="CVC">
<h2>CVC</h2>
<input type="text" name="CVC" id="CVC" />
</div>
</div>
 </div><div className="delivery-btn">
<button> 
<Link to="/Transation">Checkout</Link>
</button>
</div>
    </>
  )
}

export default Payment