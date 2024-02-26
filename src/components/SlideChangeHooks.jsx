import React, { useState } from "react";
import Slider from "react-slick";

function SlideChangeHooks() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };
  return (
    <div  style={{ width: '100%' , backgroundColor: '#f2f4fb' ,paddingBottom:'80px'   }}>
     <div style={{paddingTop:'50px'  }} className="d-flex flex-column align-items-center justify-content-center">
     <h1 style={{fontWeight:'600',color:'black'}}>Photos</h1>
     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>
     <p>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the</p>
     <p> Semantics, a large language ocean.</p>
     </div>
      <div style={{ marginLeft: '210px', marginTop: '100px' }} className="slider-container">

        <Slider {...settings}>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-1.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-2.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-4.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-5.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-6.jpg" alt="" />
          </div>
          <div>
            <img src="https://themewagon.github.io/sogo/images/slider-2.jpg" alt="" />
          </div>
        </Slider>
      </div>
   
    </div>
       );
}

export default SlideChangeHooks;
