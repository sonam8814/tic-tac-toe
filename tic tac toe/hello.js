const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const newButton = document.querySelector("#new-btn"); 
const msgContainer = document.querySelector(".msg-container"); 
const msg = document.querySelector("#msg");

let turnO = true; 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true; 
        turnO = !turnO;      
        checkWinner();
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congrats! The winner is ${winner}.`;
    msgContainer.classList.remove("hide"); 
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;
        
       
        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            disableAllBoxes();
            return;
        }
    }
    if ([...boxes].every((box) => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide"); 
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";     
        box.disabled = false;   
    });
    turnO = true;               
    msgContainer.classList.add("hide"); 
};

resetBtn.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
