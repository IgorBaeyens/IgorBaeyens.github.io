/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { loadGLTF } from "./loaders"
import { scene } from './setup'

let character
let characterHeadbone

const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.BackSide
})


const loadCharacter = () => {
  loadGLTF('delutaya_rigged.glb').then(gltf => {
    character = gltf.scene
    
    gltf.scene.traverse(object => {
      if(object.type == 'SkinnedMesh') {
        switch (object.material.name) {
          case 'clothes': {
            addToonMaterial(object)
            break;
          }
          case 'body': {
            addToonMaterial(object)
            console.log(object.morphTargetDictionary)
            console.log(object)
            object.morphTargetInfluences[1] = 0.2
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
    
    // console.log(character)
    
  })
}

const addToonMaterial = (object) => {
  const oldMaterialTexture = object.material.map
  const toonMaterial = object.material = new THREE.MeshToonMaterial({
    map: oldMaterialTexture
  })
  toonMaterial.skinning = true
  toonMaterial.morphTargets = true
  // toonMaterial.morphNormals = true
  console.log(toonMaterial)
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