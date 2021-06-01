import './style.css';
import * as THREE from 'three';
import torus from './torus';
import { moveCamera, orbitControls } from './orbitControls';
import { createStars } from './stars';
import { loadImage } from './imageLoader';
import { headTexture, moonTexture } from './textureMapping';

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

scene.background = loadImage(
  'https://cdn0.wideopencountry.com/wp-content/uploads/2019/05/Night-Sky-2-793x526.jpg',
);

scene.add(headTexture);

scene.add(moonTexture);

scene.add(torus.shape);

scene.add(torus.pointLight, torus.ambientLight);

scene.add(torus.lightHelper);

scene.add(torus.gridHelper);

const controls = orbitControls(camera, renderer.domElement);

createStars(scene);

document.body.onscroll = () =>
  moveCamera((top) => {
    moonTexture.rotation.x += 0.05;
    moonTexture.rotation.y += 0.075;
    moonTexture.rotation.z += 0.05;

    headTexture.rotation.y += 0.01;
    headTexture.rotation.z += 0.01;

    camera.position.z = top * -0.01;
    camera.position.x = top * -0.0002;
    camera.position.y = top * -0.0002;
  });

const animate = () => {
  requestAnimationFrame(animate);
  torus.rotate();
  controls.update();
  renderer.render(scene, camera);
};

animate();
