// router 基础组件
import React from 'react'
import { Redirect } from 'react-router-dom'

// 引入页面
import Home from '../application/Home'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'
import Rank from '../application/Rank'

import Album from '../application/Album'

import Singer from '../application/Singer'

// 路由信息
let the_router = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to={'/home/recommend'} />
    )
  },
  {
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/recommend',
        component: Recommend,
        routes:[
          {
            path: '/home/recommend/:id',
            component: Album
          }
        ]
      },
      {
        path: '/home/singers',
        component: Singers,
        routes: [
          {
            path: '/home/singers/:id',
            component: Singer
          }
        ]
      },
      {
        path: '/home/rank',
        component: Rank
      }
    ]
  }
]
export default the_router
