/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { loadGLTF } from "./loaders"



const loadScreen = () => {
  loadGLTF('screen.glb').then(gltf => {
    console.log(gltf)
  })
}

export { loadScreen }