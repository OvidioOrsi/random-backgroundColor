const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');
console.log(color.innerText)

function backgroundChange() {
    changeColor();
    document.body.style.backgroundColor = color.innerText
}

function changeColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return color.innerText = hexColor;
}

btn.addEventListener('click', backgroundChange)