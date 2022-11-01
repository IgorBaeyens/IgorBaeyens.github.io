/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { loadGLTF } from "./loaders"
import { blenderCamera, pointer } from './logicCamera'
import { pageLoaded } from './logicLoading'

let hoverScreen
let intersect
let raycastHitPosition
const raycaster = new THREE.Raycaster()

const loadScreen = () => {
  loadGLTF('screen.glb').then(gltf => {
    hoverScreen = gltf.scene
    
    const update = () =>
    { 
      raycaster.setFromCamera(pointer, blenderCamera)

      // get raycast hit position
      if (pageLoaded) {
        intersect = raycaster.intersectObject(hoverScreen, true)
        raycastHitPosition = intersect[0].point
      }
      

      window.requestAnimationFrame(update)
    }
    update()

    
  })
}

export { loadScreen, hoverScreen, raycastHitPosition}