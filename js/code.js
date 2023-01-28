//function for random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selection(choosen) {
    result = " ";
    if(choosen == 1) {
        result = "Rock 🥌";
    } else if (choosen == 2) {
        result = "Paper 🧻";
    } else if (choosen == 3) {
        result = "Scissors ✂";
    } else {
        result = "u r dumb or something? 💀💀";
    }
    return result;
}

//1 for rock 2 for paper n 3 for scissors
let player = 0;
let pc = 0;
let wins = 0;
let loses = 0;

while (wins < 3 && loses < 3) {
            
    pc = random(1, 3);
    console.log(pc);
    player = prompt("Choose 1 for rock, 2 for paper or 3 for scissors");
    alert("Pc selected " + selection(pc));
    alert("You selected " + selection(player));

    //Fight😈😈
            
    if(pc == player) {
        alert("Tie");
    } else if (pc == 1 && player == 2) {
        alert("You win");
        wins = wins + 1;
    } else if (pc == 2 && player == 3) {
        alert("You win");
        wins = wins + 1;
    } else if (pc == 3 && player == 1) {
        alert("You win");
        wins = wins + 1;
    } else {
        alert("You lose");
        loses = 1 + loses;
    }
}

alert("You win " + wins + " times and lose " + loses + " times");