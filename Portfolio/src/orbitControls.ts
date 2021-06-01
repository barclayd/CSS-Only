import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { PerspectiveCamera } from 'three';

const orbitControls = (camera: PerspectiveCamera, dom: HTMLCanvasElement) =>
  new OrbitControls(camera, dom);

export { orbitControls };
