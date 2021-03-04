import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xe5e5e5);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

window.addEventListener('resize', () => {
    // делаем сцену адаптивной к разрешению экрана и ресайзам
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspects = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshLambertMaterial({color: 0xffcc00});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

renderer.render(scene, camera);