/* eslint-disable no-unused-vars */

import gsap from "gsap"


const elementFade = (element, fadeType, displayStyle = 'none') => {
  let duration = 0.5
  gsap.killTweensOf(element)
  if (fadeType === 'fadeIn') {
    gsap.to(element, {opacity: 1, duration: duration, onStart: () => {
      element.style.display = 'flex'
    }})
  } else if (fadeType === 'fadeOut') {
    gsap.to(element, {opacity: 0, duration: duration, onComplete: () => {
      element.style.display = 'none'
    }})
  }
}
const elementFadeIn = (element, displayStyle = 'block') => {
  let duration = 0.5
  gsap.killTweensOf(element)
  gsap.to(element, {opacity: 1, duration: duration, onStart: () => {
    element.style.display = displayStyle
  }})
}
const elementFadeOut = (element) => {
  let duration = 0.5
  gsap.killTweensOf(element)
  gsap.to(element, {opacity: 0, duration: duration, onComplete: () => {
    element.style.display = 'none'
  }})
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

export { setRandomInterval, elementFade, elementFadeIn, elementFadeOut, textTransition }