const responseButton = document.getElementById("response-button");
const backButton = document.getElementById("back");
const player = document.getElementById("player");

responseButton.addEventListener("click", response);
backButton.addEventListener("click", back);

player.loop = true;
player.play();

function response()
{
    let cats = prompt("Quanti gattini?");

    if(cats == 23)
    {
        alert("giusto");
        localStorage.setItem("one", "true");
        player.src = "../resources/audio/you_win.mp3";
        player.play();
        setTimeout(function() {
            location.href = "../pages/hub.html";
        }, 3600)
    } else {
        alert("no");
    }
}

function back()
{
    location.href = "../pages/hub.html";
}