/* eslint-disable no-unused-vars */
import './css/style.css'
import gsap from 'gsap'
import { addSiteLogic } from './modules/siteLogic'
import { addPortfolioLogic } from './modules/portfolioLogic'
import { addCommissionLogic } from './modules/commissionLogic'

addSiteLogic()
if (document.URL.includes("portfolio")) {
  addPortfolioLogic()
} else if (document.URL.includes("commission")) {
  addCommissionLogic()
}

const update = () => { 



  
  window.requestAnimationFrame(update)
}
update()