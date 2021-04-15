import {
  SphereBufferGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';


function createMeshGroup() {
  // a group holds other objects
  // but cannot be seen itself
  const group = new Group();

  const geometry = new SphereBufferGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({
    color: 'indigo',
  });;

  // create one prototype sphere
  const protoSphere = new Mesh(geometry, material);

  // add the sphere to the group
  group.add(protoSphere);


  for(let i = 0; i < 1;i += 0.05) {
    const sphere = protoSphere.clone();

    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);

    sphere.scale.multiplyScalar(i+0.01);

    group.add(sphere);

  }
  

  const radiansPerSecond = MathUtils.degToRad(30);

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  group.scale.multiplyScalar(2);

  return group;
}

export { createMeshGroup };