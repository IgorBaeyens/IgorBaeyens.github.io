/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import * as dat from 'dat.gui'

// Debug
const gui = new dat.GUI()
// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()
// screen size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
// clock
const clock = new THREE.Clock()
// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

export { gui, canvas, scene, sizes, clock, renderer }