let cells = document.querySelectorAll(".cell");
let msg = document.querySelector("#resultado");
let btnZerar = document.querySelector("#zerar");

let player = 'X';
let countClick = 0;
let vitoriasJogador1 = 0;
let vitoriasJogador2 = 0;

let displayVitoriasJogador1 = document.querySelector("#vitoriasJogador1");
let displayVitoriasJogador2 = document.querySelector("#vitoriasJogador2");
const checkWin = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        if (
            cells[a].innerHTML &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML
        ) {
            msg.innerHTML = `Jogador ${cells[a].innerHTML} venceu!`;
            updateScore(cells[a].innerHTML);
            return true;
        }
        return false;
    });
};
const updateScore = (winner) => {
    if (winner === 'X') {
        vitoriasJogador1++;
        displayVitoriasJogador1.innerHTML = `Vitórias: ${vitoriasJogador1}`;
    } else if (winner === 'O') {
        vitoriasJogador2++;
        displayVitoriasJogador2.innerHTML = `Vitórias: ${vitoriasJogador2}`;
    }
};
const playGame = (evt) => {
    let target = evt.target;
    if (target.innerHTML === '' && msg.innerHTML === '') {
        target.innerHTML = player;
        countClick++;

        if (checkWin()) {
            return;
        }
        if (countClick === 9) {
            msg.innerHTML = "Deu velha!";
        }
        player = player === 'X' ? 'O' : 'X';
    }
};
const zeraTabuleiro = () => {
    countClick = 0;
    msg.innerHTML = "";
    player = 'X';
    cells.forEach(c => {
        c.innerHTML = '';
    });
};
cells.forEach(c => {
    c.addEventListener("click", playGame);
});
btnZerar.addEventListener("click", zeraTabuleiro);
