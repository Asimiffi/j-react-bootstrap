import React, {useState} from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  const [modal, setmodal] = useState(false)
  return (
    <div id="footer" style={{ color: "black", overflowX:'hidden'}}>
      <div id='contact' className='bg-light d-flex justify-content-center align-items-center' style={{width:'100%', height:'60vh'}}>
        <div className="contact" style={{width: "80%", background:'black', height:'35vh', color:'white', display:'flex', justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
            <h4>Be the first</h4>
            <h6>New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</h6>
            <div>
           <form action="">
            <input type="text" placeholder='Enter your email address' />
            <button type="submit" onClick={()=>setmodal(true)} className="px-2 py-1 mx-2">Signup</button>    
            </form>
            </div>
            
        </div>
        <div className='popup-up'  style={{visibility: modal ? 'visible' : 'hidden'}}>
            <p>Thanks, we will get back to you</p>
            <br/>

             <button onClick={()=>setmodal(false)}>Go back</button>
             </div>
        </div>
   
      <div className="row bg-light">
        <div className="col-lg-3 col-md-6 col-sm-6 d-flex flex-column">
          
        <h3>NEED HELP?</h3>
        <p>+92 21 111 112 111 (9am - 10pm , Mon - Sat)</p>
        <p> eshop@junaidjamshed.com</p>
        </div>
        <div className="col-lg-3 col-md-6  col-sm-6 d-flex flex-column">
        <h3>CUSTOMER SERVICE</h3>
        
        
        <Link to="/delievery"> Delivery & Orders</Link>
        <Link to="/returns">Returns & Exchanges</Link>
        <Link to="/terms-and-conditions"> Terms & Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/payment-guidelines">Payment Guide</Link>
      </div>
      <div className="col-lg-3 d-lg-flex  d-sm-none flex-column">
        <h3>COMPANY</h3>
        <Link to="/about-us">About Us</Link>
        <Link to="/careers"> Careers</Link>
        <Link to="/history">History</Link>
        
      </div>
      <div className="col-lg-3 d-lg-flex d-sm-none flex-column">
        <h3>FOLLOW US</h3>
        <div>Instagram</div>
        <div>Facebook</div>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
