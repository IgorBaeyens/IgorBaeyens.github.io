/* eslint-disable no-unused-vars */
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { scene } from './modules/setup'
import { loadCharacter, lookAtBones } from './modules/logicCharacter'
import { loadCamera, raycastHitPosition } from './modules/logicCamera'
import { loadScreen } from './modules/logicScreen'

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(4, 4, 10)
scene.add(light)


loadCamera()
loadCharacter()
loadScreen()

const start = () => {
  light.target = lookAtBones[0]
  
  update()
}

const update = () =>
{ 
  handleLookAtBones()

  window.requestAnimationFrame(update)
}




const handleLookAtBones = () => {
  lookAtBones.forEach((bone) => {
    let easeDuration

    if(bone.name === 'DEF-spine006') easeDuration = 0.2
    else easeDuration = 0.05

    const startRotation = bone.quaternion.clone()
    bone.lookAt(raycastHitPosition)
    const targetRotation = bone.quaternion.clone()
    bone.quaternion.copy(startRotation)

    const lookatDamp = gsap.timeline()
    lookatDamp.to({}, {duration: easeDuration, onUpdate: function() {
      bone.quaternion.copy(startRotation).slerp(targetRotation, this.progress())
    }})
    lookatDamp.play()
  })
} 

export { start }