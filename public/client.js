import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';
import Stats from '/jsm/libs/stats.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1.35;
controls.maxDistance = 2;

const light = new THREE.DirectionalLight(0x333333, 1);
light.position.set(5, 3, 5).normalize();
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff));

// Earth
const earth = new THREE.SphereBufferGeometry(0.5, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial();
const planetEarth = new THREE.Mesh(earth, earthMaterial);
earthMaterial.map = THREE.ImageUtils.loadTexture(
  '/images/Earthwithcloudsflipped.jpeg'
);
earthMaterial.side = THREE.BackSide;
scene.add(planetEarth);
// Bumps for texturing
earthMaterial.bumpMap = THREE.ImageUtils.loadTexture(
  '/images/earthbump1kflipped.jpg'
);
earthMaterial.bumpScale = 0.05;

// Specular Texture
earthMaterial.specularMap = THREE.ImageUtils.loadTexture(
  '/images/earthspec1kflipped.jpg'
);
earthMaterial.specular = new THREE.Color('grey');

const clouds = new THREE.SphereBufferGeometry(0.51, 32, 32);
const cloudMaterial = new THREE.MeshPhongMaterial();
const cloudMesh = (clouds, cloudMaterial);
cloudMaterial.map = THREE.ImageUtils.loadTexture(
  '/images/earthcloudmapflipped.jpg'
);
scene.add(cloudMesh);

// Stars

const stars = new THREE.SphereGeometry(90, 32, 32);
const starMaterial = new THREE.MeshBasicMaterial();
starMaterial.map = THREE.ImageUtils.loadTexture('/images/Nasa.webp');
starMaterial.side = THREE.BackSide;
const starMesh = new THREE.Mesh(stars, starMaterial);

// Adding Star Background
scene.add(starMesh);

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

var animate = function () {
  requestAnimationFrame(animate);
  planetEarth.rotation.x += 0;
  planetEarth.rotation.y += -0.001;
  controls.update();
  render();
  stats.update();
};

function render() {
  renderer.render(scene, camera);
}

animate();
