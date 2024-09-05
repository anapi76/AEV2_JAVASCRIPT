let logoTitleContainer = document.getElementsByTagName('p')[0];
let logoTitle = 'RICKY SANCHEZ';
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

const animatedName = (element, code) => {
    let currentIndex = 0;

    const changeLetters = () => {
        if (currentIndex <= code.length) {
            let changedText = '';
            for (let i = 0; i < code.length; i++) {
                changedText += i < currentIndex ? code[i] : String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Cambiar a un carácter aleatorio si no se ha revelado
            }
            element.innerHTML = changedText;
            currentIndex++;
            if (currentIndex <= code.length) {
                setTimeout(changeLetters, 500); // Cambiar la velocidad según sea necesario
            }
        }
    };

    changeLetters();
};
animatedName(logoTitleContainer,logoTitle);
/* function play() {
    let logoTitle = 'RICKY SANCHEZ';
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    let currentIndex = 0;

    function generateRandomTitle() {
        if (currentIndex <= logoTitle.length) {
            let logoRandom = logoTitle.substring(0, currentIndex) +(currentIndex < logoTitle.length ? possible.charAt(Math.floor(Math.random() * possible.length)) : '');
            /* let logoRandom = logoTitle.substring(0, currentIndex) + possible.charAt(Math.floor(Math.random() * possible.length));
            for (let j = currentIndex; j < logoTitle.length; j++) {
                logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
            } */
/*             logoTitleContainer.textContent = logoRandom;
            currentIndex++;
            setTimeout(generateRandomTitle, 100);
        }
    }
    generateRandomTitle();
}
play(); */ 

/* funciona pero tiene for
let logoTitleContainer = document.getElementsByTagName('p')[0];

function play() {
    let logoTitle = 'RICKY SANCHEZ';
    
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    function generateRandomTitle(i, logoRandom) {
        setTimeout(function () {
            logoTitleContainer.textContent = logoRandom;
        }, i * 70);
    }
     
    for (let i = 0; i < logoTitle.length + 1; i++) {
        let logoRandom = logoTitle.substring(0, i);
        for (var j = i; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        generateRandomTitle(i, logoRandom);
    }
}
play(); */


