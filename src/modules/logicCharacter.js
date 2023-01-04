/* eslint-disable no-unused-vars */
import gsap from 'gsap'
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
    let blink = gsap.timeline()
    const mixer = new THREE.AnimationMixer(gltf.scene)
    const characterClips = gltf.animations
    gltf.scene.traverse(object => {
      // if material name equals this, add toon material
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
      
      if(object.name == 'body') {
        let blendShapes = object.morphTargetInfluences
        document.getElementById('expressions').addEventListener('change', (event) => {
          resetBlendShapes()
          switch (event.target.value) {
            case 'happy':
              blendShapes[2] = 1
            break;
            case 'neutral':
            break;
            case 'sad':
              blendShapes[58] = 1
            break;
            case 'angry':
              blendShapes[3] = 1
            break;
            case 'smug':
              blendShapes[1] = 0.2 //bare teeth
              blendShapes[33] = 1 //dimple left
              blendShapes[34] = 1 //dimle right
              blendShapes[30] = 1 //smile right
              blendShapes[56] = 1 //sneer right
              blendShapes[18] = 0.333 //squint right
              blendShapes[48] = 1 //brow right down
              blendShapes[50] = 1 //brow left up
            break;
            
          }
        })
        const resetBlendShapes = () => {
          for (let i = 0; i < blendShapes.length; i++) {
            blendShapes[i] = 0
          }
        }
        blink.to(blendShapes, {0: 1, duration: 0.2})
        blink.to(blendShapes, {0: 0, duration: 0.3})
      }
    })
    
    
    // blink animation
    const blinkClip = THREE.AnimationClip.findByName(characterClips, 'blink_action')
    const blinkAction = mixer.clipAction(blinkClip)
    blinkAction.loop = LoopOnce
    setRandomInterval(() => {
      // blinkAction.stop()
      // blinkAction.play()
      blink.play(0)
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
}


export { loadCharacter, character, lookAtBones }