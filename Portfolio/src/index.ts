import './style.css';
import * as THREE from 'three';
import torus from './torus';

const ASPECT_RATIO = window.innerWidth / window.innerHeight;
const INITAL_Z_POSITION = 30;
const canvas =
  (document.querySelector('#bg') as HTMLCanvasElement | null) ?? undefined;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, ASPECT_RATIO, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(INITAL_Z_POSITION);

scene.add(torus.shape);

const animate = () => {
  requestAnimationFrame(animate);
  torus.rotate();
  renderer.render(scene, camera);
};

animate();
