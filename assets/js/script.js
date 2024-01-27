let items = [1, 2, 3, 4, 5, 6, 7, 8];
const gameBox = document.querySelector('.gameBox');

function createGameArray() {
    // ikiye katla
    items = [...items, ...items];

    // karistir
    items.sort(x => Math.random() - 0.5);
}

function handleGameBtn() {
    if(this.classList.contains('correct')) {
        return;
    }

    if(this.classList.contains('active')) {
        return;
    }

    if(document.querySelectorAll('.gameBox li.active').length >= 2) {
        return;
    }
    
    this.classList.add('active');
    const activeBtns = document.querySelectorAll('.gameBox li.active');

    let timeoutDuration = 1500;
    if(activeBtns.length === 2) {
        if(activeBtns[0].innerText === activeBtns[1].innerText) {
            activeBtns[0].classList.add('correct');
            activeBtns[1].classList.add('correct');
            timeoutDuration = 0;
        }

        setTimeout(function() {
            activeBtns[0].classList.remove('active');
            activeBtns[1].classList.remove('active');
        }, timeoutDuration);
    }
}

function renderGameScreen() {
    for(const item of items) {
        gameBox.innerHTML += `<li>${item}</li>`;
    }

    const gameBtns = document.querySelectorAll('.gameBox li');
    
    for (const btn of gameBtns) {
        btn.addEventListener('click', handleGameBtn);
    }
}

function init() {
    createGameArray();
    renderGameScreen();
}

init();

// function sayHello() {
//     alert('merhaabaaa');
// }

// setTimeout(sayHello, 1500);