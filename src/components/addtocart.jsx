import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

const Addtocart = ({cartFunction, gallery}) => {
  return (
    <div>
      <button
                    className=" p-2 buttons-site"
                    onClick={() => cartFunction(gallery)}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    style={{ width: "150px" }}
                  >
                    Add to cart
                  </button>
    </div>
  )
}

export default Addtocart