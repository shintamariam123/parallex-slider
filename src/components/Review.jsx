import React from "react";
import Slider from "react-slick";

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container  ">
        <p style={{fontSize:'40px',fontWeight:'600',color:'black',marginTop:'30px'}}className="text-center">People Says</p>
      <Slider  {...settings} >
        
          <div  className="img1 d-flex flex-column align-items-center justify-content-center" >
            <img style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'100px'}} src="https://themewagon.github.io/sogo/images/person_1.jpg" alt="" />
            <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
            <em>— Jean Smith</em>
          </div>
        
        <div className="img2 d-flex flex-column align-items-center justify-content-center">
        <img style={{width:'100px',height:'100px',borderRadius:'50%' ,marginTop:'100px'}}  src="https://themewagon.github.io/sogo/images/person_2.jpg" alt="" />
        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
        <em>— John Doe </em>
        </div>

        <div  className="img3 d-flex flex-column align-items-center justify-content-center" >
        <img  style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'100px'}} src="https://themewagon.github.io/sogo/images/person_3.jpg" alt="" />
        <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane."</p>
        <em>— John Doe </em>
        </div>

        <div   className="img1 d-flex flex-column align-items-center justify-content-center" >
        <img style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'100px'}} src="https://themewagon.github.io/sogo/images/person_2.jpg" alt="" />
            <p>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</p>
         <em>— Jean Smith</em>
        </div>
        <div  className="img2 d-flex flex-column align-items-center justify-content-center"  >
        <img style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'100px'}}  src=" https://themewagon.github.io/sogo/images/person_1.jpg" alt="" />
        <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
        <em>— John Doe </em>
        </div>
        <div  className="img3 d-flex flex-column align-items-center justify-content-center">
        <img  style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'100px'}} src="https://themewagon.github.io/sogo/images/person_3.jpg" alt="" />
        <p>“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane."</p>
        <em>— John Doe </em>
        </div>
        
      
      </Slider>
    </div>
  );
}

export default Review;
