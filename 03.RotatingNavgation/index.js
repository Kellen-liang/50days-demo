const iconNav = document.querySelector('.icon-nav')
const iconCuoWu = document.querySelector('.icon-cuowu')
const container = document.querySelector('.container')
const showNav = document.querySelector('.show-nav')
const nav = document.querySelector('.nav')

iconNav.addEventListener('click',()=>{
  container.classList.add('active')
  showNav.classList.add('show-active')
  nav.classList.add('nav-active')
})
iconCuoWu.addEventListener('click',()=>{
  container.classList.remove('active')
  showNav.classList.remove('show-active')
  nav.classList.remove('nav-active')
})