import * as THREE from 'https://cdn.skypack.dev/three@v0.128.0/build/three.module.js';

let mx = 0;
let my = 0;
let fx = 0;
let fy = 0;

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    // Normalize mouse coordinates to range [-1, 1]
    mx = (event.clientX / window.innerWidth) * 2 - 1;
    my = (event.clientY / window.innerHeight) * 2 - 1;
});

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe7e7e7);
// Camera setup
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.85);
const container = document.getElementById('canvas-container');
container.appendChild(renderer.domElement);


// Plane geometry and material with texture
const geometry = new THREE.PlaneGeometry(3, 3);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('assets/img/Loggor/new_logos/logo-small-color-wheel-gradient-white-circle-landing-page.svg');
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });

// Create the plane mesh
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    fx += (mx - fx) * 0.04;
    fy += (my - fy) * 0.04;

    // Rotate the plane for some animation
    plane.position.x = 0.4;
    plane.rotation.x = -0.6 + fy * 0.1;
    plane.rotation.y = -0.3 + fx * 0.1;
    plane.rotation.z = -0.4;

    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth*0.7;
    const height = window.innerHeight*0.85;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});