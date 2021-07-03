import * as THREE from "/build/three.module.js";
let createCube = function () {
    let scale = { x: 6, y: 6, z: 6 };
    let pos = { x: 15, y: scale.y / 2, z: 15 };
    const geometry = new THREE.BoxBufferGeometry();
    const material = new THREE.MeshPhongMaterial({
        color: 0x0dff62,
        wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.draggable = true;
    mesh.userData.name = "BOX";
    return mesh;
};
let createCylinder = function () {
    let scale = { x: 6, y: 6, z: 6 };
    let pos = { x: -15, y: scale.y / 2, z: 15 };
    const geometry = new THREE.CylinderBufferGeometry();
    const material = new THREE.MeshPhongMaterial({
        color: 0xabdbe3,
        wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.draggable = true;
    mesh.userData.name = "CYLINDER";
    return mesh;
};
let createSphere = function () {
    let radius = 1;
    let scale = { x: 6, y: 6, z: 6 };
    let pos = { x: -15, y: radius * scale.y, z: -15 };
    const geometry = new THREE.SphereBufferGeometry(radius, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x063970,
        wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.draggable = true;
    mesh.userData.name = "SPHERE";
    return mesh;
};
let createIso = function () {
    let scale = { x: 6, y: 6, z: 6 };
    let pos = { x: 15, y: scale.y / 2, z: -15 };
    const geometry = new THREE.IcosahedronBufferGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({
        color: 0x1e81b0,
        wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.draggable = true;
    mesh.userData.name = "ISO";
    return mesh;
};
let createFloor = function () {
    let pos = { x: 0, y: -1, z: 3 };
    let scale = { x: 100, y: 2, z: 100 };
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({
        color: 0xe28743,
        wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.scale.set(scale.x, scale.y, scale.z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.ground = true;
    return mesh;
};
let createStars = function () {
    const vertices = [];
    for (let i = 0; i < 300; i++) {
        const x = THREE.MathUtils.randFloatSpread(200);
        const y = THREE.MathUtils.randFloatSpread(200);
        const z = THREE.MathUtils.randFloatSpread(200);
        vertices.push(x, y, z);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0x888888 });
    const points = new THREE.Points(geometry, material);
    return points;
};
export let items = {
    cube: createCube(),
    floor: createFloor(),
    stars: createStars(),
    cylinder: createCylinder(),
    sphere: createSphere(),
    iso: createIso(),
};
