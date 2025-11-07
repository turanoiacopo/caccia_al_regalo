const dialogueBox = document.getElementById("dialogue-box");
const dialogueButton = document.getElementById("dialogue-button");
const player = document.getElementById("player");

dialogueButton.addEventListener("click", dialogue_scroll);

let dialogueNumber = 0;

dialogueBox.innerHTML = dialogues.ending.line[dialogueNumber];

window.onload = audio();

function dialogue_scroll()
{
    dialogueNumber++;

    dialogueBox.innerHTML = dialogues.ending.line[dialogueNumber];
    
    if(dialogueBox.innerHTML === "Ti amo.")
    {
        dialogueButton.removeEventListener("click", dialogue_scroll);
    }
}

function goto_hub()
{
    location.href = "./pages/hub.html";
}

function audio()
{
    if((localStorage.getItem("one") === "true") && (localStorage.getItem("two") === "true") && (localStorage.getItem("three") === "true"))
    {
        player.src = "../resources/audio/yayyyyyyyyy.mp3"
        player.loop = true;
        player.play();
    }
}