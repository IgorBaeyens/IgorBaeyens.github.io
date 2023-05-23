/* eslint-disable no-unused-vars */
import { text } from "./content"
import { elementFade, textTransition } from "./helpers"


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
        // if (clickedMenuItem.toLowerCase() == 'portfolio') infoScreenText.style.flexDirection = 'row'
    } else {
        expressionsBottom.appendChild(expressions)
        homeMenu.style.display = 'none'
        homeMenu.style.opacity = 0
        menuActive = false
        // if (clickedMenuItem.toLowerCase() == 'portfolio') infoScreenText.style.flexDirection = 'column'
    }
}

const backToHomeLogic = () => {
    logo.addEventListener('click', () => {
        body.style.touchAction = 'none'
        // webgl.style.display = 'block'
        if (window.innerWidth > 1000) {
            elementFade(homeMenu, 'fadeIn')
            menuActive = true
        }
        elementFade(infoScreenBg, 'fadeOut')
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
            body.style.touchAction = 'auto'
            elementFade(homeMenu, 'fadeOut')
            menuActive = false
            clickedMenuItem = event.target.innerText
            // webgl.style.display = 'none'
            elementFade(infoScreenBg, 'fadeIn')
            elementFade(infoScreen, 'fadeIn')
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
            // textTransition(infoScreenText, text.portfolio)
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
            elementFade(homeMenu, 'fadeOut')
            menuActive = false
        } else if (!menuActive) {
            elementFade(homeMenu, 'fadeIn')
            menuActive = true
        }
    })
}

export { manupilateDom, webgl, videos }