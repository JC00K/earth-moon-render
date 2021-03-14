import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1.35;
controls.maxDistance = 5;

// Lighting (allows all objects to be visible....a sun for ThreeJS)
const light = new THREE.DirectionalLight(0x333333, 1);
light.position.set(5, 3, 5).normalize();
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff));

// Earth

const earthGeometry = new THREE.SphereBufferGeometry(0.7, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('/images/earthwithclouds.jpeg'),
  color: 0xaaaaaa,
  specular: 0x333333,
  shininess: 25,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);

earthMaterial.side = THREE.FrontSide;
scene.add(earth);

// Bumps for texturing

earthMaterial.bumpMap = THREE.ImageUtils.loadTexture('/images/earthbump1k.jpg');
earthMaterial.bumpScale = 0.05;

// Specular Texture

earthMaterial.specularMap = THREE.ImageUtils.loadTexture(
  '/images/earthspec1k.jpg'
);
earthMaterial.specular = new THREE.Color('grey');

// Moon

const moonGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const moonMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('/images/moonmap.jpg'),
});
moonMaterial.bumpMap = THREE.ImageUtils.loadTexture('/images/moontextures.jpg');
moonMaterial.bumpScale = 0.05;
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.set(0, 0, 0);
scene.add(moon);

// Moon Orbit
const moonRadius = 2.6;
let startAngle = 125.5;
const angleIncrement = 0.001;

// Clouds - Next Update

// const clouds = new THREE.SphereBufferGeometry(0.71, 32, 32);
// const cloudMaterial = new THREE.MeshPhongMaterial();
// const cloudMesh = (clouds, cloudMaterial);
// cloudMaterial.map = THREE.ImageUtils.loadTexture('/images/earthcloudmap.jpg');
// scene.add(cloudMesh);

// Stars

const starGeometry = new THREE.SphereGeometry(90, 32, 32);
const starMaterial = new THREE.MeshBasicMaterial();
starMaterial.map = THREE.ImageUtils.loadTexture('/images/stars.jpg');
starMaterial.side = THREE.BackSide;
const stars = new THREE.Mesh(starGeometry, starMaterial);

// Adding Star Background
scene.add(stars);

window.addEventListener(
  'resize',
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

const stats = Stats();
document.body.appendChild(stats.dom);

let animate = function () {
  requestAnimationFrame(animate);
  earth.rotation.x += 0;
  earth.rotation.y += 0.001;
  moon.rotation.x += 0;
  moon.rotation.y += -0.0001;

  startAngle += angleIncrement;
  moon.position.x = moonRadius * Math.cos(startAngle);
  moon.position.z = moonRadius * Math.sin(startAngle);
  renderer.render(scene, camera);
  controls.update();
  render();
  stats.update();
};

function render() {
  renderer.render(scene, camera);
}

animate();
