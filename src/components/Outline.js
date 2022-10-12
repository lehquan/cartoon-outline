import React, {useMemo} from 'react';
import * as THREE from 'three'

// Tutorial: https://blog.mozvr.com/cartoon-outline-effect/
const Outline = React.memo(() => {
  // const scale = 1.03

  const group = useMemo(() => new THREE.Group(), [])

  const geo = useMemo(() => new THREE.TorusKnotBufferGeometry(0.6, 0.1), []);
  const mat1 = useMemo(() => new THREE.MeshLambertMaterial({color: 'black', side: THREE.BackSide}), []);

  // Fix the Normals of the material shader instead of scale up the mesh
  mat1.onBeforeCompile = shader => {
    const token = '#include <begin_vertex>'
    const customTransform = `vec3 transformed = position + objectNormal*0.02;`
    shader.vertexShader = shader.vertexShader.replace(token, customTransform)
  }

  const mesh1 = useMemo(() => new THREE.Mesh(geo, mat1), []);
  // mesh1.scale.setScalar(scale)
  group.add(mesh1)

  const mat2 = useMemo(() => new THREE.MeshPhongMaterial({color: 'yellow', side: THREE.FrontSide}), [])
  const mesh2 = useMemo(() => new THREE.Mesh(geo, mat2), [])
  group.add(mesh2)

  return <primitive object={group}/>
})

export default Outline
