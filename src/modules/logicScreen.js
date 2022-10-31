/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { loadGLTF } from "./loaders"

let hoverScreen

const loadScreen = () => {
  loadGLTF('screen.glb').then(gltf => {
    hoverScreen = gltf.scene
  })
}

export { loadScreen, hoverScreen }