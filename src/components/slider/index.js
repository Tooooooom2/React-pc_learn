import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
// import "swiper/css/swiper.css";
import Swiper from 'swiper'

function Slider(props) {

  console.log(props)

  const [sliderSwiper, setSliderSwiper] = useState(null)

  console.log(sliderSwiper)
  console.log(setSliderSwiper)

  const { bannerList } = props

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' }
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider, i) => {
              return (
                <div className="swiper-slide"
                    key={slider.imageUrl + '_' + i}
                >
                  <div className="slider-nav">
                    <img alt="推荐"
                        height="100%"
                        key={slider.imageUrl + '_' + i + '_' + i}
                        src={slider.imageUrl}
                        width="100%"
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)