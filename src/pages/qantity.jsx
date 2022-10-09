import { useContext, useState } from "react";
import React from "react";
import { cartContext } from "../context/cartContext";

const Qantity = ({ cart ,operatorfunction }) => {
  const [count, setcount] = useState(1);
  
  
  let minusfactor= -1;
  let plusfactor = 1;

  const plus = (price) => {
   { setcount(count + 1);
   
    
    operatorfunction(price,plusfactor)
  }
  };
  const minus = (price) => {
    if (count > 0) 
   { setcount(count - 1);
   
    operatorfunction(price)
  ;}
  };



  
 
  return (
    <div>
      
      
      {cart.title != "" ? (
        <div>

        <p>{cart.title} || {cart.code}</p>
        <h3> {cart.price * count}</h3>
        <div className="quantity d-flex">
         
          Quantity:
          <div className="mx-3" onClick={() => minus(cart.price*-1)} style={{cursor:'pointer'}}>
            -
          </div>
          <div>{count}</div>
          <div className="mx-3" onClick={() => plus(cart.price*1)} style={{cursor:'pointer'}}>
            +
          </div>
         
          
        </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Qantity;
