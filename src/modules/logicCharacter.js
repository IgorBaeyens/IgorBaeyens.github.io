/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { LoopOnce } from 'three'
import { customToonMaterial } from './customMaterial'
import { loadGLTF } from "./loaders"
import { raycastHitPosition } from './logicCamera'
import { clock, deltaTime, scene } from './setup'

let character
let characterHeadbone

const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.BackSide
})


const loadCharacter = () => {
  loadGLTF('delutaya_rigged.glb').then(gltf => {
    character = gltf.scene
    const mixer = new THREE.AnimationMixer(gltf.scene)
    const characterClips = gltf.animations
    
    gltf.scene.traverse(object => {
      // if material name equals these, add toon material
      if(object.type == 'SkinnedMesh') {
        switch (object.material.name) {
          case 'clothes': {
            addToonMaterial(object)
            break;
          }
          case 'body': {
            addToonMaterial(object)
            // addOutline(object)
            break;
          }
          case 'hair': {
            addToonMaterial(object)
            break;
          }
        }
      }
      
      // headbone
      if (object.name === 'DEF-spine006') {
        characterHeadbone = object
      }

      
    })
    
   
    // blink animation
    const blinkClip = THREE.AnimationClip.findByName(characterClips, 'Blink')
    const blinkAction = mixer.clipAction(blinkClip)
    blinkAction.loop = LoopOnce
    setInterval(() => {
      blinkAction.reset()
      blinkAction.play()
    }, Math.random() * 8000 + 1000);
    
    // breath animation
    const breathClip = THREE.AnimationClip.findByName(characterClips, 'Breath')
    const breathAction = mixer.clipAction(breathClip)
    breathAction.play()

    const update = () =>
    { 
      mixer.update(deltaTime)
      window.requestAnimationFrame(update)
    }
    update()
  })
}

const addToonMaterial = (object) => {
  
  const oldMaterialTexture = object.material.map
  // const toonMaterial = customToonMaterial
  const toonMaterial = new THREE.MeshToonMaterial()
  toonMaterial.map = oldMaterialTexture
  toonMaterial.skinning = true
  toonMaterial.morphTargets = true
  object.material = toonMaterial
  // console.log(toonMaterial)
}

// const addOutline = (object) => {
//   const outlineMesh = new THREE.Mesh(object.geometry, outlineMaterial)
//   outlineMesh.position.set(object.position.x, object.position.y, object.position.z) 
//   outlineMesh.scale.multiplyScalar(1.25)
//   scene.add(outlineMesh)
// }

// const addOutline = (object) => {
//   const outlineMesh = object.clone()
//   outlineMesh.position.set(object.position.x, object.position.y, object.position.z) 
//   outlineMesh.scale.multiplyScalar(1.25)
//   outlineMesh.material = outlineMaterial
//   console.log(outlineMesh)
// }


export { loadCharacter, character, characterHeadbone }