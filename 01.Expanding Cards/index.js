const container = document.querySelector('.container')
const panelList = container.querySelectorAll('.panel')

const clickChange = (e) => {
  const target = e.target
  if (target.className !== 'panel') {
    return
  }
  panelList.forEach(item => {
    item.classList.remove('active')
  })
  target.classList.add('active')
}

//防抖
//参数：需要防抖的函数，延时时间
const debounce = (fn, delay = 1000) => {
  //记录定时器id
  let timer = null
  //e为代理对象（没有代理对象的话可以不传）
  const _debounce = (e) => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    //重置定时器
    timer = setTimeout(() => {
      fn(e)
    }, delay)
  }
  //防抖处理后返回真正被调用的函数
  return _debounce
}

container.addEventListener('click',debounce(clickChange, 100))