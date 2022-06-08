const input = document.querySelector('input')
const svg = document.querySelector('svg')
let flag = true

svg.addEventListener('click', ()=> {
  if ( flag ) {
    flag = !flag
    input.style.width = 0
  } else {
    flag = !flag
    input.style.width = 200 + 'px'
  }
})
