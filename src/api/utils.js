// 大家按照这个目录层级新建文件
//src/api/utils.js

// 简化数字
export const getCount = (count) => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

// 函数防抖
export const debounce = (func, delay) => {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

// 处理歌手列表拼接歌手名字
export const getName = list => {
  let str = ''
  list.map((item, index) => {
    str += index === 0 ? item.name : '/' + item.name
    return item
  })
  return str
}

// 判断是否为空对象
export const isEmptyObject = obj => !obj || Object.keys(obj).length === 0