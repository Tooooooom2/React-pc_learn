import styled from'styled-components'
import style from '@/assets/global-style'

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  // background:#333;
`
export const RedDiv = styled.div`
    background-color:${style ['theme-color']};
    width:100%;
    height:120px;
    position:absolute;
    top:0;
    z-index:0;
`

export const WhiteBackground = styled.div`
background-color: #fff;
`