const joke = document.querySelector('.joke')
const changeJokeBtn = document.getElementById('btn')

const changeJoke = () => {
    fetch('https://icanhazdadjoke.com/', config = { headers: { Accept: 'application/json' } })
        .then((response) => response.json())
        .then((data) => joke.innerHTML = data.joke);
}

changeJoke()

changeJokeBtn.addEventListener('click', changeJoke)