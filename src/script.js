/* eslint-disable no-unused-vars */
import './css/style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { pageLoaded } from './modules/logicLoading'


let started = false
const start = () => {
  

  started = true
}

const update = () => { 
  if(pageLoaded) {
    if(!started) start()
  }


  
  window.requestAnimationFrame(update)
}
update()

export { start }