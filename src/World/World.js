import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import {
  createAxesHelper,
  createGridHelper,
} from './components/helpers.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { Snowman } from './components/Train/Snowman.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
  
    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    const snowman = new Snowman();
  
    loop.updatables.push(controls, snowman);
    scene.add(ambientLight, mainLight, snowman);
  
    const resizer = new Resizer(container, camera, renderer);
  
    scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    const { parrot } = await loadBirds();


    // move the target to the center of the front bird

    scene.add(parrot);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
