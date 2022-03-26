const target =  document.querySelector(".sidenav");
const navBtn = document.querySelector(".nav-btn");
const rotatingSvg = document.getElementById("rotating-svg");
const arrow = document.querySelector(".arrow");
const topSub = document.querySelector(".top-sub");
const galleries = document.querySelectorAll("#gallery1");
const exhibitionsMsg = document.querySelector(".exhibitions-msg");
const printer = document.getElementById("print");
const text = document.getElementById("htmeditor-file-input-open-file");
const sidenavContent = document.getElementById("sidenav-content");

/*textFit(document.querySelector("h1"));*/

sidenavContent.style.display="none";

document.addEventListener('click', (event) => {
  const withinBoundaries = event.composedPath().includes(target)

  // when it is clicked
  if (withinBoundaries) {
    target.style.width = "100vw";
    target.classList.add("is-opened");
    rotatingSvg.style.display = "none";
    arrow.style.display = "none";
    topSub.style.display = "none";
    galleries.forEach((gallery) => {
        gallery.style.display = "none";
    })
    exhibitionsMsg.style.display = "none";
    sidenavContent.style.display="inline";



  } else {
    target.style.width = "4vw";
    target.classList.remove("is-opened");
    rotatingSvg.style.display = "inline";
    arrow.style.display = "inline";
    topSub.style.display = "inline";
    galleries.forEach((gallery) => {
        gallery.style.display = "inline";
        gallery.style.justifyContent = "space-between";
    })
    exhibitionsMsg.style.display = "inline";
    sidenavContent.style.display = "none";



  } 
})

function printConsole() {
    console.log(text);
}

target.addEventListener("mouseover", () => {
    // hover effect when sidenav is clicked
    if (target.classList.contains("is-opened")) {
        target.style.width = "102vw"
        target.style.transitionDuration = "350ms";
        document.body.style.paddingLeft = "2vw";
        document.body.style.transitionDuration = "350ms";

        
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
        document.body.style.paddingLeft = "0vw";
        document.body.style.transitionDuration = "350ms";


    }
    // when hover effect is not applied and
    // sidenav is not clicked
    else {
        target.style.width = "4vw";
        document.body.style.paddingLeft = "0vw";
        document.body.style.transitionDuration = "350ms";

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

