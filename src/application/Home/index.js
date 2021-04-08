import React from 'react'
import { Top, Tab, TabItem } from './style'         // 引入预先绑定了css的dom

import { renderRoutes } from 'react-router-config'
// renderRoutes类似Vue的<router>，可以理解为放的是子页面的位置
// 因为Home页面就在根的App.js下，实际上整个项目都包裹在App的BrowserRouter中，不用重复写

import { NavLink } from 'react-router-dom'          // NavLink类似一个div，点击触发router的跳转事件

function Home(props) {
  // console.log('Home页的props', props)
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe64b;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe64b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend"
            activeClassName="selected"
        >
          <TabItem>
            <span > 推荐 </span>
          </TabItem>Î
        </NavLink>
        <NavLink to="/singers"
            activeClassName="selected"
        >
          <TabItem>
            <span > 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank"
            activeClassName="selected"
        >
          <TabItem>
            <span > 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default React.memo(Home)
