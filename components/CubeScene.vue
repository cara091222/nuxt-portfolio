<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const container = ref(null);
let scene, camera, renderer, cube, controls, animationId;

onMounted(() => {
  // 場景
  scene = new THREE.Scene();

  // 相機
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(2, 2, 3);

  // 渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  container.value.appendChild(renderer.domElement);

  // 光源
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // 立方體
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // OrbitControls（拖曳控制）
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // 慣性效果
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;    // 滾輪縮放
  controls.enablePan = true;     // 平移
  controls.target.set(0, 0, 0);  // 鎖定目標
  controls.update();

  // 動畫
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    controls.update(); // 更新控制器
    renderer.render(scene, camera);
  };
  animate();

  // 視窗縮放
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onResize);
  renderer.dispose();
  controls.dispose();
});

const onResize = () => {
  if (!container.value) return;
  camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
};
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  background: #111;
  overflow: hidden;
}
</style>
