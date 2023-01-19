const changeColorButton = document.querySelector('.change-color-button');
const mainBackground = document.querySelector('.main-background');
const hexaColorName = document.querySelector('.hexa-color-name');

changeColorButton.addEventListener('click', function () {
    
    let hex = '#';
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    function randomColorIndex(x) {
        return Math.floor(Math.random () * x.length);
    };

    for (let i = 0; i < 6; i++) {
        hex +=  randomColorIndex(array);
    };

    mainBackground.style.backgroundColor = hex;
    hexaColorName.textContent = hex;

});