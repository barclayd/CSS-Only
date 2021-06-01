import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { PerspectiveCamera } from 'three';

const orbitControls = (camera: PerspectiveCamera, dom: HTMLCanvasElement) =>
  new OrbitControls(camera, dom);

const moveCamera = (animateTextures: (top: number) => void) => {
  const top = document.body.getBoundingClientRect().top;
  animateTextures(top);
};

export { orbitControls, moveCamera };
