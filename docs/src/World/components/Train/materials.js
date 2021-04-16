import { MeshStandardMaterial, TextureLoader, } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createMaterials() {

  const textureloader = new TextureLoader();

  const snow = textureloader.load(
    '/assets/textures/Snow_001_DISP.png',
  );

  const stoneTexture = textureloader.load (
    '/assets/textures/Asphalt_001_DISP.png',
  )

  const body = new MeshStandardMaterial({
    map: snow,
  });

  const hat = new MeshStandardMaterial({
    color: 'black',
    flatShading: true,
  });

  const nose = new MeshStandardMaterial({
      color: 'orange',
      flatShading: false,
  });

  const stone = new MeshStandardMaterial({
      map: stoneTexture,
  })

  return { body, hat, nose, stone };
}

export { createMaterials };