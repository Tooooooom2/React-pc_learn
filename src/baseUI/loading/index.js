import React from 'react'
import styled, { keyframes } from 'styled-components'
import style from '../../assets/global-style'

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`
const LoadingWrapper = styled.div`
  >div {
    position: fixed;
    z-index: 1000;
    left: 0; 
    right: 0;  
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${style['theme-color']};
    animation: ${loading} 1.4s infinite ease-in;
  }
  >div:nth-child (2) {
    animation-delay: -0.7s;
  }
`

// 不爽太淡了，加个灰色背景色
const Big = styled.div`
  {
    width:100%;
    height:150vh;
    position:absolute;
    top:-50vh;
    z-index:999;
    background-color:rgb(0,0,0,0.5);
  }
`

function Loading() {
  return (
    <Big>
      <LoadingWrapper>
        <div></div>
        <div></div>
      </LoadingWrapper>
    </Big>
  )
}

export default React.memo(Loading)