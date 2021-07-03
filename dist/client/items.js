import * as THREE from "/build/three.module.js";
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
});
const cube = new THREE.Mesh(geometry, material);
export let items = {
    cube: cube,
};
