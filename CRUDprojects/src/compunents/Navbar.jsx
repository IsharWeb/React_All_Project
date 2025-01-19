import React from 'react'
const loginFunction = () => {
    const sty = document.getElementById('id01')
    sty.style.display = 'block'
    const log = document.getElementById('log')
    log.style.display = 'block'
}
function Navbar({ Login }) {
    return (
        <div>

            <div className="topnav">
                <span className="active" href="#home">Home</span>
                <span href="#news">News</span>
                <span href="#contact">Contact</span>
                <span href="#about" onClick={loginFunction} id='log' className="split">{Login}</span>
                {/* ? <button onClick={loginFunction} id='log' className="w-auto ">Login</button> */}

            </div>
        </div>
    )
}

export default Navbar