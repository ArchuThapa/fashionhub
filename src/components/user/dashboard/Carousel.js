import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ data,tittle }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // dots: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     margin: "0 10px"
  

  };
  return (
    
    <div className="slider-container">
        <div className='font-extrabold text-base text-[red]'>{tittle}</div>
      <Slider {...settings}>
       
        {
            data?.map((item)=>(
                <div
                 key={item.id} className="backdrop-opocity-15">

                  <div  className="flex justify-center" style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      minHeight: '50px',
                      minWidth: '500px',
                  }}>
                  <img src={item.image} alt="no image"  className="w-[250px] h-[300px]"/>
                  </div>
                    
             
                     </div>
            ))
        }
       
      </Slider>
    </div>
  );
}

export default Carousel;