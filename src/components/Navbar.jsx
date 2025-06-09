import "../Styles/navbar.css"

function Navbar() {
  return (
        <div className='container'>
            <div className='options-container'>
                <img src='https://i.ibb.co/bMnyybKN/allen.png' className='logo'></img>
                <h1 className='option'>Courses</h1>
                <h1 className='option'>Test Series</h1>
                <h1 className='option'>Results</h1>
                <h1 className='option'>Courses</h1>
                <h1 className='option'>Study Materials</h1>
                <h1 className='option'>Scholarships</h1>
                <h1 className='option'>Books</h1>
            </div>
            <div>
                <button className='option1'>Login</button>
            </div>
        </div>
  )
}

export default Navbar