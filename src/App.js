
import './App.css';
import Navbar from'./components/navbar';
import Home from './pages/Homepage';
import Delievery from './pages/Delievery';
import Returns from './pages/returns' 
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Payment from './pages/payment';
import Aboutus from './pages/aboutus';
import Career from './pages/career';
import Men from './pages/Men';
import Details from './pages/details';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { cartContext } from './context/cartContext';
import Careers from './components/careers';
import data from './components/data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


function App() {
  const [cartItem, setcartItem] = useState([
    {
      title: "",
      price: "",
      img: "",
      code: "",
    },
  ]);
  const [showpage,setshowpage] = useState(true)
 
  let codeArray = cartItem.map((a) => a.code);
  let priceArray = cartItem.map((a) => a.price);
  var totalPrice = priceArray.reduce(getSum,0)
  function getSum(total, num) {
    return total + Math.round(num);
  }
  
  
 
  const cartFunction = (gallery) => {

    if (!codeArray.includes(gallery.code))
      {setcartItem([gallery, ...cartItem]);
        
     }
   
   
  };
  
  return (

    <div className="App">
     <div>
       <Navbar/>
      </div>
      <div className='main'>
      <cartContext.Provider value={{data, cartItem,setcartItem,cartFunction,totalPrice,codeArray, showpage, setshowpage}}>
      <Routes>  
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/delievery" element={<Delievery/>} />
      <Route exact path="/returns" element={<Returns/>} />  
      <Route exact path="/terms-and-conditions" element={<Terms/>} /> 
      <Route exact path="/privacy-policy" element={<Privacy/>} /> 
      <Route exact path="/payment-guidelines" element={<Payment/>} /> 
      <Route exact path="/about-us" element={<Aboutus/>} /> 
      <Route exact path="/history" element={<Career/>} />
      <Route exact path="/careers" element={<Careers/>} />
      <Route exact path="/:id" element={<Men/>} />
      <Route exact path="/:id/:productid" element={<Details/>} />
      <Route exact path="/sidebar" element={<Sidebar/>} />
      </Routes>
      </cartContext.Provider>
      </div>
      <Footer />
    </div>
 
  );
}

export default App;
