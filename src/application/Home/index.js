import React from 'react'
// 导入转化routes信息的组件react-router-config
// 因为renderRoutes只会向内触发一层，从app中到了这里
// 想要再往下加载Home的子router，可以再写一层renderRoutes
// 注意这里不需要配合【react-router-dom】的BrowserRouter方法，就能自动的根据url往下跳转路由
// 因为Home页面就在根的App下，实际上整个项目都包裹在App的BrowserRouter中
import { renderRoutes } from 'react-router-config'
// 【react-router-dom】中的NavLink方法,点击后改变url，进行路由跳转
import { NavLink } from 'react-router-dom'
// 引入由【styled-components】预先绑定了css的dom
import { Top, Tab, TabItem } from './style'

function Home(props) {
  console.log('Home页的props',props)
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe64b;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe64b;</span>
      </Top>
      <Tab>
        <NavLink activeClassName="selected"
            to="/recommend"
        >
          <TabItem>
            <span > 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink activeClassName="selected"
            to="/singers"
        >
          <TabItem>
            <span > 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink activeClassName="selected"
            to="/rank"
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
