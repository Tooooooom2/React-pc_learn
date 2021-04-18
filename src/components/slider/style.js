import styled from 'styled-components'
import style from '@/assets/global-style'

export const SliderContainer = styled.div`
  .ImgDiv{
    padding:0 1% 0 1%;
    position:relative;
    z-index:1;
  }
  .theImg{
    border-radius:15px;
    position:relative;
    z-index:1;
  }
  .swiper-pagination{
  height:2px;
    position:relative;
    z-index:2;
  }
`

export const RedDiv = styled.div`
    background-color:${style ['theme-color']};
    width:100%;
    height:120px;
    position:absolute;
    top:0;
    z-index:0;
`

