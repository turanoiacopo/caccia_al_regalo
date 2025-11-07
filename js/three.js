const textInit = `
Ti volevo dire quanto ti amo.<br>
Questa volta non potrai battermi! Perciò preparati!<br><br>
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo.
`;

const back = document.getElementById("back");
const player = document.getElementById("player");
const textScroller = document.getElementById("scroller");
textScroller.innerHTML = textInit;

player.loop = true;
player.play();

back.addEventListener("click", backHub);
textScroller.addEventListener("scrollend", addText);

function addText() {
  let rand = Math.floor(Math.random() * 10);
  console.log(rand);

  // Create link sometimes
  if (rand > 1) {
    const newLink = document.createElement("a");
    newLink.innerHTML = "Ti miamo. ";
    newLink.href = "";
    newLink.style.color = "black";
    newLink.style.textDecoration = "none";

    // add hover event
    newLink.addEventListener("mouseover", () => {
      newLink.style.color = "rgb(196, 196, 254)";
    });
    newLink.addEventListener("mouseout", () => {
      newLink.style.color = "black";
    });

    newLink.addEventListener("click", (event) => {
      event.preventDefault();
      player.src = "../resources/audio/you_win.mp3"
      player.play();
      setTimeout(function() {
        localStorage.setItem("three", "true");
        window.location = "../pages/hub.html"
      }, 3600)
    });

    // append link
    textScroller.appendChild(newLink);
  }

  // append more text (without overwriting the DOM)
  textScroller.insertAdjacentHTML(
    "beforeend",
    "Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. Ti amo. "
  );
}

function backHub()
{
  window.location = "../pages/hub.html";
}