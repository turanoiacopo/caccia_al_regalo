const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const player = document.getElementById("player");

one.addEventListener("click", one_click);
two.addEventListener("click", two_click);
three.addEventListener("click", three_click);
//four.addEventListener("click", four_click);

progression();

function one_click()
{
    location.href = "../pages/one.html";
}

function two_click()
{
    location.href = "../pages/two.html";
}

function three_click()
{
    location.href = "../pages/three.html";
}

function four_click()
{
    location.href = "../pages/four.html";
}

function progression()
{
    if(localStorage.getItem("one") === "true")
    {
        one.removeEventListener("click", one_click);
        one.style.backgroundColor = "rgb(26, 26, 154)";
    }
    
    if(localStorage.getItem("two") === "true")
    {
        two.removeEventListener("click", two_click);
        two.style.backgroundColor = "rgb(162, 22, 22)";
    } 
    
    if(localStorage.getItem("three") === "true")
    {
        three.removeEventListener("click", three_click);
        three.style.backgroundColor = "rgb(20, 152, 20)";
    }

    if((localStorage.getItem("one") === "true") && (localStorage.getItem("two") === "true") && (localStorage.getItem("three") === "true"))
    {
        player.src = "../resources/audio/you_win_super.mp3";
        player.play();
        setTimeout(function() {
            window.location = "../pages/ending.html";
        }, 3600)
    }
    else
    {
        player.loop = true;
        player.play();
    }
}