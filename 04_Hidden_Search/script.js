const container = document.querySelector('.container');
const searchInput = document.querySelector('.search-content');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
    container.classList.toggle('active');
    searchInput.focus()
})