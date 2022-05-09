import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

const Animate3D = () => {
  console.log("Animate3D");
  const canvasDiv = document.getElementById("background3d");
  const size = { width: canvasDiv.offsetWidth, height: canvasDiv.offsetHeight };

  console.log(size);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    1000
  );

  const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
  console.log(DPR);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasDiv,
  });

  renderer.setPixelRatio(DPR);
  renderer.setSize(size);

  camera.position.setZ(10);
  camera.position.setX(50);

  renderer.render(scene, camera);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(8, 14, 14),
    new THREE.MeshNormalMaterial({ color: 0xff6347, wireframe: true })
  );

  scene.add(moon);

  moon.position.z = -10;
  moon.position.setX(10);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.005;
    moon.rotation.y += 0.0075;
    moon.rotation.z += 0.005;

    // sixPic.rotation.y += 0.01;
    // sixPic.rotation.z += 0.01;

    camera.position.z = t * 0.01 + 30;
    camera.position.x = t * 0.02 + 5;

    camera.rotation.z += t * -0.0001;
    // camera.rotation.x += t * -0.0002;
    // camera.rotation.y += t * -0.00005;
  }

  document.body.onmousemove = moveCamera;
  moveCamera();

  function animate() {
    requestAnimationFrame(animate);
    moon.rotation.x += 0.002;
    // controls.update();
    renderer.render(scene, camera);
  }

  animate();

  return <Canvas />;
};

export default Animate3D;
