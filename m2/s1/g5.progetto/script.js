
const getRandomLetter = function () {

    const gs = document.querySelectorAll("g[stroke-linecap=butt]")
    let random = Math.floor(Math.random() * gs.length)
    let currentLetter = gs[random]

    return currentLetter

}

const changeLetterOpacity = function () {
    let letter = getRandomLetter()
    let opacity = parseInt(letter.getAttribute("opacity"))

    if (opacity === 0) {
        letter.setAttribute("opacity", 1)
    } else {
        letter.setAttribute("opacity", 0)
    }
}

const fadeInOutLetters = function () {
    setInterval(function () {
        changeLetterOpacity()
    }, 40)
}

const calculateHeroMarginTop = function () {
    const nav = document.querySelector("nav")
    const hero = document.querySelector(".hero")

    const navbarHeight = nav.getBoundingClientRect().height

    hero.style.marginTop = navbarHeight + "px"
}

window.onload = function () {
    fadeInOutLetters()
    calculateHeroMarginTop()
}



document.addEventListener("scroll", function (event) {
    const nav = document.querySelector("nav")
    const hero = document.querySelector(".hero")

    const heroHeight = hero.offsetHeight


    if (window.pageYOffset >= heroHeight - 80) { /* 80 is to make the change happen a little early on before the end of the hero section, no particular other reason why it's there (just like the original one) */
        console.log("scrolled")
        nav.classList.add("scrolled")
    }
    else {
        nav.classList.remove("scrolled")
        console.log("in place")
    }

})