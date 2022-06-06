const contrl = document.querySelector('.contrl-btn')
const btns = contrl.querySelectorAll('button')
const progressAar = document.querySelector('.progress-bar')
const steps = document.querySelectorAll('.step')
let flagNum = 1

contrl.addEventListener('click', (e)=> {
  const target = e.target
  let changeVal = target.innerText
  if(target.nodeName !== 'BUTTON') {
    return
  }
  if(changeVal === 'Next') {
    flagNum++
    if (flagNum > steps.length) flagNum = steps.length
    update()
  } else {
    flagNum--
    if (flagNum < 1) flagNum = 1
    update()
  }
  
})

const update = ()=>{
  //处理步骤显示
  steps.forEach((step, i) => {
    if(i < flagNum) {
      step.classList.add('step-active')
    } else {
      step.classList.remove('step-active')
    }
  })
  //处理进度条长度
  const stepActive = document.querySelectorAll('.step-active')
  progressAar.style.width = (stepActive.length - 1) / (steps.length - 1) * 100 + '%'
  //处理控制按钮
  if ( flagNum === 1 ) {
    btns[0].disabled = true
  } else if ( flagNum === steps.length ) {
    btns[1].disabled = true
  } else {
    btns[0].disabled = false
    btns[1].disabled = false
  }
}

