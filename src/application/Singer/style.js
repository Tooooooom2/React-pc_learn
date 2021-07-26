import styled from'styled-components'
import style from '../../assets/global-style'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #fff;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${props => props.bgUrl});
  background-size: cover;
  z-index: 50;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`

export const CollectButton = styled.div`
  position: absolute;
  left: 0; right: 0;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  margin-top: -60px;
  z-index:50;
  background: ${style['theme-color']};
  color: ${style['font-color-light']};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  // line-height: 40px;
//   .iconfont{
//     display: block;
//     margin-right: 10px;
//     font-size: 20px;
//     vertical-align: 1px;
// margin-top:10px;
//     // height:40px;
//     // line-height:40px;
//   }
  .text {
    display: inline-block;
    font-size:14px;
    letter-spacing: 5px;
// margin-top:-20px;
    height:40px;
    line-height:40px;
  }
`

export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 230px;
  height:calc(100vh - 280px);
  left: 0;
  // top: 0;
  right: 0;
  
  >div{
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`

export const SongListWrapper_par = styled.div`
position:relative;
margin-top:-235px;
width:100vw;
height:calc(100vh - 45px);
overflow:hidden;
`
