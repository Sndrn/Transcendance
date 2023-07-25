<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script lang="ts">
import { ref, onBeforeMount, nextTick, inject } from 'vue';
import * as THREE from 'three';
import { loadGroundObject } from '../TSFiles/addObjects';
import { CameraControls } from '../TSFiles/cameraControls';
import { loadColliders } from '../TSFiles/addColliders'
import { loadTriggers } from '../TSFiles/addTriggers'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const boundingBox = new THREE.Box3();
// const cubeObject = new THREE.Mesh();



export default {
  name: 'Scene',

  setup() {
    const canvasRef = ref<HTMLElement>(null!);
    const openModal = inject('openModal') as () => void;
    const closeModal = inject('closeModal') as () => void;
    console.log("Scene.vue 1");

    onBeforeMount(async () => {
      console.log("Scene.vue 2");

      await nextTick(); // Attendez le rendu initial du composant

      const initScene = () => {
        console.log("Scene.vue 3");
        console.log(canvasRef);
        if (!canvasRef.value) {
          console.log("Scene.vue 4");
          return;
        }
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value });
        renderer.setSize(canvasRef.value.offsetWidth, canvasRef.value.offsetHeight);
        const camera = new THREE.PerspectiveCamera(
          60,
          canvasRef.value.offsetWidth / canvasRef.value.offsetHeight,
          0.1,
          1000
        );
        camera.position.z = 35;
        camera.position.y = 1.7;

        // Ajout de la lumière ambiante
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const cubeGeometry = new THREE.BoxGeometry(1, 2, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.y = 1;
        scene.add(cube);

        // const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
        // const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        // cube.position.y= 1;
        // cube.rotateX(10);
        // scene.add(cube);

        // const loader = new GLTFLoader();
        // loader.load('obj3d/buildingLight.gltf', function(gltf: { scene: any; }) {
        //   const object = gltf.scene;
        //   scene.add(object);
        // });

        // Ajoutez votre code de scène ici

        async function main() {
          await loadGroundObject(scene, openModal, closeModal);
          loadTriggers(scene);
          loadColliders(scene);
          // emit('loading', false);  // Émet un événement lorsque le chargement est terminé
        }

        main();

        const cameraControls = new CameraControls(camera, canvasRef.value, cube);

        // Fonction de rendu de la scène
        const animate = () => {
          requestAnimationFrame(animate);
          // cube.rotateY(0.01);
          cameraControls.update(0.008);
          renderer.render(scene, camera);
        };
        animate();
      };

      initScene();
    });

    return {
      canvasRef,
    };
  },
};
</script>

<style>
canvas {
  position: absolute;
  /* display: flex; */
  width: 100%;
  height: calc(100vh - 50px);
  left: 0;
  right: 0;
  bottom: 0;
  /* padding-top: 50px; */
  box-sizing: border-box;
}
</style>