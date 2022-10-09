import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logo.webp'
import { AiOutlineBars } from 'react-icons/ai';


const navbar = () => {
  
    return (
    <div>
      <section id='header'>
        <nav className= "navbar navbar-expand-sm d-flex flex-column justify-content-start">
          <img src={logo} alt="" className='my-3' style={{width:"3%"}} />
        <div className="container-fluid my-3 navbar-extended">
            <button className="navbar-toggler m-auto" type="button" data-bs-toggle="collapse" style={{color:'black', fontSize:'28px'}} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars/>
               <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
             <ul className="navbar-nav d-flex justify-content-center w-100">
              
              <li className="nav-item">
              <Link to="/#services"  style={{color:'black'}} className="nav-link">HOME</Link>
              </li>
              <li className="nav-item">
              <Link to="/#naerang"  style={{ 
                animation: "blinkingTextGold 1s infinite",
                color: "#D4AF37",
                transition: "ease all 0.5s",
                fontWeight: "bold"
            }} className="nav-link"      
>ONLINE EDITION</Link>
              </li>
              <li className="nav-item">
              <Link to="/men"  style={{color:'black'}} className="nav-link">MEN</Link>
              </li>
              <li className="nav-item">
              <Link to="/women"  style={{color:'black'}} className="nav-link">WOMEN</Link>
              </li>
              <li className="nav-item">
              <Link to="/boys"  style={{color:'black'}} className="nav-link">BOYS</Link>
              </li>
              <li className="nav-item">
              <Link to="/girls"  style={{color:'black'}} className="nav-link">GIRLS</Link>
              </li>
              <li className="nav-item">
              <Link to="/makeupandfragrances"  style={{color:'black'}} className="nav-link">MAKEUP & PERFUMES</Link>
              </li>

              
            </ul>
           </div>
        </div>
        </nav>
           
      
         </section>
    </div>
    )
}

export default navbar
