/* eslint-disable no-unused-vars */
import * as THREE from 'three'

const loadingManager = new THREE.LoadingManager()
let pageLoaded = false

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  const percentage = (itemsLoaded * itemsTotal) / 100
  console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
}

loadingManager.onLoad = () => {
  console.log("Finished loading!")
  pageLoaded = true
}

export { loadingManager, pageLoaded }