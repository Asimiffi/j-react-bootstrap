import React from 'react'
import Data from './data'

const sidebar = () => {
  return (
      <div>
          <div className="sidebar bg-light" style={{width:'25%', position:'fixed'}}>
              <p>124</p>
              <p>126</p>
              <p>128</p>
              <p>132</p>
              <div>14</div>
          </div>
    <div style={{marginLeft:'25%'}} className='bg-dark'>

   { Data.map((gallery)=>(
        <div>
            <img src={gallery.img} alt="" />
        </div>
    ))}

    </div>
    </div>
  )
}

export default sidebar