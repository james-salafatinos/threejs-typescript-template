import * as THREE from "/build/three.module.js";

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

export let items = {
  cube: cube,
};
