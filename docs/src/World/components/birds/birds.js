import { GLTFLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),

  ]);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 5.2, 0);
  parrot.scale.set(0.01 , 0.01, 0.01);
  parrot.rotation.y = Math.PI / 2;


  return {
    parrot,
  };
}

export { loadBirds };
