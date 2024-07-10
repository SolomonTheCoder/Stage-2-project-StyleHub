import "./style/Navbar.css"
import {Link} from "react-router-dom"
import logo from "./images/logo-skype_svgrepo.com (1).png"

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
<div className="nav-logo">
  <img src={logo} alt="" />
  <h2>StyleHub</h2>
</div>
<div className="nav-tags">
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/Discover">Discover</Link></li>
  <li><Link to="/Cart">Cart</Link></li>
  <li><Link to="/Favourite">Favourite</Link></li>
  <li><Link>Setting</Link></li>
</ul>
</div>
    </div>
    </>
  )
}

export default Navbar