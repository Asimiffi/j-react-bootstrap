import React from 'react'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { cartContext } from "../context/cartContext";


const Filter = ({setfiltered, setimgperpage,setcurrentpage}) => {
    const {data,setshowpage} = useContext(cartContext) 
    
    
  const overfourk = ()=>{
  
    const maximum = data.filter(max=>{
      return max.price > 4000
    })
    setfiltered(maximum)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }

  const underfourk = ()=>{

    const medium = data.filter(med=>{
      return med.price < 4000 && med.price > 2000
    })
    setfiltered(medium)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }

  const overonek = ()=>{
    const minimum = data.filter(min=>{
      return min.price < 2000 && min.price > 1000
    })
     setfiltered(minimum)
     setimgperpage(60)
     setcurrentpage(1)
     setshowpage(false)
  }
  const lightcolor = ()=>{

    const light = data.filter(lig=>{
      return lig.color=="Light"
    })
    setfiltered(light)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const darkcolor = ()=>{

    const dark = data.filter(drk=>{
      return drk.color=="Dark"
    })
    setfiltered(dark)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }

  const brightcolor = ()=>{

    const bright = data.filter(brt=>{
      return brt.color=="Bright"
    })
    setfiltered(bright)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }

  const casualtype = ()=>{

    const casual = data.filter(csl=>{
      return csl.weartype=="Casual"
    })
    setfiltered(casual)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const semicasualtype = ()=>{

    const semiformal = data.filter(sfrml=>{
      return sfrml.weartype=="Semi-casual"
    })
    setfiltered(semiformal)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const formaltype = ()=>{

    const formal = data.filter(frml=>{
      return frml.weartype=="Formal"
    })
    setfiltered(formal)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const summerseason = ()=>{

    const summer = data.filter(smr=>{
      return smr.volume=="Summer 2022"
    })
    setfiltered(summer)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const winterseason = ()=>{

    const winter = data.filter(wtr=>{
      return wtr.volume=="Winter 2021"
    })
    setfiltered(winter)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  const springseason = ()=>{

    const spring = data.filter(sprg=>{
      return sprg.volume=="Spring 2021"
    })
    setfiltered(spring)
    setimgperpage(60)
    setcurrentpage(1)
    setshowpage(false)
  }
  return (
    <div class="card">
    <div class="card-body text-muted" style={{fontSize: '12px'}}>
      <h5>Color</h5>
      <input type="radio" id="light" name="filters"/>
  <label for="light"  onClick={lightcolor} style={{cursor:'pointer'}}>Light</label><br/>
  <input type="radio" id="dark" name="filters"/>
  <label for="dark"  onClick={darkcolor} style={{cursor:'pointer'}}>Dark</label><br/>
  <input type="radio" id="bright" name="filters"/>
  <label for="bright"  onClick={brightcolor} style={{cursor:'pointer'}}>Bright</label>
  
  <h5>Volume</h5>
      <input type="radio" id="summer" name="filters"/>
  <label for="summer"  onClick={summerseason} style={{cursor:'pointer'}}>Summer 2022</label><br/>
  <input type="radio" id="winter" name="filters"/>
  <label for="winter"  onClick={winterseason} style={{cursor:'pointer'}}>Winter 2021</label><br/>
  <input type="radio" id="spring" name="filters"/>
  <label for="spring"  onClick={springseason} style={{cursor:'pointer'}}>Spring 2021</label>
  <h5>Price</h5>
      <input type="radio"  style={{cursor:'pointer'}} id="fourk" name="filters"/>
  <label for="fourk"   onClick={overfourk} style={{cursor:'pointer'}}> over 4000 </label><br/>
  <input type="radio" id="twok" name="filters"/>
  <label for="twok" onClick={underfourk} style={{cursor:'pointer'}}>over 2000</label><br/>
  <input type="radio" id="onek" name="filters"/>
  <label for="onek" onClick={overonek} style={{cursor:'pointer'}}>over 1000</label>
  <h5>Wear type</h5>
      <input type="radio" id="casual" name="filters"/>
  <label for="casual" onClick={casualtype} style={{cursor:'pointer'}}>Casual</label><br/>
  <input type="radio" id="semicasual" name="filters"/>
  <label for="semicasual" onClick={semicasualtype} style={{cursor:'pointer'}}>Semi-casual</label><br/>
  <input type="radio" id="formal" name="filters"/>
  <label for="formal" onClick={formaltype} style={{cursor:'pointer'}}>Formal</label>
    </div>
  </div>
  )
}

export default Filter