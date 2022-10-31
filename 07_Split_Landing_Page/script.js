const container = document.querySelector('.container')
const leftPage = document.querySelector('.left')
const rightPage = document.querySelector('.right')

leftPage.addEventListener('mouseenter', () => container.classList.add('left-hover'))
leftPage.addEventListener('mouseleave', () => container.classList.remove('left-hover'))

rightPage.addEventListener('mouseenter', () => container.classList.add('right-hover'))
rightPage.addEventListener('mouseleave', () => container.classList.remove('right-hover'))