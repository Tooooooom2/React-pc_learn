import styled from'styled-components'
import style from '@/assets/global-style'

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 55px;
  }
`
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;

  .img_wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style ['font-size-l']};
      line-height: 15px;
      color: ${style ['font-color-light']};
      .play {
        vertical-align: top;
      }
      .count{
        font-weight:600;
      }
      -webkit-text-stroke: 0.5px #000;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
      overflow: hidden;
      margin-top: 2px;
      padding: 0 2px;
      height: 40px;
      text-align: center;
      font-size: ${style ['font-size-s']};
      line-height: 2.0;
      color: ${style ['font-color-desc']};
    }
`