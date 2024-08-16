let title = document.getElementById('title');

let turn = 'x';
let square = [];

function end(num1, num2, num3){
    document.getElementById('item' + num1).style.backgroundColor = 'black';
    document.getElementById('item' + num2).style.backgroundColor = 'black';
    document.getElementById('item' + num3).style.backgroundColor = 'black';

    title.innerHTML = `${square[num1]} winner`;
    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 3000);
}



function winner(){
    for(i = 1; i < 10; i++){
        square[i] = document.getElementById('item' + i).innerHTML;
    }

    if(square[1] === square[2] && square[2] === square[3] && square[1] != ''){
        end(1,2,3)
    }
    else if(square[4] === square[5] && square[5] === square[6] && square[4] != ''){
        end(4,5,6)
    }
    else if(square[7] === square[8] && square[8] === square[9] && square[7] != ''){
        end(7,8,9)
    }


    else if(square[1] === square[5] && square[5] === square[9] && square[1] != ''){
        end(1,5,9)
    }
    else if(square[3] === square[5] && square[5] === square[7] && square[3] != ''){
        end(3,5,7)
    }


    else if(square[1] === square[4] && square[4] === square[7] && square[1] != ''){
        end(1,4,7)
    }
    else if(square[2] === square[5] && square[5] === square[8] && square[2] != ''){
        end(2,5,8)
    }
    else if(square[3] === square[6] && square[6] === square[9] && square[3] != ''){
        end(3,6,9)
    }
}


function game(id){
    let elemet = document.getElementById(id)
    if(turn === 'x' && elemet.innerHTML === ''){
        elemet.innerHTML = 'X';
        title.innerHTML = 'O';
        turn = 'o'
    }
    else if(turn === 'o' && elemet.innerHTML === ''){
        elemet.innerHTML = 'O';
        title.innerHTML = 'X';
        turn = 'x'
    }

    winner();
}