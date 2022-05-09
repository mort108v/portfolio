import * as THREE from "three";

// Setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#background3d"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshNormalMaterial({
  color: 0xff6347,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

// Stars

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 14, 14);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background
const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// Avatar
const sixTexture = new THREE.TextureLoader().load("me_block.png");
const sixPic = new THREE.Mesh(
  new THREE.BoxGeometry(8, 8, 8),
  new THREE.MeshBasicMaterial({ map: sixTexture })
);

scene.add(sixPic);

// Moon

// const moonTexture = new THREE.TextureLoader().load('moon_texture.JPG');
// const normalTexture = new THREE.TextureLoader().load('purple_texture.JPG');

// const moonGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const moonMaterial = new THREE.MeshNormalMaterial({ color: 0xff6347, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(12, 22, 22),
  new THREE.MeshNormalMaterial({ color: 0xff6347, wireframe: true })
  // new THREE.MeshStandardMaterial({
  //     // map: moonTexture,
  //     // normalMap: normalTexture
  // })
);

scene.add(moon);

moon.position.z = -30;
moon.position.setX(-50);

sixPic.position.z = -5;
sixPic.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.005;
  moon.rotation.y += 0.0075;
  moon.rotation.z += 0.005;

  sixPic.rotation.y += 0.01;
  sixPic.rotation.z += 0.01;

  camera.position.z = t * 0.01 + 30;
  camera.position.x = t * 0.02 + 5;

  camera.rotation.z += t * -0.0001;
  // camera.rotation.x += t * -0.0002;
  // camera.rotation.y += t * -0.00005;
}

document.body.onscroll = moveCamera;
moveCamera();

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.002;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
