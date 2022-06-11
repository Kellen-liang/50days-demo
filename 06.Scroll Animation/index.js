const contents = document.querySelectorAll('.content')
const innerHeight = window.innerHeight

const checkbox = () => {
  contents.forEach(itemt => {
    if(itemt.getBoundingClientRect().bottom < innerHeight) {
      itemt.classList.add('show')
    } else {
      itemt.classList.remove('show')
    }
  })
}

checkbox()
window.addEventListener('scroll', checkbox)

