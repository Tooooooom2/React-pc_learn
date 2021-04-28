import styled from 'styled-components'
import style from '@/assets/global-style'

export const List = styled.div`
display: flex;
align-items: center;
height: 30px;
overflow: hidden;
>span:first-of-type{
  visibility:hidden;
  display: block;
  flex: 0 0 auto;
  padding: 5px 0;
  margin-right: 5px;
  color: grey;
  font-size: ${style['font-size-m']};
  vertical-align: middle;
}
`

export const ListItem = styled.span`
flex: 0 0 auto;
font-size: ${style['font-size-m']};
padding: 5px 8px;
border-radius: 10px;
&.selected {
  color: ${style['theme-color']};
  border: 1px solid ${style['theme-color']};
  opacity: 0.8;
}
`

// 做成和实际首行标题相同，背景色覆盖，原来的真实首标题隐藏；
// 和Scroll同级，不能用top，用margin调整位置；
export const Covering = styled.p`
  color: grey;
  font-size: ${style['font-size-m']};
  vertical-align: middle;
  background-color:rgb(242, 243, 244);
  position:absolute;
  line-height:30px;
  // top:0;
  margin: -30px 0 0 0;
  padding: 0 2px;
  left:0;
  width:max-content;
}
`