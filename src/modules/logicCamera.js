/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { scene, renderer, sizes } from './setup'
import { loadGLTF } from "./loaders"
import { hoverScreen } from './logicScreen'

let blenderCamera
let smallScreen = false
const pointer = new THREE.Vector2()

const loadCamera = () => {
  loadGLTF('camera.glb').then(gltf => {
    blenderCamera = gltf.cameras[0]
    blenderCamera.aspect = sizes.width / sizes.height
    
    blenderCamera.updateProjectionMatrix()
    
    handleWindowResize()
    
    
    const update = () =>
    { 
      renderer.render(scene, blenderCamera)

      // set camera offset
      if (sizes.width <= 1000 && smallScreen == false) {
        blenderCamera.position.set(0.16, 0, 0)
        smallScreen = true
      } else if (sizes.width > 1000 && smallScreen == true) {
        blenderCamera.position.set(0, 0, 0)
        smallScreen = false
      }

      window.requestAnimationFrame(update)
    }
    update()
  })  
}

const updatePointerPose = (event) => {
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / (rect.width - rect.left)) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1
}
window.addEventListener('pointermove', updatePointerPose)


const handleWindowResize = () => {
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
}

export { loadCamera, blenderCamera, pointer }