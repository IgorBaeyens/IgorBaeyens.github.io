/* eslint-disable no-unused-vars */
import { text } from "./content"
import { elementFade, elementFadeIn, elementFadeOut, textTransition } from "./helpers"
import MiniMasonry from "minimasonry"
import Masonry from "masonry-layout"


let body = document.getElementById('body')
let threeJsBackground = document.getElementById('threeJs-background')
let webgl = document.getElementById('webgl')
let logo = document.getElementById('logo')
let menuButton = document.getElementById('menu-button')
let homeMenu = document.getElementById('home-menu')
let headerMenu = document.getElementById('header-menu')
let expressions = document.getElementById('expressions')
let expressionsTop = document.getElementById('top')
let expressionsBottom = document.getElementById('bottom')
let infoScreenBg = document.getElementById('info-screen_background')
let infoScreen = document.getElementById('info-screen')
let infoScreenText = document.getElementById('info-screen_text')
let videos
let menuActive = false
let clickedMenuItem = ""

let masonry
// let grid = document.querySelector('.grid')
// masonry = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//     gutter: 20,
//     initLayout: true
// })

const manupilateDom = () => {
    body.style.touchAction = 'none'
    webgl.style.display = 'block'
    infoScreenBg.style.display = 'none'
    infoScreenBg.style.opacity = 0
    infoScreen.style.display = 'none'
    infoScreen.style.opacity = 0
    homeMenu.style.display = 'none'
    homeMenu.style.opacity = 0

    windowEdits()
    window.addEventListener('resize', windowEdits)

    menuButtonLogic()
    menuLogic()
    backToHomeLogic()
}

const windowEdits = () => {
    if (window.innerWidth > 1000) {
        expressionsTop.appendChild(expressions)
        homeMenu.style.display = 'flex'
        homeMenu.style.opacity = 1
        menuActive = true
    } else {
        expressionsBottom.appendChild(expressions)
        homeMenu.style.display = 'none'
        homeMenu.style.opacity = 0
        menuActive = false
    }
}

const backToHomeLogic = () => {
    logo.addEventListener('click', () => {
        body.style.touchAction = 'none'
        if (window.innerWidth > 1000) {
            elementFadeIn(homeMenu, 'flex')
            menuActive = true
        }
        elementFadeOut(infoScreenBg)
        elementFadeOut(infoScreen)
    })
}

const menuLogic = () => {
    headerMenu.addEventListener('change', (event) => {
        clickedMenuItem = event.target.value
        changeMenu()
    })
    for (let i = 0; i < homeMenu.children.length; i++) {
        let menuItem = homeMenu.children[i].children[0]
        menuItem.addEventListener('click', event => {
            body.style.touchAction = 'auto'
            elementFadeOut(homeMenu)
            menuActive = false
            clickedMenuItem = event.target.innerText
            elementFadeIn(infoScreenBg, 'flex')
            elementFadeIn(infoScreen, 'flex')
            changeMenu()
        })
    }
}
const changeMenu = () => {
    let displayStyle
    switch (clickedMenuItem.toLowerCase()) {
        case 'info & prices':
            textTransition(infoScreenText, text.infoAndPrices)
        break;
        case 'portfolio':
            textTransition(infoScreenText, text.portfolio).then(() => {
                let grid = document.querySelector('.grid')
                masonry = new Masonry(grid, {
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                    gutter: 20,
                    initLayout: true
                })
                portfolioItemToggleLogic()
            })
            // setTimeout(() => {
            //     masonry.layout()
            //     portfolioItemToggleLogic()
            // }, 100)
        break;
        case 'about':
            textTransition(infoScreenText, text.about)
        break;
        case 'tos':
            textTransition(infoScreenText, text.tos)
        break;
        case 'faq':
            textTransition(infoScreenText, text.faq)
        break;
        default:
        break;
    }
}

const menuButtonLogic = () => {
    menuButton.addEventListener('click', () => { 
        if (menuActive) {
            elementFadeOut(homeMenu)
            menuActive = false
        } else if (!menuActive) {
            elementFadeIn(homeMenu, 'flex')
            menuActive = true
        }
    })
}

const portfolioItemToggleLogic = () => {
    const toggleButtons = document.getElementsByClassName('portfolio-item__toggle')
    const thumbnails = document.getElementsByClassName('portfolio-item__thumbnail')
    const videos = document.getElementsByClassName('portfolio-item__videos')

    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener('click', (event) => {
            console.log(getComputedStyle(thumbnails[i]).display)
            if (getComputedStyle(thumbnails[i]).display == "block") {
                thumbnails[i].style.display = "none"
                videos[i].style.display = "block"
                toggleButtons[i].style.transform = "scale(1, -1)"
            } else {
                thumbnails[i].style.display = "block"
                videos[i].style.display = "none"
                toggleButtons[i].style.transform = "scale(1, 1)"
            }
            masonry.layout()
        })        
    }

}

export { manupilateDom, webgl, videos }