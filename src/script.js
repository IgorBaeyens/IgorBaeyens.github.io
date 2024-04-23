/* eslint-disable no-unused-vars */
import './css/style.css'
import gsap from 'gsap'
import { addSiteLogic } from './modules/siteLogic'
import { addPortfolioLogic } from './modules/portfolioLogic'
import { addCommissionLogic } from './modules/commissionLogic'

addSiteLogic()
// having empty space here is a hack
if (document.URL.includes("")) {
  addPortfolioLogic()
} else if (document.URL.includes("commission")) {
  addCommissionLogic()
}

const update = () => { 



  
  window.requestAnimationFrame(update)
}
update()