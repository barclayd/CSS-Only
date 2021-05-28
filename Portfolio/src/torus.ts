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
  wireframe: true,
};

const geometry = new THREE.TorusGeometry(
  torusProps.radius,
  torusProps.tube,
  torusProps.radialSegments,
  torusProps.tubularSegments,
);

export const material = new THREE.MeshBasicMaterial(materialProps);

const shape = new THREE.Mesh(geometry, material);

export const rotate = () => {
  shape.rotation.x += 0.01;
  shape.rotation.y += 0.05;
  shape.rotation.z += 0.01;
};

export default {
  shape,
  rotate,
};
