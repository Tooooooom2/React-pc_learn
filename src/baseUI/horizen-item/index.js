import React from 'react'

import Scroll from '../scroll/index'

import { PropTypes } from 'prop-types' // 类型检查
import { List, ListItem, Covering } from './style' // 定义了style的dom组件

function Horizen(props) {

  const { list, oldVal, title } = props
  const { handleClick } = props

  return (
    <>
      <Scroll direction={'horizontal'}>
        <div style={{ width: 'max-content' }}> {/* div添加width:'max-content'让div的自适应宽度为内部子元素最大宽度 */}
          {/* 注意这么写实际要做的是让div和内容一样长，因为真正起滚动效果的是外面的Scroll组件 */}
          <List>
            <span>{title}</span>
            {
              list.map((item) => {
                return (
                  <ListItem
                      key={item.key}
                      className={`${oldVal === item.key ? 'selected' : ''}`}
                      onClick={() => handleClick(item.key)}
                  >
                    {item.name}
                  </ListItem>
                )
              })
            }
          </List>
        </div>
      </Scroll>
      <Covering>{title}</Covering> {/* 滚动的是Scroll组件，所以把Covering放外面用来做覆盖，模拟左侧吸附效果 */}
    </>
  )
}

// 首先考虑接受的参数
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
}

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}
export default React.memo(Horizen)