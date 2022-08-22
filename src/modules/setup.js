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
  antialias:true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0xffffff, 1)
renderer.outputEncoding = THREE.sRGBEncoding

export { gui, canvas, scene, sizes, clock, renderer }