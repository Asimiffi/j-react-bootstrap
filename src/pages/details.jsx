import React from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/cartContext';
import Addtocart from '../components/addtocart';
import { useContext } from 'react';
import Qantity from './qantity';



const Details = () => {
  const {data,cartFunction,cartItem} = useContext(cartContext)
  const {productid} = useParams() 
  return (
    <div>
       
      {data.filter(name => name.code==`${productid}`).map(gallery => (  
        
         <div className="row">
           <h2 className='text-center pt-4' style={{color:'black !important', textTransform:"uppercase"}}>
      {gallery.page}
      
      </h2>
            <div className='col-md-5 d-flex justify-content-center py-4'>
            <img src={gallery.img} style={{width:"70%"}}
            alt="" />
           
            </div>
            <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
              <div className='border-bottom'>
              <h4>{gallery.title} || {gallery.code}</h4>
              <p className='text-muted'>IN STOCK</p>
              <h2>{gallery.price}</h2>
              <p>{gallery.collection}</p>
            <p>{gallery.volume}</p>
            </div>
            
            <Addtocart cartFunction={cartFunction} gallery={gallery}/>
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
                <img src={cart.img} style={{ width: "100px" }} alt="" />
              </div>
              <div className="col-md-7">
                <Qantity cart={cart}/>
              </div>
            </div>
          ))}
        </div>
      </div>
            </div>
            
            )
  )}
  
  
  <div>hi</div>
    </div>
  )
}

export default Details