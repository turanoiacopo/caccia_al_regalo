const dialogueBox = document.getElementById("dialogue-box");
const dialogueButton = document.getElementById("dialogue-button");
const player = document.getElementById("player");

dialogueButton.addEventListener("click", dialogue_scroll);

let dialogueNumber = 0;

localStorage.setItem("one", "false");
localStorage.setItem("two", "false");
localStorage.setItem("three", "false");
localStorage.setItem("four", "false");

dialogueBox.innerHTML = dialogues.index.line[dialogueNumber];

function dialogue_scroll()
{
    dialogueNumber++;

    dialogueBox.innerHTML = dialogues.index.line[dialogueNumber];
    
    if(dialogueBox.innerHTML === "Buona fortuna!")
    {
        dialogueBox.innerHTML = "Buona fortuna!";
        dialogueButton.removeEventListener("click", dialogue_scroll);

        dialogueButton.addEventListener("click", goto_hub);
    }
}

function goto_hub()
{
    player.play();
    setTimeout(function() {
        location.href = "./pages/hub.html";
    }, 3500)
}