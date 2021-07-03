import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
/*
Camera, Renderer, and Controls Definition
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 2;
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
/*
Object Handling
*/
import { items } from "./box.js";
scene.add(items.cube);
/*
Animate
*/
var animate = function () {
    requestAnimationFrame(animate);
    items.cube.rotation.x += 0.01;
    items.cube.rotation.y += 0.01;
    controls.update();
    render();
};
function render() {
    renderer.render(scene, camera);
}
animate();
