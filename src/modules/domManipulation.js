/* eslint-disable no-unused-vars */
import gsap from "gsap"
import { text } from "./content"
import { elementFade, textTransition } from "./helpers"
import { sizes } from "./setup"

let webgl = document.getElementById('webgl')
let logo = document.getElementById('logo')
let menuButton = document.getElementById('menu-button')
let homeMenu = document.getElementById('home-menu')
let headerMenu = document.getElementById('header-menu')
let expressions = document.getElementById('expressions')
let expressionsTop = document.getElementById('top')
let expressionsBottom = document.getElementById('bottom')
let infoScreen = document.getElementById('info-screen')
let infoScreenText = document.getElementById('info-screen_text')
let menuActive = false
let clickedMenuItem = ""

const manupilateDom = () => {
    webgl.style.display = 'block'
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
        webgl.style.display = 'block'
        // infoScreen.style.display = 'none'
        elementFade(infoScreen, 'fadeOut')
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
            elementFade(homeMenu, 'fadeOut')
            menuActive = false
            clickedMenuItem = event.target.innerText
            webgl.style.display = 'none'
            // infoScreen.style.display = 'flex'
            elementFade(infoScreen, 'fadeIn')
            changeMenu()
        })
    }
}
const changeMenu = () => {
    switch (clickedMenuItem.toLowerCase()) {
        case 'info & prices':
            textTransition(infoScreenText, text.infoAndPrices, 'column')
        break;
        case 'portfolio':
            textTransition(infoScreenText, text.portfolio, 'row')
        break;
        case 'about':
            textTransition(infoScreenText, text.about, 'column')
        break;
        case 'tos':
            textTransition(infoScreenText, text.tos, 'column')
        break;
        case 'faq':
            textTransition(infoScreenText, text.faq, 'column')
        break;
        default:
        break;
    }
}

const menuButtonLogic = () => {
    menuButton.addEventListener('click', () => { 
        if (menuActive) {
            elementFade(homeMenu, 'fadeOut')
            // homeMenu.style.display = 'none'
            menuActive = false
        } else if (!menuActive) {
            elementFade(homeMenu, 'fadeIn')
            // homeMenu.style.display = 'flex'
            menuActive = true
        }
    })
}

export { manupilateDom, webgl }