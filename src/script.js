/* eslint-disable no-unused-vars */
import './css/style.css'
import gsap from 'gsap'
import { addSiteLogic } from './modules/siteLogic'
import { addPortfolioLogic } from './modules/portfolioLogic'

addSiteLogic()
if (document.URL.includes("portfolio")) {
  addPortfolioLogic()
}

const update = () => { 



  
  window.requestAnimationFrame(update)
}
update()