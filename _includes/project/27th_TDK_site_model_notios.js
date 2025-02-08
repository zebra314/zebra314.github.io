import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene, renderer;
var camera;
var mesh;
var controls;
var container;

function init() {
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 30, 40);
    camera.rotation.z += Math.PI;


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    // document.body.appendChild(renderer.domElement);

    container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // Control settings
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;
    // controls.screenSpacePanning = false;
    controls.enablePan = false;
    controls.minDistance = 20;
    controls.maxDistance = 300;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0, 0);

    //背景色を設定
    renderer.setClearColor(0x00ffff, 1);
    renderer.gammaOutput = true;

    //光源を作成
    var light = new THREE.DirectionalLight("#c1582d", 1);
    var ambient = new THREE.AmbientLight("#85b2cd");
    light.position.set(0, 80, 0).normalize();
    scene.add(light);
    scene.add(ambient);

    var texture = new THREE.Texture();
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) { };
    var onProgress = function (xhr) { };
    var onError = function (xhr) { };

    // 3Dモデル用テクスチャ画像の読込
    var loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
        '../project_lib/models/TDK_27th.glb',
        function (gltf) {

            mesh = gltf.scene;
            mesh.scale.set(10, 10, 10);
            mesh.position.set(-39, 0, 38);
            mesh.rotation.x += Math.PI / 2;
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            scene.add(mesh);

        },
        // called when loading is in progresses
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {
            console.log('An error happened');
        }
    );

    // Show the axis
    // var axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    window.requestAnimationFrame(animate);
}

function animate() {
    renderer.render(scene, camera);
    controls.update();
    window.requestAnimationFrame(animate);
}

window.onload = init;