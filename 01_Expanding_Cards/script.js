// const panels = document.getElementsByClassName('panel')
const panels = document.querySelectorAll('.panel')

// console.log(typeof (panels))

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// console.log(panels)