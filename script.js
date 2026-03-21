const desk = document.querySelector('.desk');
const levelNumbers = desk.querySelectorAll('.level-number');
const game = document.querySelector('.game');
const start = desk.querySelector('.start-btn');
let levelInGlobal = 0;

levelNumbers.forEach(item => { item.addEventListener('click', chooseLevel); });
start.addEventListener('click', startGame);
start.addEventListener('mouseover', blockGame);


function chooseLevel(event) {
    // event.preventDefault();
    const target = event.target;
    window.localStorage.setItem('level-of-game', +target.textContent);
    levelInGlobal = window.localStorage.getItem('level-of-game');
    console.log(levelInGlobal);
    levelNumbers.forEach(item => {
        item.style.backgroundColor = "white";
        item.style.color = "#0080c1";
    });
    target.style.backgroundColor = "#0080c1";
    target.style.color = "white";
};

function blockGame(event) {
    if (levelInGlobal == 0) {
        const target = event.target;
        target.style.backgroundColor = '#7ac1006a';
        target.addEventListener('mouseout', function () {
            target.style.backgroundColor = '#7ac100';
        });
    }
}

function startGame(event) {
    if (levelInGlobal == 1 || levelInGlobal == 2 || levelInGlobal == 3) {
        desk.classList.add('hide');
        game.classList.remove('hide');
    }
    else {
        event.preventDefault();
    }
}