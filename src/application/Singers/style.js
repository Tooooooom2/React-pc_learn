import styled from'styled-components'
import style from '@/assets/global-style'

export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
`

export const List = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin:10px 0 10px 10px;
    color: ${style ['font-color-desc']};
    font-size: ${style ['font-size-s']};
  }
`
export const ListItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${style ['border-color']};
  .img_wrapper {
    width:50px;
    height:50px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    img {
      border-radius: 3px;
      width: 50px; 
    }
  }
  .name {
    font-size: ${style ['font-size-m']};
    color: ${style ['font-color-desc']};
    font-weight: 500;
  }
`

// display: table-cell;
// vertical-align: middle;

// display: flex;
// align-items: center;