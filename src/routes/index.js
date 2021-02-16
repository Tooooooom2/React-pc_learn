// router 基础组件
import React from 'react'
import { Redirect } from 'react-router-dom'

// 引入页面
import Home from '../application/Home'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'
import Rank from '../application/Rank'

// 路由信息
let the_router = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => (
          <Redirect to={'/recommend'} />
        )
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
]
export default the_router