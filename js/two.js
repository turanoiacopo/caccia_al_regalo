const countDisplay = document.getElementById("count");
const player = document.getElementById("player");
const back = document.getElementById("back");

document.addEventListener("keydown", counter);
countDisplay.addEventListener("onkeypress", counter);
back.addEventListener("click", backHub);

let count = 0;
let timerEnable = false;

countDisplay.innerHTML = count;

function counter()
{
    if(event.code === "Space")
    {
        countDisplay.innerHTML = count++;
        
        if(!timerEnable)
        {
            const countDown = setTimeout(timer, 4000);
            timerEnable = true;
        }
    }
}

function timer()
{
    if(count < 10)
    {
        reset();
    }
    else
    {
        win();
    }
}

function reset()
{
    document.removeEventListener("keydown", counter);
    countDisplay.style.color = "red";

    setTimeout(function() {
        countDisplay.style.color = "black";
        count = 0;
        countDisplay.innerHTML = count;
        document.addEventListener("keydown", counter);
        timerEnable = false;
    }, 2000);
}

function win()
{
    document.removeEventListener("keydown", counter);
    countDisplay.style.color = "green";
    localStorage.setItem("two", "true");
    player.play();
    setTimeout(function() {
        location.href = "../pages/hub.html";
    }, 3600);
}

function backHub()
{
    window.location = "../pages/hub.html";
}