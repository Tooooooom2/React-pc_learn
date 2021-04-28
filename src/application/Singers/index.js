import React from 'react'
import { categoryTypes, alphaTypes, singerList } from './testDatas' // 本地模拟数据
import { ListContainer, List, ListItem } from './style' // 配置style的dom
import Horizen from '@/baseUI/horizen-item' // 顶部水平滚动的列表
import Scroll from '@/baseUI/scroll/index'

console.log('模拟数据 推荐列表 =', categoryTypes)
console.log('模拟数据 首字母 =', alphaTypes)
console.log('模拟数据 歌手列表 =', singerList)

// 渲染函数，返回歌手列表
const renderSingerList = () => {
  return (
    <List>
      {
        singerList.map((item, index) => {
          return (
            <ListItem key={item.accountId + '' + index}>
              <div className="img_wrapper">
                <img src={`${item.picUrl}?param=300x300`}
                    width="100%"
                    height="100%"
                    alt="music"
                />
              </div>
              <span className="name">{item.name + ' - ' + (index + 1)}</span>
            </ListItem>
          )
        })
      }
    </List>
  )
}

function Singers() {

  const [oldVal_category, setoldVal_category] = React.useState()
  const [oldVal_alpha, setoldVal_alpha] = React.useState()

  const handleClick_category = (val) => {
    console.log('监听点击，改变oldval=', val)
    setoldVal_category(val)
  }
  const handleClick_alpha = (val) => {
    console.log('监听点击，改变oldval=', val)
    setoldVal_alpha(val)
  }

  return (
    <div>
      <>
        <Horizen
            list={categoryTypes}
            title={'分类 (默认热门):'}
            oldVal={oldVal_category}
            handleClick={handleClick_category}
        ></Horizen>
        <Horizen
            list={alphaTypes}
            title={'首字母:'}
            oldVal={oldVal_alpha}
            handleClick={handleClick_alpha}
        ></Horizen>
      </>
      <ListContainer>
        <Scroll>
          {renderSingerList()}
        </Scroll>
      </ListContainer>
    </div>
  )
}

export default React.memo(Singers)