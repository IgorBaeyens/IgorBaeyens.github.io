/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { LoopOnce } from 'three'
import { customToonMaterial } from './customMaterial'
import { setRandomInterval } from './helpers'
import { loadGLTF } from "./loaders"
import { raycastHitPosition } from './logicCamera'
import { clock, deltaTime, scene } from './setup'

let character


let lookAtBones = []

const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.BackSide
})


const loadCharacter = () => {
  loadGLTF('zel.glb').then(gltf => {
    character = gltf.scene
    const mixer = new THREE.AnimationMixer(gltf.scene)
    const characterClips = gltf.animations

    gltf.scene.traverse(object => {
      // if material name equals these, add toon material
      if(object.type == 'SkinnedMesh') {
        switch (object.material.name) {
          case 'body': 
            addToonMaterial(object)
            // addOutline(object)
            break;
        }
      }

      // put bones in an array for looking at the mouse
      switch (object.name) {
        case 'DEF-spine006': 
        case 'DEF-eyeL': 
        case 'DEF-eyeR': 
          lookAtBones.push(object)
          break; 
      }
      
    })

    // blink animation
    const blinkClip = THREE.AnimationClip.findByName(characterClips, 'blink_action')
    const blinkAction = mixer.clipAction(blinkClip)
    blinkAction.loop = LoopOnce
    setRandomInterval(() => {
      blinkAction.reset()
      blinkAction.play()
    }, 1000, 8000)
    
    // breath animation
    const breathClip = THREE.AnimationClip.findByName(characterClips, 'idle_action')
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
  toonMaterial.side = THREE.DoubleSide
  
  object.material = toonMaterial
  // console.log(toonMaterial)
}

// const addOutline = (object) => {
//   const outlineMesh = new THREE.Mesh(object.geometry, outlineMaterial)
//   outlineMesh.position.set(object.position.x, object.position.y, object.position.z) 
//   outlineMesh.scale.multiplyScalar(1.25)
//   scene.add(outlineMesh)
// }

const addOutline = (object) => {
  const outlineMesh = object.clone()
  outlineMesh.position.set(object.position.x, object.position.y, object.position.z) 
  outlineMesh.scale.multiplyScalar(1.25)
  outlineMesh.material = outlineMaterial
  console.log(outlineMesh)
}


export { loadCharacter, character, lookAtBones }