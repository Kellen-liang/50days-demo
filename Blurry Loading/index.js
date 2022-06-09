const bg = document.querySelector('body')
const loadingText = document.querySelector('section')
let loadingNum = 100

const sacle = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}

const fn = () => {
  if (loadingNum <= 0) clearInterval(timer)
  loadingText.innerText = `${loadingNum}%`
  loadingText.style.opacity = sacle(loadingNum, 0, 100, 0, 1)
  bg.style.backdropFilter = `blur(${sacle(loadingNum, 0, 100, 0, 30)}px)`
  loadingNum--
}

const timer = setInterval(fn, 30)
