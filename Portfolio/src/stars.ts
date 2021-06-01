import * as THREE from 'three';

const createStar = (scene: THREE.Scene) => {
  const geometry = new THREE.SphereGeometry(0.25);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(1)
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
};

const createStars = (scene: THREE.Scene) => {
  Array(200)
    .fill(1)
    .forEach(() => {
      createStar(scene);
    });
};

export { createStars };
