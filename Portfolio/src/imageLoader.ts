import * as THREE from 'three';

const loadImage = (url: string) => new THREE.TextureLoader().load(url);

export { loadImage };
