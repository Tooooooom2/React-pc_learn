//components/slider/index.js
import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
// import "swiper/css/swiper.css";
import Swiper from "swiper";

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, i) => {
              return (
                // 这里要修改key，否则多个用同一个图片的话会报错key重复
                <div className="swiper-slide" key={slider.imageUrl + '_' + i}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);