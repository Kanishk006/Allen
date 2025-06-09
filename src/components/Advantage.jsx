import React from 'react'
import "../Styles/advantage.css"
function Advantage() {
  return (
    <div className='containeradvantage'>
        <h1 className = "head">ALLEN App Advantage</h1>
        <div className='middle'>
            <div className='part1'>
                <h1 className='ad1'>400+ Lakh Questions Practiced</h1>
                <h1 className='ad1'>10 Lakh+ hours of Learning Content consumed</h1>
                <h1 className='ad1'>10 Lakh+ hours of Learning Content consumed</h1>
                <h1 className='ad1'>10 Lakh+ Doubts Solved</h1>
            </div>
            <div className="part2">
                <img src = "https://i.ibb.co/XrH5XVcJ/poster4.jpg" className='image'></img>
            </div>
        </div>
        <button className='btn1'>Explore More</button>
    </div>
  )
}

export default Advantage