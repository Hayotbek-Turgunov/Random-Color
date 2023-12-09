const colorName = document.querySelector('.color')
const colorBtn = document.querySelector('#color-btn')
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


colorBtn.addEventListener('click', () => {
    let sumColor = '#'

    for (let i = 0; i < 6; i++) {
        sumColor += colors[colorRandom()]
    }

    colorName.textContent = sumColor
    document.body.style.backgroundColor = sumColor
})



function colorRandom() {
    let res = Math.floor(Math.random() * colors.length)
    return res
}