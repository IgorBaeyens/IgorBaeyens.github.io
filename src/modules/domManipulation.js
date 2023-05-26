/* eslint-disable no-unused-vars */
import { text } from "./content"
import { dynamicElementHeightChange, elementFadeIn, elementFadeOut, textTransition } from "./helpers"
import Masonry from "masonry-layout"
import { gsap } from "gsap"


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


let masonry

const manupilateDom = () => {
    applyStartingStyle()

    resizeWindowEdits()
    window.addEventListener('resize', resizeWindowEdits)
    
    menuButtonLogic()
    menuNavigationLogic()
    backToHomeLogic()
}

const applyStartingStyle = () => {
    body.style.touchAction = 'none'
    webgl.style.display = 'block'
    infoScreenBg.style.display = 'none'
    infoScreenBg.style.opacity = 0
    infoScreen.style.display = 'none'
    infoScreen.style.opacity = 0
    homeMenu.style.display = 'none'
    homeMenu.style.opacity = 0
}

const resizeWindowEdits = () => {
    if (window.innerWidth > 1000) {
        expressionsTop.appendChild(expressions)
        homeMenu.style.display = 'flex'
        homeMenu.style.opacity = 1
        menuActive = true
        console.log(masonry)
    } else {
        expressionsBottom.appendChild(expressions)
        homeMenu.style.display = 'none'
        homeMenu.style.opacity = 0
        menuActive = false
        console.log(masonry)
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

const menuNavigationLogic = () => {
    let clickedMenuItem = ""
    headerMenu.addEventListener('change', (event) => {
        clickedMenuItem = event.target.value
        console.log(clickedMenuItem)
        changeMenu(clickedMenuItem)
    })
    for (let i = 0; i < homeMenu.children.length; i++) {
        let menuItem = homeMenu.children[i].children[0]
        menuItem.addEventListener('click', event => {
            body.style.touchAction = 'auto'
            menuActive = false
            
            elementFadeOut(homeMenu)
            elementFadeIn(infoScreenBg, 'flex')
            elementFadeIn(infoScreen, 'flex')
            
            clickedMenuItem = event.target.innerText
            changeMenu(clickedMenuItem)
        })
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

const changeMenu = (clickedMenuItem) => {
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

const imageZoomLogic = () => {}

const portfolioItemToggleLogic = () => {
    const portfolioItems = document.getElementsByClassName('grid-item')
    const toggleButtons = document.getElementsByClassName('portfolio-item__toggle')
    const thumbnails = document.getElementsByClassName('portfolio-item__thumbnail')
    const videos = document.getElementsByClassName('portfolio-item__videos')
    
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener('click', (event) => {
            let itemHeightOpen
            let itemHeightClose
            
            if (getComputedStyle(thumbnails[i]).display == "block") {
                itemHeightClose = getComputedStyle(portfolioItems[i]).height
                thumbnails[i].style.display = "none"
                videos[i].style.display = "block"
                itemHeightOpen = getComputedStyle(portfolioItems[i]).height
                thumbnails[i].style.display = "block"
                videos[i].style.display = "none"
                
                elementFadeOut(thumbnails[i]).then(() => {
                    dynamicElementHeightChange(portfolioItems[i], itemHeightClose, itemHeightOpen, 0.2).then(() => {
                        elementFadeIn(videos[i]).then(() => {
                            portfolioItems[i].style.height = "fit-content"
                            masonry.layout()
                        })
                    })
                })

                elementFadeOut(toggleButtons[i]).then(() => {
                    toggleButtons[i].style.transform = "scale(1, -1)"
                    setTimeout(() => {
                        elementFadeIn(toggleButtons[i])
                    }, 200)
                })
            } else {
                itemHeightOpen = getComputedStyle(portfolioItems[i]).height
                thumbnails[i].style.display = "block"
                videos[i].style.display = "none"
                itemHeightClose = getComputedStyle(portfolioItems[i]).height
                thumbnails[i].style.display = "none"
                videos[i].style.display = "block"
                
                elementFadeOut(videos[i]).then(() => {
                    dynamicElementHeightChange(portfolioItems[i], itemHeightOpen, itemHeightClose).then(() => {
                        elementFadeIn(thumbnails[i]).then(() => {
                            portfolioItems[i].style.height = "fit-content"
                            masonry.layout()
                        })
                    })
                })

                elementFadeOut(toggleButtons[i]).then(() => {
                    toggleButtons[i].style.transform = "scale(1, 1)"
                    setTimeout(() => {
                        elementFadeIn(toggleButtons[i])
                    }, 200)
                })
            }
        })        
    }
    
}

export { manupilateDom, webgl, videos }