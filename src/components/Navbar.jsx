import "../Styles/navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
        <div className='container'>
            <div className='options-container'>
                <Link to = "/"><img src='https://i.ibb.co/bMnyybKN/allen.png' className='logo'></img></Link>
                <Link to="/Class-12" className="option">Courses</Link>
                <Link to="/Test-series" className="option">Test Series</Link>
                <Link to="/Results" className="option">Results</Link>
                <Link to="/More" className="option">More</Link>
            </div>
            <div>
                <button className='option1'>Login</button>
            </div>
        </div>
  )
}

export default Navbar