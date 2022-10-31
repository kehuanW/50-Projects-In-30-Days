const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    // 使用这样的定值的原因是：在有一定空白后，再让box出来，这样可以看到平移的过程
    const bottomTop = window.innerHeight * 4 / 5
    boxes.forEach((box) => {
        const currentTop = box.getBoundingClientRect().top
        if (currentTop < bottomTop) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

//调用箭头函数
checkBoxes()
window.addEventListener('scroll', checkBoxes)