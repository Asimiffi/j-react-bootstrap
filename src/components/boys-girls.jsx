import React from 'react'
import imageN from "../images/teengirls.webp";
import imageO from "../images/teenboys.webp";
import imageP from "../images/kidgirls.webp";
import imageQ from "../images/kidboys.webp";

const boys = () => {
  return (
    <div><section id="boys-and-girls" className="text-center py-5" style={{overflow:'hidden'}}>
    <div className="row ">
        <div className="col-md-4">
        <figure className="figure">
         <img
           src={imageN}
           class="figure-imgrounded img-fluid"
           alt="..."
         />
         <figcaption class="figure-caption">
           TEEN GIRLS
         </figcaption>
       </figure>
        </div>
       
        <div className="col-md-8">
            
            <div className="row">
                <div className="col-md-4">
                <figure className="figure">
         <img
           src={imageO}
           class="figure-imgrounded img-fluid"
           alt="..."
         />
         <figcaption class="figure-caption">
          TEEN BOYS
         </figcaption>
       </figure>
                </div>
                <div className="col-md-4">
                <figure className="figure">
         <img
           src={imageP}
           class="figure-imgrounded img-fluid"
           alt="..."
         />
         <figcaption class="figure-caption">
           KID BOYS
         </figcaption>
       </figure>
                </div>
                <div className="col-md-4">
                <figure className="figure">
         <img
           src={imageQ}
           class="figure-imgrounded img-fluid"
           alt="..."
         />
         <figcaption class="figure-caption">
           KID GIRLS
         </figcaption>
       </figure>
                </div>
                <div className="row">
                    <div className="col-md-12">
                   <h2> NEW COLLECTION </h2>
                   <p>DRESS BRIGHT AND LIVELY</p>
                   <p>WITH J. YOUNGSTERS COLLECTION</p>
                    </div>
                </div>
            </div>
        </div>
       
        
    </div>
</section></div>
  )
}

export default boys