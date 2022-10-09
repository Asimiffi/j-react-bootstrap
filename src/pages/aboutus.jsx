import React from "react";
import imageabout from '../images/aboutus.webp'

const aboutus = () => {
  return (
    <div>
     

      <div className="row my-5">
        <div className="col-md-6">
        <h2>About Us</h2>
         <p> J. was established in 2002 with a unique philosophy to
          revive the country's cultural heritage and make Shalwar
          Kameez; the popular wear, and soon became one of the most
          famous and recognizable clothing brands in South East Asia.
          It expanded its store network to 100+ outlets nationwide. J.
          has further expanded globally by opening 20 outlets in the
          UK, Australia, Canada, New Zealand, UAE, Qatar, to name a
          few. We pride ourselves on being a complete apparel brand
          that deals in eastern wear, perfumes, footwear and
          accessories for women and men of all ages. We work in
          different categories and textures like silk, chiffon,
          cotton, cambric, lawn and fabrics that suit the season. Our
          clothing line reflects current fashion trends with modest
          detailing. Designs are inspired from Renaissance, Aztec,
          Fusion, Arabian and other aesthetics. From the humble
          beginnings of a brand that believed in being Soully East, we
          have moved forward with more decorative touches to our
          portfolio and have strung together a loyal base of customers
          all over the world
          </p>
        </div>
        <div className="col-md-5">
            <img src={imageabout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default aboutus;
