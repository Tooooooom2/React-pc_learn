import styled from 'styled-components'
import style from '@/assets/global-style'

export const TheSmallTitle = styled.p`
  color: ${style['font-color-desc']};
  margin:0 5px;
  height:34px;
  line-height:34px;
  font-size:${style['font-size-m']};
  font-weight:700;
`

export const Thebox = styled.div`
width:100%;
height:110px;
border-bottom:1px solid ${style['border-color']};
img {
  border-radius:5px;
  margin: 5px  0 0 5px;
}
position:relative;
`

export const UpdateDay = styled.p`
height:12px;
line-height:12px;
bottom:13px;
color:#fff;
font-size:${style['font-size-s']};
left:5px;
width:100px;
text-align:left;
padding-left:10px;
position:absolute;
`

export const Psdiv = styled.div`
float:right;
width:calc(100% - 110px);
height:100%;
.thepout {
  width:100%;
  height:110px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  p {
    width:100%;
    text-align:left;
    margin:10px;
    color:${style['font-color-desc-thin']};
    font-size:${style['font-size-s']};
  }
}
`

export const Thebox222 = styled.div`
width:calc(33.33333333% - 4px);
height:auto;
// float:left;
display:inline-block;
padding: 5px 0 0 3px;
img {
  width:100%;
  height:auto;
  border-radius:5px;
}
position:relative;
`

// Scroll的父级，要固定位置，要固定高度
export const ScrollParent = styled.div`
width:100%;
position:fixed;
top:94px;
height:calc(100vh - 94px);
`

