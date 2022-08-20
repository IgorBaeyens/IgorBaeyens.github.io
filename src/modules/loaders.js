/* eslint-disable no-unused-vars */
import { scene } from './setup'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const loader = new GLTFLoader()
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

const loadGLTF = (file) => {
  return new Promise((resolve, reject) => {
    loader.setDRACOLoader(dracoLoader)
    loader.load('assets/models/' + file, function (gltf) {
      scene.add(gltf.scene)
      resolve(gltf)
    })
  })
}

export { loadGLTF }