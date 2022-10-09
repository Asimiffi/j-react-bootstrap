import React from 'react'
import imageL from "../images/naerang.webp";
import imageM from "../images/underwear.webp";

const naerang = () => {
  return (
    <div>{/* ----------------------------------naerang------------------ */}
    <section id="naerang" className="text-center p-5">
        <div className="naerang text-center m-auto">
            <img src={imageL} className="my-5 img-fluid" alt="" style={{width:'70vw'}} />
        </div>
    </section>
 {/* ----------------------------------under------------------ */}
 <section id="under" className="text-center p-5">
        <div className="under text-center m-auto">
            <img src={imageM} className="my-5 img-fluid" alt="" style={{width:'70vw'}} />
        </div>
    </section></div>
  )
}

export default naerang