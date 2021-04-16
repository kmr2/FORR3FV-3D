import { Group, MathUtils } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';
import { createMeshes } from './meshes.js';

const wheelSpeed = MathUtils.degToRad(120);

class Snowman extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
        this.meshes.body,
        this.meshes.bodyMiddle,
        this.meshes.bodyUpper,
        this.meshes.nose,
        this.meshes.bottomHat,
        this.meshes.topHat,
        this.meshes.leftStone,
        this.meshes.rightStone,

      );
  }

  tick(delta) {
    this.meshes.nose.rotation.x += wheelSpeed * delta;
    //this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    //this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    //this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
  }
}

export { Snowman };