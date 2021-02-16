import React from 'react';
import Slider from '../../components/slider';

function Recommend() {

  //mock 数据
  const bannerList = [111, 222, 333].map(item => {
    return { imageUrl: "@/assets/image/" + item + '.jpg' }
  });

  return (
    <div>
      <Slider bannerList={bannerList}></Slider>
    </div>
  )
}

export default React.memo(Recommend);