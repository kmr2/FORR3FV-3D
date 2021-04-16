import { Mesh } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const body = new Mesh(geometries.mainBody, materials.body);
  body.position.set(0, 1, 0);

  const bodyMiddle = body.clone();
  bodyMiddle.position.set(0, 2, 0);
  bodyMiddle.scale.set(0.8, 0.8, 0.8);

  const bodyUpper = body.clone();
  bodyUpper.position.set(0, 3, 0);
  bodyUpper.scale.set(0.55, 0.55, 0.55);

  const nose = new Mesh(geometries.cone, materials.nose);
  nose.position.set(0.65, 3, 0);
  nose.rotation.z = Math.PI / 2;

  const bottomHat = new Mesh(geometries.flat, materials.hat);
  bottomHat.position.set(0,3.55,0);
  bottomHat.scale.set(1,0.1,1);

  const topHat = new Mesh(geometries.cylinder, materials.hat);
  topHat.position.set(0,4.3,0);

  const leftStone = new Mesh(geometries.stoneSmall, materials.stone);
  leftStone.position.set(0.5, 3.2, 0.2);

  const rightStone = leftStone.clone();
  rightStone.position.set(0.5, 3.2, -0.2);



  //const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  //smallWheelRear.position.y = 0.5;
  //smallWheelRear.rotation.x = Math.PI / 2;


  //const bigWheel = smallWheelRear.clone();
  //bigWheel.position.set(1.5, 0.9, 0);
  //bigWheel.scale.set(2, 1.25, 2);

  return {
    body,
    bodyMiddle,
    bodyUpper,
    nose,
    bottomHat,
    topHat,
    leftStone,
    rightStone,
  };
}

export { createMeshes };
