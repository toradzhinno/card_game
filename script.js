const desk = document.querySelector('.desk');
const levelNumbers = desk.querySelectorAll('.level-number');
const game = document.querySelector('.game');

levelNumbers.forEach(item => { item.addEventListener('click', chooseLevel); });

function chooseLevel(event) {
    // event.preventDefault();
    const target = event.target;
    window.localStorage.setItem('level-of-game', +target.textContent);
    const name = window.localStorage.getItem('level-of-game');
    console.log(name);
    desk.classList.add('hide');
    game.classList.remove('hide');
};
