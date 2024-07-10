import { Link } from "react-router-dom"
import successs from "../images/correct.png"
import "../style/Transation.css"

const Transation = () => {
  return (
    <>
   <div className="transation">
<img src={successs} alt="" />
<h2>Transation successful</h2>
<button><Link to="/">Send receipt</Link></button>
   </div>
    </>
  )
}

export default Transation