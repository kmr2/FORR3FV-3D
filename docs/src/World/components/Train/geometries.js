import { CylinderBufferGeometry, SphereBufferGeometry } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createGeometries() {

    const mainBody = new SphereBufferGeometry(1, 32, 32);

    const stoneSmall = new SphereBufferGeometry(0.05, 10, 10);

    const flat = new SphereBufferGeometry(0.8, 20, 20);

    const cylinder = new CylinderBufferGeometry(0.5, 0.5, 1.5);

    const cone = new CylinderBufferGeometry(0.1, 0, 0.7);

    return {
        mainBody,
        cone,
        flat,
        cylinder,
        stoneSmall,
    };
}

export { createGeometries };
