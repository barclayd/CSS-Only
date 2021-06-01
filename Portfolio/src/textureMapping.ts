import * as THREE from 'three';
import { loadImage } from './imageLoader';

const headImage = loadImage(
  'https://static.thcdn.com/images/large/webp//productimg/1600/1600/10945693-2874844316762726.jpg',
);

const headTexture = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: headImage }),
);

const moonImage = loadImage(
  'https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/moon.jpg',
);

const normalImage = loadImage(
  'https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/normal.jpg',
);

const moonTexture = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({ map: moonImage, normalMap: normalImage }),
);

moonTexture.position.z = 30;

moonTexture.position.setX(-10);

export { headTexture, moonTexture };
