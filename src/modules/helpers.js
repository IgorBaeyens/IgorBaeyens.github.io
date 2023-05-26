/* eslint-disable no-unused-vars */

import gsap from "gsap"



const elementFadeIn = (element, displayStyle = 'block', duration = 0.5) => {
  return new Promise(function(resolved, rejected) {
    gsap.killTweensOf(element)
    gsap.to(element, {opacity: 1, duration: duration, onStart: () => {
      element.style.display = displayStyle
      resolved()
    }})
  })
  
}
const elementFadeOut = (element, duration = 0.5) => {
  return new Promise(function(resolved, rejected) { 
    gsap.killTweensOf(element)
    gsap.to(element, {opacity: 0, duration: duration, onComplete: () => {
      element.style.display = 'none'
      resolved()
    }})
  })
}

const dynamicElementHeightChange = (dynamicElement, originalHeight, targetHeight, duration = 0.2) => {
  return new Promise(function(resolved, rejected) { 
    gsap.killTweensOf(dynamicElement)
    gsap.fromTo(dynamicElement, {height: originalHeight}, {height: targetHeight, duration: duration, onComplete: () => {
      resolved()
    }})
  })
}

const textTransition = (element, content) => {
  return new Promise(function(resolved, rejected) {
    let timeline = gsap.timeline()
    timeline.to(element, {opacity: 0, duration: 0.3})
    timeline.add(() => {
      element.innerHTML = content
    })
    timeline.to(element, {opacity: 1, duration: 0.3})
    timeline.add(() => {
      resolved()
    })
    timeline.play()
  })
  
}

const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout
  
  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction()
      runInterval()
    }
    
    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
    
    timeout = setTimeout(timeoutFunction, delay)
  }
  
  runInterval()
  
  return {
    clear() { clearTimeout(timeout) }
  }
}

export { setRandomInterval, elementFadeIn, elementFadeOut, dynamicElementHeightChange, textTransition }