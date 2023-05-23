/* eslint-disable no-unused-vars */
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { scene } from './modules/setup'
import { loadCharacter, lookAtBones } from './modules/logicCharacter'
import { loadCamera } from './modules/logicCamera'
import { loadScreen, raycastHitPosition } from './modules/logicScreen'
import { manupilateDom } from './modules/domManipulation'
import { pageLoaded } from './modules/logicLoading'


// LIGHTS
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(-4, 4, 10)
scene.add(light)


loadCamera()
loadCharacter()
loadScreen()

manupilateDom()

let started = false
const start = () => {
  light.target = lookAtBones[0]
  started = true
}

const update = () => { 
  if(pageLoaded) {
    if(!started) start()
    handleLookAtBones()
  }

  window.requestAnimationFrame(update)
}
update()

const handleLookAtBones = () => {
  lookAtBones.forEach((bone) => {
    let easeDuration
    let lookAtOffset

    if(bone.name === 'DEF-spine006') {
      easeDuration = 0.2
      lookAtOffset = new THREE.Vector3(0, -0.05, 0)
    } else  {
      easeDuration = 0.05
      lookAtOffset = new THREE.Vector3(0, 0, 0)
    }

    const startRotation = bone.quaternion.clone()
    if (raycastHitPosition) bone.lookAt(raycastHitPosition.add(lookAtOffset))
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