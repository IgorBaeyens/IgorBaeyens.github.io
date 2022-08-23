/* eslint-disable no-unused-vars */
import './style.css'
import * as THREE from 'three'
import { gui, canvas, scene, sizes, clock, renderer } from './modules/setup'
import { character, characterHeadbone, loadCharacter } from './modules/logicCharacter'
import { loadCamera, raycastHitPosition } from './modules/logicCamera'
import { loadScreen } from './modules/logicScreen'

// Lights
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(4, 4, 10)
scene.add(light)

// Camera
loadCamera()

// character
loadCharacter()

loadScreen()


const start = () => {
  light.target = characterHeadbone
  
  const update = () =>
  { 
    characterHeadbone.lookAt(raycastHitPosition)
    window.requestAnimationFrame(update)
  }
  update()
}

export { start }