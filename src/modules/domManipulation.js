/* eslint-disable no-unused-vars */
import { sizes } from "./setup"

let webgl = document.getElementById('webgl')
let menuButton = document.getElementById('menu-button')
let menu = document.getElementById('home-menu')
let expressions = document.getElementById('expressions')
let expressionsTop = document.getElementById('top')
let expressionsBottom = document.getElementById('bottom')
let infoScreen = document.getElementById('info-screen')
let menuActive = false
let clickedMenuItem = ""

const manupilateDom = () => {
    webgl.style.display = 'block'
    // infoScreen.style.display = 'none'

    displayMenu()
    
    windowEdit()

    getMenuValue()

    window.addEventListener('resize', () => {
        windowEdit()
    })

}

const windowEdit = () => {
    if (window.innerWidth > 1000) {
        expressionsTop.appendChild(expressions)
        menu.style.display = 'flex'
        menuActive = true
    } else {
        expressionsBottom.appendChild(expressions)
        menu.style.display = 'none'
        menuActive = false
    }
}

const getMenuValue = () => {
    for (let i = 0; i < menu.children.length; i++) {
        let menuItem = menu.children[i].children[0]
        menuItem.addEventListener('click', event => {
            clickedMenuItem = event.target.innerText
            webgl.style.display = 'none'
            switch (clickedMenuItem.toLowerCase()) {
                case 'info & prices':
                    infoScreen.style.display = 'flex'
                break;
                case 'portfolio':
                    
                break;
                case 'about':
                
                break;
                case 'tos':
                
                break;
                default:
                break;
            }
        })
    }
}

const displayMenu = () => {
    
    menuButton.addEventListener('click', () => { 
        if (menuActive) {
            menu.style.display = 'none'
            menuActive = false
        } else if (!menuActive) {
            menu.style.display = 'flex'
            menuActive = true
        }
    })
}

export { manupilateDom, webgl }