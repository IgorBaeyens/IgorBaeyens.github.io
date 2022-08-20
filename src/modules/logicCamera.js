/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { scene, renderer, sizes } from './setup'
import { loadGLTF } from "./loaders"

let blenderCamera

const loadCamera = () => {
  loadGLTF('camera.glb').then(gltf => {
    blenderCamera = gltf.cameras[0]
    blenderCamera.aspect = sizes.width / sizes.height
    blenderCamera.updateProjectionMatrix()
  })
  
  // resize
  window.addEventListener('resize', () =>
  {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    blenderCamera.aspect = sizes.width / sizes.height
    blenderCamera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
  
  const tick = () =>
  {
    if (blenderCamera) renderer.render(scene, blenderCamera)
    
    window.requestAnimationFrame(tick)
  }
  tick()
}

export { loadCamera }