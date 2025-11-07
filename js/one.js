const responseButton = document.getElementById("response-button");
const backButton = document.getElementById("back");
const player = document.getElementById("player")

responseButton.addEventListener("click", response);
backButton.addEventListener("click", back);

function response()
{
    let cats = prompt("Quanti gattini?");

    if(cats == 24)
    {
        alert("giusto");
        localStorage.setItem("one", "true");
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