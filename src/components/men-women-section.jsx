import React from 'react'

import imageF from "../images/women1.webp";
import imageG from "../images/women2.webp";
import imageH from "../images/women3.webp";
import imageI from "../images/men1.webp";
import imageJ from "../images/men2.webp";
import imageK from "../images/men3.webp";

const women = () => {
  return (
    <div>
        {/* ----------------------------------women------------------ */}
    <section>
      <div className="contain my-5" style={{width: '100%'}}>
      <div className="row main-img-div" style={{width: '95%'}}>
        <div className="col-md-8 d-flex justify-content-end">
          <figure className="figure">
            <img
              src={imageF}
              className="figure-img img-fluid women-img-2 rounded"
              alt="..."
            />
            <figcaption class="figure-caption text-center">
              KURTI
            </figcaption>
          </figure>
        </div>
        <div className="col-md-4  figure-1">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-start">
              <figure className="figure w-100">
                <img
                  src={imageG}
                  className="figure-img women-img img-fluid rounded"
                  alt="..."
                />
                <figcaption class="figure-caption">
                  STITCHED COLLECTION
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex  justify-content-lg-start">
              <figure className="figure w-100">
                <img
                  src={imageH}
                  class="figure-imgrounded women-img img-lg-fluid"
                  alt="..."
                />
                <figcaption class="figure-caption">
                UNSTITCHED COLLECTION
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      {/* ----------------------------------men------------------ */}
    <section>
    <div className="contain my-5" style={{width: '100%'}}>
        <div className="row"  style={{width: '95%'}}>
            <div className="col-md-5">
            <div className="row">
                    <div className="col-md-12">
                    <figure className="figure w-100 d-flex flex-column align-items-end">
                <img
                  src={imageJ}
                  className="figure-img img-fluid rounded women-img"
                  alt="..."
                />
                <figcaption class="figure-caption">
                  KOTI
                </figcaption>
              </figure>
                    </div>
                </div>
                <div className="row ">
                <div className="col-md-12 d-flex justify-content-start">
                <figure className="figure w-100 d-flex flex-column align-items-end">
                <img
                  src={imageK}
                  class="figure-imgrounded img-lg-fluid  women-img"
                  alt="..."
                />
                <figcaption class="figure-caption">
                  KAMEEZ SHALWAR
                </figcaption>
              </figure>
                    </div>
                </div>
            </div>
            <div className="col-md-7">
            <figure className="figure">
            <img
              src={imageI}
              className="figure-img img-fluid women-img-2 rounded"
              alt="..."
            />
            <figcaption class="figure-caption text-center">
              KURTA
            </figcaption>
          </figure>
            </div>
        </div>
        </div>
    </section>

    </div>
  )
}

export default women