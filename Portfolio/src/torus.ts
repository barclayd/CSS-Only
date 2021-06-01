import * as THREE from 'three';
import { MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial';

const torusProps = {
  radius: 10,
  tube: 3,
  radialSegments: 16,
  tubularSegments: 100,
};

const materialProps: MeshBasicMaterialParameters = {
  color: 0xff6347,
};

const geometry = new THREE.TorusGeometry(
  torusProps.radius,
  torusProps.tube,
  torusProps.radialSegments,
  torusProps.tubularSegments,
);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const lightHelper = new THREE.PointLightHelper(pointLight);

const gridHelper = new THREE.GridHelper(200, 50);

const ambientLight = new THREE.AmbientLight(0xffffff);

const material = new THREE.MeshStandardMaterial(materialProps);

const shape = new THREE.Mesh(geometry, material);

export const rotate = () => {
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.01;
  shape.rotation.z += 0.01;
};

export default {
  shape,
  rotate,
  material,
  lightHelper,
  gridHelper,
  pointLight,
  ambientLight,
};
