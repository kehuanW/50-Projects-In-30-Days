const bg = document.querySelector('.bg-image')
const text = document.querySelector('.loading-status')

let loading = 0

const blurring = () => {
    if (loading < 100) {
        loading++;
        text.innerText = `${loading}%`
        text.style.opacity = scale(loading, 0, 99, 1, 0)
        bg.style.filter = `blur(${scale(loading, 0, 99, 30, 0)}px)`
    } else {
        clearInterval(myInterval)
    }
}

// arrow function works, but we need to define it before the function is called
// 如果使用function去定义blurring函数，那么没有顺序要求
const myInterval = setInterval(blurring, 100)


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}