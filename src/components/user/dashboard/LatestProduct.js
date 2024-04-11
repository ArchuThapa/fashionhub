import { Avatar, Card } from "antd";
import React from "react";
import Slider from "react-slick";

function LatestProduct({ data, tittle }) {
  const settings = {




    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,



  };

  return (
    <div className="slider-container">
      <div className='font-extrabold text-base text-[red]'>{tittle}</div>


      <Slider {...settings}>

        {
          data?.map((item) => (
            <div key={item.id}>
              {/* <Card style={{ 
                display: "flex",
                 }}> */}
              <Avatar src={item.image} alt="no image" className="w-[100px] h-[100px]" />





              {/* </Card> */}
            </div>
          ))
        }


      </Slider>
    </div>
  );
}

export default LatestProduct;

