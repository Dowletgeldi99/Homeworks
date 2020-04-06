var btn = document.getElementById('btn'),
    inputX = document.getElementById('x'),
    inputY = document.getElementById('y'),
    board = document.createElement('div'),
    arrBoard = [],
    cell = {},
    block;

btn.disabled = true;

function a() {
    var xValue = document.getElementById('x').value;
    var yValue = document.getElementById('y').value;

    if( (parseInt(xValue) != xValue) || xValue > 10 || xValue < 1) {
        alert('Вы ввели не корректные данные! Введите от 1 до 10');
        btn.disabled = true;
    } else if ((parseInt(yValue) != yValue) || yValue > 10 || yValue < 1) {
        alert('Вы ввели не корректные данные! Введите от 1 до 10');
        btn.disabled = true;
    } else {
        
        document.body.appendChild(board);
        board.innerHTML = '';
        board.className = 'mainBoard';
        
        for (var y = 0; y < yValue; y++) {
            var arrayForRow = [];

            for (var x = 0; x < xValue; x++) {
                cell.elem = document.createElement('div');
                if ( y % 2 == x % 2) {
                    cell.elem.className = 'block white';
                } else {
                    cell.elem.className = 'block black'; 
                }
                board.appendChild(cell.elem);
                arrayForRow.push(cell);
            }
            arrBoard.push(arrayForRow);
        }

        var boardWidth = xValue * 50 + 'px';
        var boardHeigth = yValue * 50 + 'px';

        board.style.width = boardWidth;
        board.style.height = boardHeigth;
    }
}
btn.onclick = a;
inputX.onkeyup = isEmpty;
inputY.onkeyup = isEmpty;
inputX.onkeydown = disableButton;
inputY.onkeydown = disableButton;

function isEmpty() {
    if( !isNaN(parseInt(document.getElementById('x').value)) && !isNaN(parseInt(document.getElementById('y').value)) ) {
        btn.disabled = false;
    }
}

function disableButton() {
    btn.disabled = true;
}

board.onclick = function(event) {
    var allChessElements = document.getElementsByClassName('block');
    console.log(allChessElements);
    for (var i = 0; i < allChessElements.length; i++) {
        allChessElements[i].classList.toggle('black');
    }
}      