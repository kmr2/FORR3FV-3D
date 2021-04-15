import { MeshStandardMaterial } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'white',
    flatShading: true,
  });

  const hat = new MeshStandardMaterial({
    color: 'black',
    flatShading: true,
  });

  const nose = new MeshStandardMaterial({
      color: 'orange',
      flatShading: true,
  });

  const stone = new MeshStandardMaterial({
      color: 'gray',
      flatShading: true,
  })

  return { body, hat, nose, stone };
}

export { createMaterials };