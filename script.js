const target =  document.querySelector(".sidenav");
const navBtn = document.querySelector(".nav-btn");
const rotatingSvg = document.getElementById("rotating-svg");
const arrow = document.querySelector(".arrow");
const topSub = document.querySelector(".top-sub");


/*textFit(document.querySelector("h1"));*/


document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(target)

  // when it is clicked
  if (withinBoundaries) {
    target.style.width = "100vw";
    target.classList.add("is-opened");
    rotatingSvg.style.display = "none";
    arrow.style.display = "none";
    topSub.style.display = "none";



  } else {
    target.style.width = "4vw";
    target.classList.remove("is-opened");
    rotatingSvg.style.display = "inline";
    arrow.style.display = "inline";
    topSub.style.display = "inline";




  } 
})

target.addEventListener("mouseover", () => {
    // hover effect when sidenav is clicked
    if (target.classList.contains("is-opened")) {
        target.style.width = "102vw"
        target.style.transitionDuration = "350ms";

        
    }
    // default -- sidenav hovered
    // AND sidenav is NOT clicked
    else {
        target.style.width = "5vw";

    }
    
})
target.addEventListener("mouseleave", () => {
    // when hover effect is not applied and
    // sidenav is clicked
    if (target.classList.contains("is-opened")) {
        target.style.width = "100vw";

    }
    // when hover effect is not applied and
    // sidenav is not clicked
    else {
        target.style.width = "4vw";
    }
})

/*
const title = document.querySelector(".title");
setTimeout(() => {
    title.style.color = "#1f1f1f"
    title.style.webkitTextStroke = "2px white";
},3000)
*/

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
    /*
    title.addEventListener("animationend", () => {
        title.style.color = "transparent"
        title.style.webkitTextStroke = "2px white";
    })
    */
    setTimeout(() => {
        title.style.color = "transparent"
        title.style.webkitTextStroke = "2px white";
    },2000)
})

AOS.init({
    duration: 1200,
})

const img = document.getElementById("placeholder");
let i = 0;
setInterval(() => {
    const photos = [
        "photo1.jpg",
        "musoleo.jpg",
        "photo2.jpg",
        "photo3.jpg"
    ];
    img.src = photos[i];

    i++;
    if (i == 4) i = 0;
}, 3000);