import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer, controls;

init();
render();

function init() {

    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 40, 50);
    camera.rotation.z += Math.PI;

    scene = new THREE.Scene();

    // lights
    const ambient = new THREE.AmbientLight(0xff9933, 0.1);
    scene.add(ambient);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05; // 可以自行设置阻尼系数
    controls.addEventListener('change', render); // use if there is no animation loop
    controls.minDistance = 20;
    controls.maxDistance = 300;
    controls.target.set(0, 0, 0);
    controls.maxPolarAngle = Math.PI / 2;
    controls.enablePan = false;
    controls.update();

    new RGBELoader()
        .setPath('../project_lib/models/')
        .load('royal_esplanade_1k.hdr', function (texture) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;



            // model

            const loader = new GLTFLoader().setPath('../project_lib/models/');
            loader.load('TDK_27th.glb', function (gltf) {

                gltf.scene.scale.set(10, 10, 10);
                gltf.scene.position.set(-39, 0, 38);
                gltf.scene.rotation.x += Math.PI / 2;

                gltf.scene.castShadow = true; //default is false
                gltf.scene.receiveShadow = true; //default

                scene.add(gltf.scene);

                render();

            });

        });

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

//

function render() {

    renderer.render(scene, camera);

} 