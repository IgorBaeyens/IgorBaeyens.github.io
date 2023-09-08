/* eslint-disable no-unused-vars */
import { gsap } from "gsap"

let portraitMenu = document.getElementsByClassName("portrait-menu")[0]
let portraitMenuItems = document.getElementsByClassName("portrait-menu__item")
let portraitBtn = document.getElementsByClassName("portrait-menu__button")[0]
let portraitBtnTop = document.getElementsByClassName("portrait-menu__button__top")[0]
let portraitBtnMid = document.getElementsByClassName("portrait-menu__button__mid")[0]
let portraitBtnBot = document.getElementsByClassName("portrait-menu__button__bot")[0]

const addSiteLogic = () => {
    const portraitMenuLogic = () => {
        portraitBtn.addEventListener('click', (event) => {
            if (window.getComputedStyle(portraitMenu).display == "none") {
                portraitMenu.style.display = "block"
                openPortraitMenu.play()
            } else {
                openPortraitMenu.reverse().then(() => {portraitMenu.style.display = "none"})
            }
        })
    
        let openPortraitMenu = gsap.timeline()
        let crossDuration = 0.5
        let crossEase = "Power1.easeInOut"
        let wordDelay = 0
        openPortraitMenu.to(portraitBtnTop, {translateY: 7, rotate: 45, duration: crossDuration, ease: crossEase}, 0)
        openPortraitMenu.to(portraitBtnMid, {rotate: 45, duration: crossDuration, ease: crossEase}, 0)
        openPortraitMenu.to(portraitBtnBot, {translateY: -8, rotate: -45, duration: crossDuration, ease: crossEase}, 0)
        openPortraitMenu.to(portraitMenu, {opacity: 1, duration: crossDuration}, 0)
        for (const item of portraitMenuItems) {
            openPortraitMenu.fromTo(item, {opacity: 0, translateY: 20}, {opacity: 1, translateY: 0, duration: 0.3, ease: "Power1.easeOut", delay: wordDelay}, 0)
            wordDelay += 0.05
        }
        openPortraitMenu.paused(true)
    }
    portraitMenuLogic()
    
}



export { addSiteLogic }