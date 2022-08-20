/* eslint-disable no-unused-vars */
import './style.css'
import * as THREE from 'three'
import { gui, canvas, scene, sizes, clock, renderer } from './modules/setup'
import { loadCharacter } from './modules/logicCharacter'
import { loadCamera } from './modules/logicCamera'

// Camera
loadCamera()

// character
loadCharacter()

// Lights
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 1
pointLight.position.y = 4
pointLight.position.z = 1
scene.add(pointLight)

// renderer
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0xffffff, 1)
