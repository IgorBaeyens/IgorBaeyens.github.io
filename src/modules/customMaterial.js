/* eslint-disable no-unused-vars */
import * as THREE from 'three'
import { MeshToonMaterial } from 'three';
import { ExtendedMaterial } from "three-extended-material"

const fresnelExtention = {
  name: "fresnel",
  uniforms: {},
  vertexShader: (shader) => {
    shader = `
    varying vec3 vPositionW;
    varying vec3 vNormalW;
    ${shader.replace(
      "#include <fog_vertex>", 
      `

  
        vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);
        vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      
      #include <fog_vertex>
      `
    )}
    `
    return shader
  },
	fragmentShader: (shader) => {
    shader = `
    varying vec3 vPositionW;
    varying vec3 vNormalW;
    ${shader.replace(
      "#include <output_fragment>", 
      `

      
        vec3 color = vec3(1., 1., 1.);",
        vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
        float fresnelTerm = dot(viewDirectionW, vNormalW);
        fresnelTerm = clamp(1.0 - fresnelTerm, 0., 1.);
  
        gl_FragColor = vec4( color * fresnelTerm, 1.);
  
      
      #include <output_fragment>
      `
    )}
    `
    return shader
  }
}

const customToonMaterial = new ExtendedMaterial(MeshToonMaterial, [fresnelExtention])

export { customToonMaterial }

// const fresnelExtentionn = {
//   name: "fresnel",
//   uniforms: {},
//   vertexShader: [
	
// 		"varying vec3 vPositionW;",
// 		"varying vec3 vNormalW;",

// 		"void main() {",

// 		"	vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);",
// 		" vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );",

// 		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

// 		"}"

// 	].join( "\n" ),
// 	fragmentShader: [
	
// 		"varying vec3 vPositionW;",
// 		"varying vec3 vNormalW;",

// 		"void main() {",
		
// 		"	vec3 color = vec3(1., 1., 1.);",
// 		"	vec3 viewDirectionW = normalize(cameraPosition - vPositionW);",
// 		"	float fresnelTerm = dot(viewDirectionW, vNormalW);",
// 		"	fresnelTerm = clamp(1.0 - fresnelTerm, 0., 1.);",

// 		"	gl_FragColor = vec4( color * fresnelTerm, 1.);",

// 		"}"

// 	].join( "\n" )
// }

