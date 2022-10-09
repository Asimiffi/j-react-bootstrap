import React from "react";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Addtocart from "../components/addtocart";
import Qantity from "./qantity";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Filter from "../components/filter";
const Men = () => {
  const [filtered, setfiltered] = useState([])
  useEffect(() => {
    setfiltered(data)
 }, [])
const [currentpage, setcurrentpage] = useState([1])
const [imgperpage, setimgperpage] = useState([12]);
const [variableprice, setvariableprice] = useState(0)
const lastimg = imgperpage*currentpage;
const firstimg = lastimg-imgperpage;

const operatorfunction = (price) =>{
  setvariableprice((prev)=>prev+price);
 
}
  
const changePageNumber = (number) =>{
  setcurrentpage(number);
}

  const {
    data,
    cartItem,
    setcartItem,
    codeArray,
    totalPrice,
    cartFunction,
    showpage,
    setshowpage
  } = useContext(cartContext);
  const { id } = useParams();
  const totalposts = data
  .filter((name) => name.page == `${id}`).length;
  
  const pageNumber = []
    for (let i=1;i<=Math.ceil(totalposts/12);i++){
      pageNumber.push(i)
    }
  return (
    <div style={{overflowX:'hidden'}}>
      <h2 className="text-center text-uppercase">{id} Gallery</h2>
      <div className="row">
        <div
          className="col-lg-2 col-md-3 col-sm-3 bg-light sidebar">
         <Filter filtered={filtered} setfiltered={setfiltered} setimgperpage={setimgperpage}  setcurrentpage={setcurrentpage}/>
        </div>
        <div className="col-lg-10 col-md-9 col-sm-12">
          <div className="row">
            {filtered
              .filter((name) => name.page == `${id}`)
              .slice(firstimg,lastimg).map((gallery) => (
                <div className="col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-center py-4">
                  <Link to={`/${gallery.page}/${gallery.code}`}>
                    <img
                      src={gallery.img}
                      className="py-4 gallery-imgs px-2"
                      alt=""
                      style={{ maxWidth: "90%", height:'auto'}}
                    />
                    <div>{gallery.color} {gallery.title} || {gallery.code} </div>
                  </Link>
                  <div>{gallery.price} PKR</div>
                  <div>{gallery.volume}</div>
                  <div>{gallery.weartype}</div>                  
                  <Addtocart
                    cartFunction={cartFunction}
                    gallery={gallery}
                  />
                  
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5
            class="offcanvas-title"
            id="offcanvasWithBothOptionsLabel"
          >
            Items in my Cart
          </h5>
        </div>
        <div class="offcanvas-body border-bottom">
          {cartItem.map((cart) => (
            <div className="row">
              <div className="col-md-5">
                <img
                  src={cart.img}
                  style={{ width: "100px" }}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <Qantity cart={cart} operatorfunction={operatorfunction}/>
              </div>
            </div>
          ))}
          <h4 className="text-center">Total:{totalPrice+variableprice}</h4>
         
        </div>
      </div>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
{showpage && pageNumber.map((number)=>(<li class="page-item"><a class="page-link" style={{cursor:'pointer'}} onClick={()=>changePageNumber(number)}>{number}</a></li>))}

  </ul>
</nav>
    </div>
  );
};

export default Men;
