import React, { Component } from "react";
import * as THREE from "three";
class ThreeSphere extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD sphere
    const geometry = new THREE.SphereGeometry(2, 8, 18);
    const material = new THREE.MeshNormalMaterial({
      color: 0x3ef5f5,
      wireframe: true,
    });
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div
        style={{ width: "300px", height: "300px" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeSphere;
