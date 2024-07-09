import "./style/Home.css"
import Snap from "../component/images/camera (1).png"
import Search from "../component/images/search (1).png"
import Cart from "../component/images/shopping-cart (1).png"
import Bell from "../component/images/bell (1).png"
import homeImg from "../component/images/Desktop image (1).png"
import { Products } from "./pages/Products"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className="Search-menu">
      <div className="Snap">
         <img src={Snap} alt="" />
      </div>
      <div className="search-bar">
          <img src={Search} alt="" />
          <input type="search" name="search" id="search" placeholder="Search your style" />
      </div>
      <div className="Notification-bar">
        <div className="Cart">
          <div className="cart-notification">
          </div>
          <img src={Cart} alt="" />
        </div>
      <div className="Notification-bell">
          <img src={Bell} alt="" />
        </div>
      </div>
    </div>
   <div className="Home-section">
     <div className="Home-img">
      <img src={homeImg} alt="" />
     </div>
     <div className="Home-category">
       <ul>
        <li>Man</li>
        <li>Woman</li>
        <li>Kids</li>
        <li>Sport</li>
       </ul>
     </div>
   </div>
   <div className="Popular-section">
    <div className="popular-bar">
     <p>Popular</p>
     <p><Link to="/See_all">See all</Link></p>
    </div>
   </div>
   <div className="Product_card">
{ Products.slice(0,4).map(product =>{
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
    </div>
  )
})}
   </div>
    </>
  )
}

export default Home