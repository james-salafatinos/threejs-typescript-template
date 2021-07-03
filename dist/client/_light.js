import * as THREE from "/build/three.module.js";
let hemiLight = new THREE.HemisphereLight(0xfffff, 0.2);
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-30, 50, -30);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.top = -70;
dirLight.shadow.camera.left = 70;
dirLight.shadow.camera.right = 70;
dirLight.shadow.camera.bottom = -70;
export let lights = {
    hemiLight: hemiLight,
    dirLight: dirLight,
};
