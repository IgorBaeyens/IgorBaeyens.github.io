/* eslint-disable no-unused-vars */
import './css/style.css'
import gsap from 'gsap'
import { addPortfolioLogic } from './modules/portfolioLogic'


if (document.URL.includes("portfolio")) {
  addPortfolioLogic()
}

const update = () => { 



  
  window.requestAnimationFrame(update)
}
update()