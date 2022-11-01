/* eslint-disable no-unused-vars */
import { sizes } from "./setup"

let menuButton = document.getElementById('menu-button')
let menu = document.getElementById('home-menu')
let menuActive = false

const manupilateDom = () => {
    displayMenu()
    
    
    console.log(menu)
}

const displayMenu = () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
            menu.style.display = 'flex'
            menuActive = true
        } else {
            menu.style.display = 'none'
            menuActive = false
        }
    })
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

export { manupilateDom }