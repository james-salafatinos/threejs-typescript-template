import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls";
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);
/*
Camera, Renderer, and Controls Definition
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = -52;
camera.position.y = 72;
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}
/*
Light Handling
*/
import { lights } from "./_lights.js";
Object.entries(lights).forEach((element) => {
    scene.add(element[1]);
});
/*
Object Handling
*/
import { items } from "./_items.js";
Object.entries(items).forEach((element) => {
    scene.add(element[1]);
});
/*
Ray Casting
*/
const raycaster = new THREE.Raycaster();
const clickMouse = new THREE.Vector2();
const moveMouse = new THREE.Vector2();
var draggable;
window.addEventListener("click", (event) => {
    if (draggable) {
        console.log("droppign draggable,", draggable.userData.name);
        draggable = null;
        return;
    }
    console.log("In event listener");
    clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(clickMouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0 && intersects[0].object.userData.draggable) {
        draggable = intersects[0].object;
        console.log("Found draggable object: ", draggable.userData.name);
    }
});
window.addEventListener("mousemove", (event) => {
    moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    moveMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});
function dragObject() {
    if (draggable != null) {
        raycaster.setFromCamera(moveMouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            for (let o of intersects) {
                if (!o.object.userData.ground) {
                    continue;
                }
                draggable.position.x = o.point.x;
                draggable.position.z = o.point.z;
            }
        }
    }
}
/*
Animate
*/
var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    dragObject();
    render();
};
function render() {
    renderer.render(scene, camera);
}
animate();
